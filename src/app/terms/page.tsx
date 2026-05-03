import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description: "תנאי השימוש באתר Kontrol ובשירותים שאנחנו מציעים.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <StubPage
      kicker="תנאי שימוש"
      title="תנאי שימוש."
      intro="התנאים החלים על השימוש באתר ובשירותי Kontrol."
      breadcrumbName="תנאי שימוש"
      breadcrumbHref="/terms"
      body={
        <>
          <p>{"{{TERMS_TEXT}}"}</p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: התנאים הסופיים ממתינים לאישור היועץ המשפטי של החברה
            ([OPERATOR G.5]).
          </p>
        </>
      }
    />
  );
}
