import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת טויוטה — מחיר סיטונאי",
  description:
    'צביעת רכבי טויוטה (קורולה, יאריס, קאמרי, RAV4, היילקס) במחיר סיטונאי ₪3,490 + מע"מ. התאמת גוון יצרן מדויקת.',
  alternates: { canonical: "/services/full-repaint/by-brand/toyota" },
};

export default function ToyotaRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/full-repaint/by-brand/toyota"
      kicker="לפי יצרן · טויוטה"
      h1='צביעת טויוטה — מחיר סיטונאי.'
      intro={`רכבי טויוטה מהווים נתח גדול מהשוק הישראלי. אנחנו צובעים אותם באותו מחיר סיטונאי כמו כל רכב פרטי — ₪3,490 + מע"מ. כולל התאמת גוון מדויקת לצבעי המפעל של טויוטה (Super White II, Silver Metallic, Attitude Black, Red Mica).`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה מלאה", href: "/services/full-repaint" },
        { name: "לפי יצרן" },
        { name: "טויוטה" },
      ]}
      highlights={[
        { title: "התאמה מדויקת לצבעי טויוטה", text: 'ספקטרומטר דיגיטלי שקורא את הצבע המקורי של הרכב, גם אחרי שנים של חשיפה.' },
        { title: "כל דגם", text: 'קורולה, יאריס, קאמרי, RAV4, היילקס, ראב, אורבן קרוזר, פריוס. אם זה טויוטה — אנחנו צובעים.' },
        { title: '₪3,490 + מע"מ', text: 'אותו מחיר אחיד. בלי תוספת מותג, בלי תוספת חלקי חילוף. אנחנו עובדים על המבנה הקיים.' },
        { title: "אזורי החזקה במיוחד", text: 'בפגושים פלסטיים שטויוטה משתמשת בהם, אנחנו מוסיפים פריימר ייעודי לפלסטיק כדי שהצבע יחזיק.' },
      ]}
      faq={[
        {
          q: "האם הצבע יתאים בדיוק לצבע המפעל של טויוטה?",
          a: 'הצבעים של טויוטה ידועים בקלים יחסית להתאמה (לבן Super White II במיוחד). הספקטרומטר שלנו קורא את הגוון הנוכחי (אחרי דהייה) ומשלב אותו ידנית — זה מבטיח התאמה לעין ל־100%.',
        },
        {
          q: "טויוטה ישנה (15 שנה+) — האם הצבע ידהה מהר?",
          a: 'לא. הצבע התעשייתי שלנו עמיד יותר מצבע מפעל ישן. רכב 2010 שנצבע אצלנו ב-2026 ישמור על הברק עוד 8-12 שנה.',
        },
        {
          q: "האם זה כולל פגוש פלסטיק שטויוטה ידועים בהם?",
          a: 'כן. פגוש פלסטיק מצריך פריימר ייעודי (Pro1 / RD1) — אצלנו זה כלול במחיר. במוסכים שלא משתמשים בפריימר נכון, הצבע מתקלף תוך שנים בודדות.',
        },
      ]}
      related={[
        { href: "/services/full-repaint", label: "צביעה מלאה לרכב" },
        { href: "/services/full-repaint/price", label: "מחיר צביעת רכב מלאה" },
        { href: "/services/full-repaint/by-brand/hyundai", label: "צביעת יונדאי" },
        { href: "/services/full-repaint/by-brand/mazda", label: "צביעת מאזדה" },
      ]}
    />
  );
}
