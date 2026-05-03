import { JsonLd } from "./JsonLd";
import { SITE_URL, BRAND_NAME, PHONE_TEL, EMAIL } from "@/lib/site-config";

export function ContactPageSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: `${SITE_URL}/contact`,
        name: `צור קשר — ${BRAND_NAME}`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: PHONE_TEL,
            email: EMAIL,
            contactType: "customer service",
            areaServed: "IL",
            availableLanguage: ["Hebrew", "English"],
          },
        ],
      }}
    />
  );
}
