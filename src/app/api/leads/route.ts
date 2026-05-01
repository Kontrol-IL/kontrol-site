import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LEADS_FILE = path.join('/tmp', 'leads.jsonl');
// Admin token — set ADMIN_TOKEN env var on Vercel; falls back to this default for first-deploy access
const FALLBACK_TOKEN = 'kontrol-leads-2026-look-here';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') || '';
  const expected = process.env.ADMIN_TOKEN || FALLBACK_TOKEN;
  if (token !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  let raw = '';
  try {
    raw = await fs.readFile(LEADS_FILE, 'utf8');
  } catch {
    return NextResponse.json({ leads: [], note: 'No leads stored on this function instance yet (file ephemeral per cold start). Check Vercel function logs for full history.' });
  }

  const leads = raw
    .split('\n')
    .filter(Boolean)
    .map(line => {
      try { return JSON.parse(line); } catch { return { _parse_error: line }; }
    });

  return NextResponse.json({
    count: leads.length,
    leads: leads.reverse(), // newest first
  });
}
