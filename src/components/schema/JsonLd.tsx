/**
 * Server component that emits a <script type="application/ld+json"> tag.
 * Use this as a primitive — every domain-specific schema component below wraps it.
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify already escapes quotes; we still escape </script> defensively.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
