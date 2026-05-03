import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "סוכנויות רכב ויבואנים — שירותי צביעה",
  description:
    "Kontrol מציעה לסוכנויות רכב ויבואנים שירותי צביעה במחיר חוזה — לפני מסירה, רענון מלאי, תיקוני סוף תקופה לרכבי הדגמה.",
  alternates: { canonical: "/b2b/dealerships" },
};

export default function B2BDealerships() {
  return (
    <ServicePageShell
      pageUrl="/b2b/dealerships"
      kicker="B2B · סוכנויות"
      h1="סוכנויות ויבואני רכב — שירות צביעה."
      intro={`סוכנויות רכב ויבואנים מתמודדים עם 3 צורכי צביעה תכופים: צביעה לפני מסירה (אם רכב הגיע פגום), רענון מלאי שעמד זמן רב, ותיקוני סוף תקופה לרכבי הדגמה. אנחנו מציעים פתרון מקיף לכולם.`}
      breadcrumb={[
        { name: "B2B", href: "/services" },
        { name: "סוכנויות רכב" },
      ]}
      hideQuizCta={true}
      highlights={[
        { title: "צביעה לפני מסירה", text: "אם רכב הגיע מהיבואן עם נזק — אנחנו מטפלים בו תוך 4 ימים, מוכן למסירה." },
        { title: "רענון מלאי", text: "רכב שעומד 6+ חודשים אצלכם — צבע דהוי לפני מכירה. צביעה סיטונאית להחזיר ערך." },
        { title: "רכבי הדגמה / שירות", text: "סוף תקופה — שריטות מצטברות. צביעה פרטנית או מלאה לפי הצורך." },
        { title: "מחירי חוזה", text: 'הסכמי שירות שנתיים עם מחירים נמוכים מ־₪3,490 בנפח גבוה.' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            למה סוכנויות עוברות אלינו
          </h2>
          <p style={{ marginBottom: 18 }}>
            רוב הסוכנויות עובדות עם מוסך אחד או שניים שמטפלים בכל הצביעות. הבעיה: כשהמוסך עמוס,
            הסוכנות תקועה. רכב לפני מסירה לא יכול לחכות שבועיים.
          </p>
          <p style={{ marginBottom: 18 }}>
            אצלנו, יש 30+ מוסכים שותפים בכל הארץ. אם המוסך הראשי שלכם עמוס — אנחנו מנתבים לאחר.
            תזמון לעולם לא בעיה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            התאמת ערוצים
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li><strong>API ל־DMS שלכם:</strong> חיבור ישיר לתוכנת ניהול הסוכנות. כל הזמנה מתעדכנת אוטומטית.</li>
            <li><strong>נציג ייעודי:</strong> לא קווי שירות לקוחות — נציג B2B אחד שמכיר את הסוכנות שלכם.</li>
            <li><strong>תמחור שקוף:</strong> חוזה שנתי עם מחירים מסכומים מראש לכל סוג עבודה.</li>
            <li><strong>איסוף מהמגרש:</strong> אנחנו מגיעים לסוכנות, לוקחים את הרכב, ומחזירים אותו.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            צרו קשר
          </h2>
          <p>
            <a href="mailto:dealers@kontrolauto.net" style={{ color: "var(--accent)" }}>dealers@kontrolauto.net</a>
            {" · "}
            {"{{DEALERS_PHONE}}"}
          </p>
        </>
      }
      related={[
        { href: "/b2b/fleets", label: "ציי רכב" },
        { href: "/b2b/insurance", label: "שותפי ביטוח" },
        { href: "/services/full-repaint", label: "צביעה מלאה (פרטי)" },
      ]}
    />
  );
}
