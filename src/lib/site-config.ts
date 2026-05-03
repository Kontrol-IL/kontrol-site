/**
 * Single source of truth for NAP, hours, social handles, schema constants.
 * Operator-pending fields use {{...}} placeholders so they can be swapped globally.
 */

export const SITE_URL = "https://kontrolauto.net";
export const BRAND_NAME = "Kontrol";
export const TAGLINE = "צבע לרכב במחיר סיטונאי";
export const LEGAL_ENTITY = "לוחמים בצבע בע\"מ";
export const COMPANY_NUMBER = "{{COMPANY_NUMBER}}"; // [OPERATOR G.3]
export const LEGAL_ADDRESS = {
  streetAddress: "{{STREET_ADDRESS}}", // [OPERATOR G.2]
  addressLocality: "אשדוד",
  addressRegion: "Ashdod",
  postalCode: "{{POSTAL_CODE}}",
  addressCountry: "IL",
};

export const PHONE = "058-404-0744"; // [OPERATOR F.3.2 confirm]
export const PHONE_TEL = "+972584040744";
export const WHATSAPP_E164 = "972527306191"; // [OPERATOR F.3.4 confirm]
export const WHATSAPP_DISPLAY = "052-730-6191";
export const EMAIL = "info@kontrolauto.net"; // [OPERATOR B.3.5 confirm]

// HQ geo coordinates for LocalBusiness schema. [OPERATOR — provide real lat/lng]
export const HQ_GEO = {
  latitude: 31.8044, // Ashdod center placeholder
  longitude: 34.6553,
};

export const BUSINESS_HOURS = "{{BUSINESS_HOURS}}"; // [OPERATOR F.3.1]
// Schema-formatted hours [OPERATOR F.3.1]:
export const HOURS_SPEC = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "18:00" },
  { dayOfWeek: ["Friday"], opens: "08:00", closes: "13:00" },
];

export const SOCIAL = {
  facebook: "{{FACEBOOK_URL}}", // [OPERATOR B.2.2]
  instagram: "{{INSTAGRAM_URL}}", // [OPERATOR B.2.3]
  tiktok: "{{TIKTOK_URL}}", // [OPERATOR B.2.4]
  youtube: "{{YOUTUBE_URL}}", // [OPERATOR B.2.5]
};

export const SERVICE_AREAS = [
  "אשדוד", "פתח תקווה", "אשקלון", "חולון", "כפר קאסם",
  "תל אביב", "ראשון לציון", "חיפה", "באר שבע", "ירושלים",
  "מודיעין",
];

export const PRIMARY_PRICE_NIS = 3490;
export const PRIMARY_PRICE_DISPLAY = "₪3,490 + מע\"מ";

// Build a wa.me URL with optional message. UTMs are appended by buildWhatsappUrl().
export function buildWhatsappRawUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
