import { JsonLd } from "./JsonLd";

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT5D"
}

export function HowToSchema({ name, description, steps, totalTime }: HowToSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        ...(totalTime ? { totalTime } : {}),
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    />
  );
}
