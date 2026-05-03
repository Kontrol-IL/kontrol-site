import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת יונדאי — פחחות וצבע במחיר סיטונאי",
  description:
    'צביעת רכבי יונדאי (i10, i20, i30, Tucson, Santa Fe, Kona, Ioniq) במחיר סיטונאי. ₪3,490 + מע"מ. התאמת גוון מדויקת לצבעי יונדאי המקוריים.',
  alternates: { canonical: "/services/full-repaint/by-brand/hyundai" },
};

export default function HyundaiRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/full-repaint/by-brand/hyundai"
      kicker="לפי יצרן · יונדאי"
      h1='צביעת יונדאי — פחחות וצבע במחיר סיטונאי.'
      intro={`יונדאי היא יצרנית עם שילוב צבעים ייחודי — Phantom Black, Polar White, Stellar Silver, Slate Gray, Phoenix Orange. אנחנו צובעים את כל הדגמים: מ־i10 ועד Santa Fe ו־Ioniq חשמלי. ₪3,490 + מע"מ.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה מלאה", href: "/services/full-repaint" },
        { name: "לפי יצרן" },
        { name: "יונדאי" },
      ]}
      highlights={[
        { title: "כל הדגמים", text: 'i10, i20, i30, Sonata, Tucson, Santa Fe, Kona, Ioniq, Bayon, Staria — כל יונדאי שיש בארץ.' },
        { title: "צבעי יונדאי המקוריים", text: 'Phantom Black, Polar White, Stellar Silver, Slate Gray Pearl, Phoenix Orange Pearl. גם Atlas White ו־Aqua Turquoise.' },
        { title: "שיוף עדין לפלסטיק", text: 'יונדאי משתמשים בהרבה פלסטיק בפגושים. אנחנו עובדים עם פריימר ייעודי לאחיזה ארוכת טווח.' },
        { title: "הוצאת חיישני נסיעה", text: 'דגמי SmartSense (Tucson, Santa Fe חדשים) דורשים פירוק חיישני LDW/AEB מאושר.' },
      ]}
      faq={[
        {
          q: "האם פגושי יונדאי הפלסטיים מקלפים?",
          a: 'בעבר זה היה נפוץ. בדגמים אחרי 2018, יונדאי משתמשת בפלסטיק בלתי-מקלף. אנחנו עוזרים לזהות אם נדרש פריימר מיוחד.',
        },
        {
          q: "Hyundai Ioniq חשמלי — שונה בצביעה?",
          a: 'לא בעיקרון, אבל אנחנו מטפלים בהגנה על המצלמות, חיישני המרחק, ויציאת הטעינה. כמו Tesla — זהירות סביב אלקטרוניקה.',
        },
        {
          q: "צבע Phoenix Orange Pearl — מסובך?",
          a: 'כן, פנינה עוזרת לקושי. הצבע דורש 3 שכבות + לק, וההתאמה ידנית. תוצאה — מתאים לעין ב־100%.',
        },
      ]}
      related={[
        { href: "/services/full-repaint", label: "צביעה מלאה" },
        { href: "/services/full-repaint/price", label: "מחיר" },
        { href: "/services/full-repaint/by-brand/toyota", label: "צביעת טויוטה" },
        { href: "/services/full-repaint/by-brand/mazda", label: "צביעת מאזדה" },
      ]}
    />
  );
}
