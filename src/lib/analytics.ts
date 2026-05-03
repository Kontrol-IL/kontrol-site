"use client";

/**
 * Lightweight analytics dispatcher.
 * Pushes to GTM dataLayer (which forwards to GA4 via configured tags) and
 * fires Meta Pixel events. Server-side CAPI mirroring is done by the receiving
 * components (e.g. /api/lead, /api/capi) — not here.
 */

type EventName =
  | "page_view"
  | "scroll_depth_25"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_100"
  | "cta_click"
  | "quiz_start"
  | `quiz_step_${number}_complete`
  | "quiz_complete"
  | "quiz_qualified"
  | "quiz_disqualified"
  | "whatsapp_open"
  | "phone_click"
  | "lead_submitted";

interface DataLayerWindow extends Window {
  dataLayer?: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
}

/** Push an event to GTM dataLayer + fire Meta Pixel equivalent (best-effort). */
export function track(event: EventName, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });

  // Meta Pixel — map to standard Pixel events where appropriate
  if (typeof w.fbq === "function") {
    if (event === "lead_submitted") w.fbq("track", "Lead", params);
    else if (event === "quiz_start") w.fbq("track", "InitiateCheckout", params);
    else if (event === "cta_click") w.fbq("trackCustom", "CTAClick", params);
    else w.fbq("trackCustom", event, params);
  }
}

/** Server-side mirror: post the same event to /api/capi for Meta CAPI dedup. */
export async function trackServer(
  event: EventName,
  params: Record<string, unknown> = {},
  eventId?: string
): Promise<void> {
  if (typeof window === "undefined") return;
  try {
    await fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_name: event, event_id: eventId, custom_data: params }),
      keepalive: true,
    });
  } catch {
    // best-effort; swallow
  }
}
