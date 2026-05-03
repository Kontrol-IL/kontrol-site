import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "פרסום פגיעות אבטחה",
  description: "מדיניות פרסום פגיעות אבטחה של Kontrol. אם גיליתם בעיית אבטחה — דווחו לנו.",
  alternates: { canonical: "/security" },
};

export default function Security() {
  return (
    <StubPage
      kicker="אבטחה"
      title="מדיניות פרסום פגיעות אבטחה."
      intro="גיליתם פגיעות אבטחה? אנחנו מעודדים גילוי אחראי. הנה איך לדווח."
      breadcrumbName="פגיעויות אבטחה"
      breadcrumbHref="/security"
      body={
        <>
          <p>{"{{VULNERABILITY_DISCLOSURE_POLICY}}"}</p>
          <p style={{ marginTop: 24 }}>
            לדיווח על בעיית אבטחה: <a href="mailto:security@kontrolauto.net" style={{ color: "var(--accent)" }}>security@kontrolauto.net</a>
          </p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: המדיניות המלאה ממתינה לאישור ([OPERATOR G.9]).
          </p>
        </>
      }
    />
  );
}
