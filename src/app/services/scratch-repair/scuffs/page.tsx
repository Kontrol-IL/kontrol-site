import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "תיקון שפשוף ברכב — מקצועי או DIY",
  description:
    "תיקון שפשופים קלים ברכב — סימני חיכוך מפגוש, סורגים, או חניה. מתי כדאי DIY ומתי מקצועי. ₪150-₪500.",
  alternates: { canonical: "/services/scratch-repair/scuffs" },
};

export default function ScratchScuffs() {
  return (
    <ServicePageShell
      pageUrl="/services/scratch-repair/scuffs"
      kicker="שפשופים"
      h1="תיקון שפשוף ברכב — מקצועי או DIY."
      intro={`שפשוף הוא לא שריטה. הוא סימן ארוך של חיכוך — בדרך כלל מפגוש אחר, מסורגים בחניה, או מקיר. בלי שכבת צבע שנקרעה, רק שכבה דקה של חיכוך. ברוב המקרים אפשר להסיר עם פוליש מקצועי.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "תיקון שריטות", href: "/services/scratch-repair" },
        { name: "שפשופים" },
      ]}
      highlights={[
        { title: "שפשוף שטוח", text: 'בלק העליון בלבד. פוליש 3-שלבי מסיר. ₪150-₪300.' },
        { title: "שפשוף בינוני", text: 'הגיע לצבע מתחת ללק. צביעה נקודתית קטנה. ₪400-₪600.' },
        { title: "שפשוף עמוק", text: 'מתכת חשופה. תהליך מלא: פריימר + צבע + לק. ₪500-₪900.' },
        { title: "שפשוף בפלסטיק", text: 'בפגוש פלסטיק — צריך פריימר ייעודי. ₪400-₪700.' },
      ]}
      faq={[
        { q: 'האם פוליש בעצמי יספיק?', a: 'אם השפשוף ממש שטוח (לא מרגישים אותו באצבע), כן. אם מרגישים — הוא חוצה את הלק ופוליש לא יתקן.' },
        { q: 'מהי משחת השיניים שמדברים עליה ברשת?', a: 'משחת שיניים = פוליש בסיסי מאוד. עובדת על שפשופים שטוחים מאוד, על מראות / לוחות מחוון. על פגוש או דלת — לא ספיק.' },
      ]}
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות" },
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/scratch-repair/plastic", label: "תיקון פלסטיק" },
      ]}
    />
  );
}
