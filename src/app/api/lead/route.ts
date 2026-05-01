import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAKE_WEBHOOK = 'https://hook.eu2.make.com/i7d63xdk4nu4pveujd233c0icpoyiyy9';
const LEADS_FILE = path.join('/tmp', 'leads.jsonl');

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await req.json();
  } catch {
    payload = { event: 'invalid_json', raw: await req.text() };
  }

  const enriched = {
    ...payload,
    server_ts: new Date().toISOString(),
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '',
    ua: req.headers.get('user-agent') || '',
    referer: req.headers.get('referer') || '',
  };

  // ALWAYS log every lead to Vercel function logs (visible in dashboard)
  console.log('[LEAD]', JSON.stringify(enriched));

  // Best-effort write to /tmp (ephemeral on Vercel but lasts the warm-instance lifetime)
  try {
    await fs.appendFile(LEADS_FILE, JSON.stringify(enriched) + '\n', 'utf8');
  } catch (e) {
    console.error('[LEAD_FILE_WRITE_FAIL]', (e as Error).message);
  }

  // Forward to Make.com webhook server-side — no CORS issues here
  let makeStatus = 0;
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

  return NextResponse.json(
    { ok: true, make_status: makeStatus },
    { status: 200, headers: CORS }
  );
}
