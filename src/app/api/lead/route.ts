import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAKE_WEBHOOK = 'https://hook.eu2.make.com/spgz4ao4s85gqvff4dmv63mz2up79f7b';
const LEADS_FILE = path.join('/tmp', 'leads.jsonl');
const DEDUPE_FILE = path.join('/tmp', 'lead-dedupe.json');
const DEDUPE_WINDOW_MS = 60_000;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

type LeadPayload = Record<string, unknown> & {
  event?: string;
  phone?: string;
  first_name?: string;
  email?: string;
  page?: string;
  utm_campaign?: string;
  utm_adset?: string;
  utm_ad?: string;
  qualification?: string;
};

function normalizePhone(phone: unknown): string {
  if (typeof phone !== 'string') return '';
  return phone.replace(/[^0-9]/g, '').replace(/^972/, '0');
}

async function checkDedupe(phoneNorm: string): Promise<boolean> {
  if (!phoneNorm) return false;
  try {
    const raw = await fs.readFile(DEDUPE_FILE, 'utf8');
    const map: Record<string, number> = JSON.parse(raw);
    const now = Date.now();
    const last = map[phoneNorm] || 0;
    if (now - last < DEDUPE_WINDOW_MS) return true;
    map[phoneNorm] = now;
    for (const k of Object.keys(map)) {
      if (now - map[k] > DEDUPE_WINDOW_MS * 10) delete map[k];
    }
    await fs.writeFile(DEDUPE_FILE, JSON.stringify(map), 'utf8');
    return false;
  } catch {
    await fs.writeFile(DEDUPE_FILE, JSON.stringify({ [phoneNorm]: Date.now() }), 'utf8').catch(() => {});
    return false;
  }
}

async function writeBlob(enriched: LeadPayload & { lead_id: string; server_ts: string }): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    const { put } = await import('@vercel/blob');
    const date = enriched.server_ts.slice(0, 10);
    const key = `leads/${date}/${enriched.server_ts.replace(/[:.]/g, '-')}-${enriched.lead_id}.json`;
    const result = await put(key, JSON.stringify(enriched, null, 2), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    return result.url;
  } catch (e) {
    console.error('[BLOB_WRITE_FAIL]', (e as Error).message);
    return null;
  }
}

export async function POST(req: NextRequest) {
  let payload: LeadPayload = {};
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    payload = { event: 'invalid_json', raw: await req.text() };
  }

  const lead_id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  const enriched = {
    ...payload,
    lead_id,
    server_ts: new Date().toISOString(),
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '',
    ua: req.headers.get('user-agent') || '',
    referer: req.headers.get('referer') || '',
  };

  const isLead = enriched.event === 'lead_submitted';

  if (enriched.event === 'tochat_log') {
    console.log('[TOCHAT_RESULT]', JSON.stringify(enriched));
    return NextResponse.json({ ok: true, logged: true }, { status: 200, headers: CORS });
  }
  console.log(isLead ? '[LEAD]' : '[TRACK]', JSON.stringify(enriched));

  if (!isLead) {
    return NextResponse.json(
      { ok: true, lead_id, is_lead: false, make_skipped: 'not_a_lead' },
      { status: 200, headers: CORS }
    );
  }

  const phoneNorm = normalizePhone(enriched.phone);
  const isDup = await checkDedupe(phoneNorm);

  try {
    await fs.appendFile(LEADS_FILE, JSON.stringify(enriched) + '\n', 'utf8');
  } catch (e) {
    console.error('[LEAD_FILE_WRITE_FAIL]', (e as Error).message);
  }

  let blobUrl: string | null = null;
  let makeStatus = 0;
  let makeSkipped: 'duplicate' | null = null;

  if (isDup) {
    makeSkipped = 'duplicate';
    console.log('[LEAD_DEDUPED]', phoneNorm, lead_id);
  } else {
    blobUrl = await writeBlob(enriched);

    try {
      const r = await fetch(MAKE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enriched),
      });
      makeStatus = r.status;
    } catch (e) {
      console.error('[MAKE_FORWARD_FAIL]', (e as Error).message);
    }
  }

  return NextResponse.json(
    {
      ok: true,
      lead_id,
      is_lead: true,
      make_status: makeStatus,
      make_skipped: makeSkipped,
      blob_url: blobUrl,
    },
    { status: 200, headers: CORS }
  );
}
