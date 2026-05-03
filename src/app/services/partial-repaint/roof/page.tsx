import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת גג רכב — מתי כדאי",
  description:
    "צביעת גג רכב — ₪1,500-₪2,500. הגג הוא הפנל הכי חשוף לשמש, ולכן הראשון שדהוי. מחיר, תהליך, ועל ירידת ערך.",
  alternates: { canonical: "/services/partial-repaint/roof" },
};

export default function RoofRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/partial-repaint/roof"
      kicker="צביעה פרטנית"
      h1="צביעת גג רכב — מתי כדאי."
      intro={`גג רכב הוא הפנל הכי חשוף לשמש ישירה, ולכן הראשון לדהות. אם הצבע על הגג כבר אפור-מולכלך והשאר בסדר, צביעת גג בלבד היא פתרון כלכלי. ₪1,500-₪2,500.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה פרטנית", href: "/services/partial-repaint" },
        { name: "צביעת גג" },
      ]}
      highlights={[
        { title: "שטח גדול = יותר עבודה", text: 'גג של סדאן רגיל = 4-5 מ"ר. גג של SUV/ג\'יפ = 6-8 מ"ר. תוסיף זמן ומחיר.' },
        { title: "הסרת אביזרים", text: 'אנטנת שארק, מסילות גג, חלונות שמש — כולם מוסרים לפני וחוזרים אחרי.' },
        { title: "התאמת גוון", text: 'הצבע סביב הגג (עמודי A/B/C, מעל הדלתות) דהוי שונה מהגג. ספקטרומטר מתאים לסביבה.' },
        { title: "₪1,500-₪2,500", text: 'תלוי בגודל הרכב ובמורכבות הצבע (יסוד / פנינה / מטאלי).' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            על ירידת ערך
          </h2>
          <p>
            צביעת גג בלבד לא מורידה ערך אם נעשתה מקצועית. במקרים מסוימים זה אפילו מעלה ערך —
            רכב שגג שלו דהוי נראה ישן מהעצמו, וצביעה מחזירה לו אופי. הגרסה האחרת (אם רואים את
            הצביעה כי לא הותאם נכון) — מורידה ערך כי זה רואים.
          </p>
        </>
      }
      faq={[
        { q: 'האם כדאי לצבוע גם הקאפוט יחד עם הגג?', a: 'תלוי. אם גם הוא דהוי, כן (₪900-₪1,400 על הקאפוט). אם רק הגג בעיה, רק גג. נציע לפי בדיקה.' },
        { q: 'יש פאנל שמש שלא ייפגע מהצביעה?', a: 'כן. אנחנו מסירים אותו לפני, צובעים מסביב, ומחזירים. בדיוק כמו במפעל.' },
      ]}
      related={[
        { href: "/services/partial-repaint", label: "צביעה פרטנית" },
        { href: "/services/full-repaint", label: "צביעה מלאה" },
        { href: "/blog/does-painting-reduce-car-value", label: "ירידת ערך מצביעה" },
      ]}
    />
  );
}
