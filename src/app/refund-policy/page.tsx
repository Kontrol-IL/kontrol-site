import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "ביטול ומדיניות החזרים",
  description: "תנאי ביטול ומדיניות ההחזרים של Kontrol, בהתאם לחוק הגנת הצרכן.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <StubPage
      kicker="מדיניות החזרים"
      title="ביטול ומדיניות החזרים."
      intro="המדיניות שלנו תואמת את חוק הגנת הצרכן. הפירוט המשפטי המלא נמצא כאן."
      breadcrumbName="מדיניות החזרים"
      breadcrumbHref="/refund-policy"
      body={
        <>
          <p>{"{{REFUND_POLICY_TEXT}}"}</p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: הטקסט המשפטי המלא ממתין לאישור היועץ המשפטי של החברה
            ([OPERATOR G.7]). המדיניות תפורסם כאן בעת אישורה הסופי.
          </p>
        </>
      }
    />
  );
}
