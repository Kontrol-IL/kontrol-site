import { JsonLd } from "./JsonLd";
import { SITE_URL, BRAND_NAME } from "@/lib/site-config";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  pageUrl: string;
  datePublished: string; // ISO date
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  image: string; // absolute or root-relative
}

export function ArticleSchema({
  headline,
  description,
  pageUrl,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  image,
}: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
        datePublished,
        dateModified: dateModified ?? datePublished,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${pageUrl}` },
        author: {
          "@type": "Person",
          name: authorName,
          ...(authorUrl ? { url: authorUrl } : {}),
        },
        publisher: {
          "@type": "Organization",
          name: BRAND_NAME,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/kontrol-white.png` },
        },
      }}
    />
  );
}
