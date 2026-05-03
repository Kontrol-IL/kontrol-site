"use client";

/**
 * Captures UTM/click params on first visit, persists for the session.
 * Read with `getStoredUtm()` from anywhere on the client.
 */

const KEY = "kontrol_utm";
const PARAMS = [
  "utm_campaign",
  "utm_adset",
  "utm_ad",
  "utm_source",
  "utm_medium",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
] as const;

type UtmKey = (typeof PARAMS)[number];
export type UtmRecord = Partial<Record<UtmKey, string>>;

/** Read current URL UTM params (fresh, not stored). */
function readUrlUtm(): UtmRecord {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const out: UtmRecord = {};
  for (const k of PARAMS) {
    const v = sp.get(k);
    if (v) out[k] = v;
  }
  return out;
}

/** Read stored UTMs (from sessionStorage). Empty if never set. */
export function getStoredUtm(): UtmRecord {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw) as UtmRecord;
  } catch {
    return {};
  }
}

/**
 * On first visit (or whenever ?utm_* is in URL), capture and persist.
 * Call this in a top-level useEffect.
 */
export function captureUtmIfPresent(): UtmRecord {
  if (typeof window === "undefined") return {};
  const fresh = readUrlUtm();
  if (Object.keys(fresh).length > 0) {
    try {
      // Merge with any existing — fresh wins per key
      const existing = getStoredUtm();
      const merged = { ...existing, ...fresh };
      sessionStorage.setItem(KEY, JSON.stringify(merged));
      return merged;
    } catch {
      return fresh;
    }
  }
  return getStoredUtm();
}

/** Build a wa.me URL with stored UTMs appended to the message text. */
export function buildWhatsappUrl(message: string, phoneE164 = "972527306191"): string {
  const utm = getStoredUtm();
  const utmStr = Object.keys(utm).length
    ? `\n\n---\n${Object.entries(utm).map(([k, v]) => `${k}=${v}`).join(" · ")}`
    : "";
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message + utmStr)}`;
}
