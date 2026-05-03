import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של Kontrol — איך אנחנו אוספים, משתמשים ושומרים את המידע שלכם.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <StubPage
      kicker="פרטיות"
      title="מדיניות פרטיות."
      intro="כיצד Kontrol מטפלת במידע אישי של לקוחות, מבקרי האתר, ומועמדי שירות."
      breadcrumbName="מדיניות פרטיות"
      breadcrumbHref="/privacy"
      body={
        <>
          <p>{"{{PRIVACY_POLICY_TEXT}}"}</p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: מדיניות הפרטיות הסופית ממתינה לאישור היועץ המשפטי של החברה
            ([OPERATOR G.4]).
          </p>
        </>
      }
    />
  );
}
