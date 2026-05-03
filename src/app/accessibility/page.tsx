import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר Kontrol, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות 5772-2013.",
  alternates: { canonical: "/accessibility" },
};

export default function Accessibility() {
  return (
    <StubPage
      kicker="נגישות"
      title="הצהרת נגישות."
      intro="האתר עומד בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013."
      breadcrumbName="נגישות"
      breadcrumbHref="/accessibility"
      body={
        <>
          <p>{"{{ACCESSIBILITY_STATEMENT}}"}</p>
          <p style={{ marginTop: 24 }}>
            <strong>איש קשר נגישות:</strong> במידה ונתקלתם בבעיה בנגישות האתר, נשמח לקבל ממכם
            פנייה. ניתן ליצור קשר באמצעות עמוד <a href="/contact" style={{ color: "var(--accent)" }}>צור קשר</a>.
          </p>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--text-muted)" }}>
            הערה: הצהרת הנגישות המלאה ממתינה לאישור ([OPERATOR G.6]).
          </p>
        </>
      }
    />
  );
}
