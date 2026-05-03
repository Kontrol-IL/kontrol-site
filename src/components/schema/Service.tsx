import { JsonLd } from "./JsonLd";
import { SITE_URL, BRAND_NAME, PRIMARY_PRICE_NIS, SERVICE_AREAS } from "@/lib/site-config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  pageUrl: string;
  price?: number;
  priceCurrency?: string;
  areaServedCity?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  pageUrl,
  price = PRIMARY_PRICE_NIS,
  priceCurrency = "ILS",
  areaServedCity,
  serviceType = "AutoBodyShop",
}: ServiceSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${pageUrl}#service`,
        name,
        description,
        serviceType,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: BRAND_NAME,
        },
        areaServed: areaServedCity
          ? { "@type": "City", name: areaServedCity }
          : SERVICE_AREAS.map((c) => ({ "@type": "City", name: c })),
        offers: {
          "@type": "Offer",
          price,
          priceCurrency,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${pageUrl}`,
        },
      }}
    />
  );
}
