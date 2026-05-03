import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת מאזדה — פחחות וצבע במחיר סיטונאי",
  description:
    'צביעת רכבי מאזדה (3, 6, CX-3, CX-30, CX-5, MX-5) במחיר סיטונאי. צבע Soul Red Crystal הידוע — התאמה מקצועית. ₪3,490 + מע"מ.',
  alternates: { canonical: "/services/full-repaint/by-brand/mazda" },
};

export default function MazdaRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/full-repaint/by-brand/mazda"
      kicker="לפי יצרן · מאזדה"
      h1='צביעת מאזדה — פחחות וצבע במחיר סיטונאי.'
      intro={`מאזדה ידועה בצבעיה הייחודיים — בעיקר Soul Red Crystal Metallic, ה־Machine Gray Metallic, וה־Polymetal Gray. הם 3-שכבתיים ודורשים מומחיות. אצלנו זה ב־₪3,490 + מע"מ — אותו מחיר, אותם תהליכים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה מלאה", href: "/services/full-repaint" },
        { name: "לפי יצרן" },
        { name: "מאזדה" },
      ]}
      highlights={[
        { title: "Soul Red Crystal — התמחות", text: 'הצבע המורכב ביותר במאזדה: 3 שכבות (אדום + פנינה זהובה + לק שקוף). אנחנו עושים את זה נכון.' },
        { title: "כל הדגמים", text: '3, 6, CX-3, CX-30, CX-5, CX-9, MX-5 (Miata). דגמי גוף ספורטיביים.' },
        { title: "Machine Gray Metallic", text: 'אפור עמוק עם מטאלי דק — מצריך התאמה ספקטרומטרית מדויקת.' },
        { title: "פנלי גוף ספורטיביים", text: 'מאזדה משתמשת בפנלים עם עיקולים חדים. שיוף ופריימר מותאמים לזה.' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            על Soul Red Crystal
          </h2>
          <p>
            מאזדה הצליחה ליצור צבע אדום ייחודי שנקרא בעולם הצבע &ldquo;האדום הקשה ביותר לתיקון&rdquo;. זה
            כי הוא בנוי משלוש שכבות: שכבה ראשונה אדומה רוויה, שכבה שניה של פיגמנט פנינה זהובה,
            ושכבת לק שקופה. כל שכבה דקה. אם אחת לא נכונה — כל הצבע נראה אחר. בצביעת מאזדה אצלנו
            יש את הניסיון הזה.
          </p>
        </>
      }
      faq={[
        {
          q: "תיקון נקודתי על Soul Red — אפשרי?",
          a: 'אפשרי, אבל קשה. עדיף לצבוע פנל שלם. תיקון נקודתי תמיד יראה קצת שונה בצבע מורכב כמו זה.',
        },
        {
          q: "MX-5 (Miata) — קטנה. אותו מחיר?",
          a: 'כן. ₪3,490 + מע"מ אחיד לכל רכב פרטי, גם רכבים קטנים מאוד. החיסכון יוצא יחסי גבוה יותר.',
        },
        {
          q: "מאזדה 3 — איזה צבע הכי פופולרי לשינוי?",
          a: 'לקוחות מאזדה 3 שלנו לרוב נשארים עם הצבע המקורי או עוברים ל־Soul Red אם יש להם צבע משעמם. החלפה לשחור מאט — גם פופולרית.',
        },
      ]}
      related={[
        { href: "/services/full-repaint", label: "צביעה מלאה" },
        { href: "/services/color-change/matte-black", label: "צביעה לשחור מאט" },
        { href: "/services/full-repaint/by-brand/toyota", label: "צביעת טויוטה" },
        { href: "/services/full-repaint/by-brand/hyundai", label: "צביעת יונדאי" },
      ]}
    />
  );
}
