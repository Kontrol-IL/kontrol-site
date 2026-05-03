import { JsonLd } from "./JsonLd";
import {
  SITE_URL,
  BRAND_NAME,
  LEGAL_ENTITY,
  PHONE_TEL,
  EMAIL,
  LEGAL_ADDRESS,
  SOCIAL,
} from "@/lib/site-config";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        legalName: LEGAL_ENTITY,
        url: SITE_URL,
        logo: `${SITE_URL}/kontrol-white.png`,
        sameAs: Object.values(SOCIAL).filter((u) => !u.startsWith("{{")),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: PHONE_TEL,
            contactType: "customer service",
            areaServed: "IL",
            availableLanguage: ["Hebrew", "English"],
          },
        ],
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          ...LEGAL_ADDRESS,
        },
      }}
    />
  );
}
