import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת רכבי צי — לציי טקסי, ליסינג, מסחרי",
  description:
    "תוכניות צביעה לציי רכב — טקסי, חברות הסעות, רכבי ליסינג, רכבי מסחרי. תמחור פרטני לפי כמות.",
  alternates: { canonical: "/b2b/fleets" },
};

export default function B2BFleets() {
  return (
    <ServicePageShell
      pageUrl="/b2b/fleets"
      kicker="B2B · ציי רכב"
      h1="צביעה לציי רכב — מחיר B2B אמיתי."
      intro={`אם אתם מנהלים צי רכב — חברת הסעות, חברת ליסינג, צי מסחרי, או חברת השכרה — אנחנו מציעים תמחור פרטני לפי כמות. ככל שיותר רכבים — מחיר נמוך יותר. שירות איסוף ומשלוח חינם, גם לצי שלם בבת אחת.`}
      breadcrumb={[
        { name: "B2B", href: "/services" },
        { name: "ציי רכב" },
      ]}
      hideQuizCta={true}
      highlights={[
        { title: "תמחור לפי כמות", text: "10+ רכבים = מחיר מותאם. 50+ רכבים = מחיר חוזה ארוך טווח." },
        { title: "תזמון מתואם", text: "צביעת צי שלם בלוחות זמנים מתואמים — לא לקלקל את התפעול שלכם." },
        { title: "תיעוד מלא", text: "דוח עבודה לכל רכב, תמונות לפני ואחרי, חשבונית מפורטת." },
        { title: "אחריות מורחבת", text: "תנאי אחריות מותאמים לצי — תיקון נזק חוזר ב־12 החודשים הראשונים." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            סוגי לקוחות B2B
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li><strong>חברות ליסינג:</strong> תיקוני סוף תקופה, החלפת גוון לפני מכירה.</li>
            <li><strong>חברות הסעות / טקסי:</strong> שמירת מראה הצי לאורך זמן.</li>
            <li><strong>חברות השכרה:</strong> תיקוני שריטות תכופים, צביעות מלאות תקופתיות.</li>
            <li><strong>ציי מסחרי:</strong> רכבי משלוחים עם ברנדינג — צריכים להיראות בריאים.</li>
            <li><strong>סוכנויות רכב:</strong> צביעות לפני מסירה, צביעת הוצאת מלאי.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            איך זה עובד
          </h2>
          <ol style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>שיחה ראשונה — להבין את הצי שלכם, סוג רכבים, היקף עבודה צפוי.</li>
            <li>הצעת מחיר מותאמת — תוך 48 שעות.</li>
            <li>הסכם שירות — תנאים, אחריות, תזמון.</li>
            <li>טיפול ראשון — רכב פיילוט אחד, לבדיקת איכות.</li>
            <li>הסכם ארוך טווח — צביעות שוטפות לכל הצי.</li>
          </ol>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            יצירת קשר B2B
          </h2>
          <p>
            לקוחות B2B עובדים מולנו ישירות עם מנהל פרויקטים, לא דרך השאלון הציבורי. שלחו לנו
            פרטים לאימייל <a href="mailto:b2b@kontrolauto.net" style={{ color: "var(--accent)" }}>b2b@kontrolauto.net</a>{" "}
            או חייגו ל־{"{{B2B_PHONE_OR_GENERAL}}"}.
          </p>
        </>
      }
      related={[
        { href: "/b2b/insurance", label: "שותפי ביטוח" },
        { href: "/b2b/dealerships", label: "סוכנויות רכב" },
        { href: "/services/full-repaint", label: "צביעה מלאה (פרטי)" },
      ]}
    />
  );
}
