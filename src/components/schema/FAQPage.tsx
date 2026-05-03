import { JsonLd } from "./JsonLd";

interface FAQPageSchemaProps {
  questions: { q: string; a: string }[];
}

export function FAQPageSchema({ questions }: FAQPageSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}
