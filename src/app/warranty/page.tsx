import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "אחריות צביעת רכב",
  description: "תנאי האחריות של Kontrol על עבודות צביעת רכב.",
  alternates: { canonical: "/warranty" },
};

export default function Warranty() {
  return (
    <StubPage
      kicker="אחריות"
      title="אחריות על עבודות צביעת רכב."
      intro="אחריות מלאה על איכות הצביעה. הפרטים המדויקים מתפרסמים כאן בקרוב."
      breadcrumbName="אחריות"
      breadcrumbHref="/warranty"
      body={
        <>
          <p>
            <strong>תקופת האחריות:</strong> {"{{WARRANTY_TERMS}}"}
          </p>
          <p>
            תנאי האחריות המלאים זמינים בעת קביעת התור, ויסופקו ככתובים בכתב לפני תחילת העבודה.
            אנחנו עובדים רק עם מוסכים מאומתים ביחסים ארוכי טווח — רכב שלא חוזר באיכות שאנחנו
            מצפים מתוקן על חשבון המוסך.
          </p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: התוכן המשפטי המלא ממתין לאישור היועץ המשפטי של החברה
            ([OPERATOR G.7]).
          </p>
        </>
      }
    />
  );
}
