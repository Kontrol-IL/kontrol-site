import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת רכב ללבן פנינה",
  description:
    'צביעת רכב ללבן יסוד, לבן פנינה, או לבן מטאלי. ₪3,490 ללבן יסוד, ₪4,500 ללבן פנינה. כולל עדכון רישיון רכב.',
  alternates: { canonical: "/services/color-change/white" },
};

export default function WhitePaint() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/white"
      kicker="לבן"
      h1="צביעת רכב ללבן / לבן פנינה."
      intro={`לבן הוא הצבע הפופולרי ביותר ברכב מודרני — עמיד, לא מתחמם בשמש, נראה נקי. אבל יש כמה גרסאות: לבן יסוד פלאט, לבן פנינה (מטאלי עם פיגמנט פנינה), לבן מטאלי, ואפילו לבן מאט. כל אחד במחיר אחר.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "לבן" },
      ]}
      highlights={[
        { title: "לבן יסוד (Solid White)", text: 'הקלאסי. ₪3,490. עמיד מאוד, נקי לעין, קל לתיקון.' },
        { title: "לבן פנינה (Pearl White)", text: 'לבן עם פיגמנט פנינה זהוב. נראה פרימיום. ₪4,500.' },
        { title: "לבן מטאלי", text: 'לבן עם נוצצים מטאליים דקים. ₪3,990.' },
        { title: "לבן מאט", text: 'נדיר. נראה ייחודי מאוד. ₪4,800.' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            למה לבן הכי קל ליישום
          </h2>
          <p style={{ marginBottom: 18 }}>
            לבן יסוד (Solid) הוא הצבע הקל ביותר לצבוע ולתחזק. הוא לא דורש שכבת לק עליונה מורכבת,
            תיקוני שריטה בו כמעט לא נראים, והוא לא מתחמם בקיץ. ולכן יצרני רכב יוצאים עם 60%+
            מהמלאי שלהם בלבן — ככה גם הציבור מבחירה אישית.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            לבן פנינה — ההבדל
          </h2>
          <p>
            פנינה (Pearl) הוא לא צבע — זה אפקט. שכבת מיקה (mica) מינרלית עם פיגמנטים שמגיבים לאור.
            בשמש ישירה הרכב נראה זהוב-ברק, בצל הוא נראה לבן רגיל. הצביעה מצריכה 3 שכבות במקום 2,
            ולכן יקרה יותר.
          </p>
        </>
      }
      faq={[
        { q: 'איזה לבן הכי קל לתיקון אם תהיה שריטה?', a: 'לבן יסוד. תיקון נקודתי בו כמעט בלתי-נראה. לבן פנינה — קשה יותר.' },
        { q: 'האם לבן מתלכלך מהר?', a: 'לבן מראה לכלוך יותר מצבעים כהים, אבל גם נשטף קל יותר. שטיפה כל 1-2 שבועות = רכב נראה חדש.' },
      ]}
      related={[
        { href: "/services/color-change", label: "החלפת צבע" },
        { href: "/services/color-change/price", label: "מחיר" },
      ]}
    />
  );
}
