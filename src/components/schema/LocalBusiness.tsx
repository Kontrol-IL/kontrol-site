import { JsonLd } from "./JsonLd";
import {
  SITE_URL,
  BRAND_NAME,
  LEGAL_ADDRESS,
  PHONE_TEL,
  HQ_GEO,
  HOURS_SPEC,
  PRIMARY_PRICE_NIS,
  SERVICE_AREAS,
} from "@/lib/site-config";

interface LocalBusinessSchemaProps {
  /** Page-specific URL (e.g. /branches/ashdod). Defaults to homepage. */
  pageUrl?: string;
  /** City to localize areaServed (default: Israel-wide). */
  city?: string;
}

export function LocalBusinessSchema({ pageUrl = "/", city }: LocalBusinessSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "AutoBodyShop",
        "@id": `${SITE_URL}${pageUrl}#localbusiness`,
        name: BRAND_NAME,
        url: `${SITE_URL}${pageUrl}`,
        image: `${SITE_URL}/images/hero.jpeg`,
        telephone: PHONE_TEL,
        priceRange: `₪₪`,
        address: {
          "@type": "PostalAddress",
          ...LEGAL_ADDRESS,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: HQ_GEO.latitude,
          longitude: HQ_GEO.longitude,
        },
        openingHoursSpecification: HOURS_SPEC.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.dayOfWeek,
          opens: h.opens,
          closes: h.closes,
        })),
        areaServed: city
          ? { "@type": "City", name: city }
          : SERVICE_AREAS.map((c) => ({ "@type": "City", name: c })),
        makesOffer: [
          {
            "@type": "Offer",
            name: "צביעת רכב מלאה",
            price: PRIMARY_PRICE_NIS,
            priceCurrency: "ILS",
            description: "צביעה מלאה של הרכב במחיר סיטונאי, כולל איסוף ומשלוח, פוליש פנסים, וניקוי פנימי וחיצוני",
          },
        ],
      }}
    />
  );
}
