import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LEADS_FILE = path.join('/tmp', 'leads.jsonl');
const FALLBACK_TOKEN = 'kontrol-leads-2026-look-here';

type LeadRecord = Record<string, unknown>;

async function readBlobs(prefix: string): Promise<LeadRecord[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { list, get } = await import('@vercel/blob');
    const items: LeadRecord[] = [];
    let cursor: string | undefined;
    let pageCount = 0;
    do {
      const page = await list({
        prefix,
        cursor,
        limit: 1000,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      const fetches = await Promise.all(
        page.blobs.map(async (b) => {
          try {
            const r = await get(b.pathname, {
              access: 'private',
              token: process.env.BLOB_READ_WRITE_TOKEN,
            });
            if (!r || !r.stream) return null;
            const reader = (r.stream as ReadableStream<Uint8Array>).getReader();
            const chunks: Uint8Array[] = [];
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              if (value) chunks.push(value);
            }
            const text = Buffer.concat(chunks).toString('utf8');
            return JSON.parse(text) as LeadRecord;
          } catch {
            return null;
          }
        })
      );
      for (const f of fetches) if (f) items.push(f);
      cursor = page.cursor;
      pageCount++;
      if (pageCount > 20) break;
    } while (cursor);
    return items;
  } catch (e) {
    console.error('[BLOB_LIST_FAIL]', (e as Error).message);
    return [];
  }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') || '';
  const expected = process.env.ADMIN_TOKEN || FALLBACK_TOKEN;
  if (token !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const adset = req.nextUrl.searchParams.get('adset') || '';
  const date = req.nextUrl.searchParams.get('date') || '';
  const limit = Math.min(Number(req.nextUrl.searchParams.get('limit')) || 5000, 10000);
  const format = req.nextUrl.searchParams.get('format') || 'json';

  const prefix = date ? `leads/${date}/` : 'leads/';
  let leads = await readBlobs(prefix);

  if (leads.length === 0) {
    let raw = '';
    try {
      raw = await fs.readFile(LEADS_FILE, 'utf8');
    } catch {
      return NextResponse.json({
        source: 'none',
        count: 0,
        leads: [],
        note: 'No leads found in Blob storage. /tmp file is empty on this instance.',
      });
    }
    leads = raw.split('\n').filter(Boolean).map(line => {
      try { return JSON.parse(line); } catch { return { _parse_error: line }; }
    });
    leads.reverse();
    const filtered = adset ? leads.filter(l => l.utm_adset === adset) : leads;
    return NextResponse.json({
      source: 'tmp',
      count: filtered.length,
      leads: filtered.slice(0, limit),
      note: 'Reading from ephemeral /tmp file (resets on cold start).',
    });
  }

  leads.sort((a, b) => String(b.server_ts || '').localeCompare(String(a.server_ts || '')));

  if (adset) leads = leads.filter(l => l.utm_adset === adset);
  leads = leads.slice(0, limit);

  if (format === 'csv') {
    const cols = ['server_ts', 'first_name', 'phone', 'email', 'page', 'qualification', 'utm_campaign', 'utm_adset', 'utm_ad', 'fbclid', 'ip'];
    const csvLines = [cols.join(',')];
    for (const r of leads) {
      csvLines.push(cols.map(c => {
        const v = String(r[c] ?? '').replace(/"/g, '""');
        return /[,"\n]/.test(v) ? '"' + v + '"' : v;
      }).join(','));
    }
    return new NextResponse('﻿' + csvLines.join('\n'), {
      status: 200,
      headers: { 'Content-Type': 'text/csv; charset=utf-8' },
    });
  }

  return NextResponse.json({ source: 'blob', count: leads.length, leads });
}
