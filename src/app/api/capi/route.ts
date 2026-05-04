import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Meta Conversions API mirror endpoint.
 * Required env vars (operator [H.3]/[H.4]):
 *   - META_PIXEL_ID
 *   - META_CAPI_TOKEN
 *   - META_DATASET_ID (often equal to META_PIXEL_ID)
 *
 * Without env vars set, returns ok:true and skips the upstream POST so the
 * site is functional without analytics during development.
 */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const CAPI_TOKEN = process.env.META_CAPI_TOKEN || "";
const DATASET_ID = process.env.META_DATASET_ID || PIXEL_ID;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

interface CapiPayload {
  event_name: string;
  event_id?: string;
  user_data?: Record<string, unknown>;
  custom_data?: Record<string, unknown>;
}

function sha256(input: string): string {
  return crypto.createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

export async function POST(req: NextRequest) {
  let body: CapiPayload;
  try {
    body = (await req.json()) as CapiPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400, headers: CORS });
  }

  if (!body.event_name) {
    return NextResponse.json({ ok: false, error: "missing_event_name" }, { status: 400, headers: CORS });
  }

  if (!PIXEL_ID || !CAPI_TOKEN) {
    // Dev mode — analytics not configured. Acknowledge silently.
    return NextResponse.json(
      { ok: true, configured: false, note: "META_PIXEL_ID/META_CAPI_TOKEN not set" },
      { status: 200, headers: CORS }
    );
  }

  // Hash PII in user_data
  const ud = body.user_data || {};
  const hashed: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(ud)) {
    if (typeof v !== "string" || !v) continue;
    if (["em", "ph", "fn", "ln", "ct", "country", "zp", "external_id"].includes(k)) {
      hashed[k] = sha256(v);
    } else {
      hashed[k] = v;
    }
  }

  // Add request-derived signals
  hashed.client_ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
  hashed.client_user_agent = req.headers.get("user-agent") || "";

  const event = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    action_source: "website",
    event_source_url: req.headers.get("referer") || "https://kontrolauto.co.il",
    user_data: hashed,
    custom_data: body.custom_data || {},
  };

  try {
    const r = await fetch(
      `https://graph.facebook.com/v20.0/${DATASET_ID}/events?access_token=${encodeURIComponent(CAPI_TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [event] }),
      }
    );
    const text = await r.text();
    return NextResponse.json(
      { ok: r.ok, status: r.status, response: text.slice(0, 400), event_id: event.event_id },
      { status: 200, headers: CORS }
    );
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500, headers: CORS }
    );
  }
}
