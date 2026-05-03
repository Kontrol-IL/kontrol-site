import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "תיקון צבע נקודתי לרכב",
  description:
    "תיקון צבע נקודתי לרכב — אזור ספציפי בלבד. כשרק חלק מהצבע פגוע ולא צריך לצבוע פנל מלא. ₪300-₪700.",
  alternates: { canonical: "/services/color-change/spot-touchup" },
};

export default function SpotTouchup() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/spot-touchup"
      kicker="תיקון נקודתי"
      h1="תיקון צבע נקודתי לרכב."
      intro={`לפעמים הצבע פגוע באזור קטן בלבד — שריטה בודדת בדלת, סדק קטן בפגוש, אבן שעברה את הלק. תיקון נקודתי מתמקד באותו אזור בלבד, בלי לצבוע פנל שלם. עולה הרבה פחות.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "תיקון נקודתי" },
      ]}
      highlights={[
        { title: "תהליך מקוצר", text: 'שיוף נקודתי + פריימר נקודתי + צבע + לק. בלי שיוף הפנל המלא.' },
        { title: "התאמת גוון מדויקת", text: 'ספקטרומטר קורא את הגוון בדיוק מההיקף — לא מהקטלוג היצרני.' },
        { title: "Blend חלק", text: 'אנחנו צובעים גם 5-10 ס"מ סביב האזור הפגוע בשכבה דקה — ככה אין גבול חד.' },
        { title: "₪300-₪700", text: 'תלוי בגודל האזור ומורכבות הצבע. אזור קטן שטוח = ₪300. אזור גדול 3D = ₪700.' },
      ]}
      faq={[
        { q: 'מתי תיקון נקודתי לא יעבוד?', a: 'אם הצבע סביב האזור דהוי משמעותית. בכלל הצבע החדש יראה יותר ברור מהסביבה. במקרים האלה כדאי לצבוע פנל שלם.' },
      ]}
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות" },
        { href: "/services/partial-repaint", label: "צביעה פרטנית" },
      ]}
    />
  );
}
