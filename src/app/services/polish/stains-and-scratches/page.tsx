import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "פוליש להסרת שריטות ושפשופים",
  description:
    "פוליש מקצועי להסרת שריטות שטוחות, סוורילים (סימני שטיפה), ושפשופים קטנים ברכב. לפני ואחרי. מתי פוליש מספיק ומתי צריך תיקון נקודתי.",
  alternates: { canonical: "/services/polish/stains-and-scratches" },
};

export default function PolishStainsScratches() {
  return (
    <ServicePageShell
      pageUrl="/services/polish/stains-and-scratches"
      kicker="פוליש להסרת שריטות"
      h1="פוליש להסרת שריטות ושפשופים."
      intro={`פוליש מקצועי 3-שלבי מסיר רוב השריטות השטוחות, סימני שטיפה אגרסיבית (סוורילים), ושפשופים שלא חוצים את שכבת הלק. הנה איך מבחינים בין מה שפוליש פותר לבין מה שדורש תיקון נקודתי.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פוליש", href: "/services/polish" },
        { name: "שריטות ושפשופים" },
      ]}
      highlights={[
        { title: "שריטה שטוחה", text: 'אם מעבירים אצבע ולא מרגישים — בלק בלבד. פוליש מסיר 100%.' },
        { title: "סוורילים (מעגלים)", text: 'נגרמים משטיפה בספוגית מלוכלכת. פוליש 3-שלבי מסיר אותם בקלות.' },
        { title: "שפשוף קל מפלסטיק", text: 'נגרם מחיכוך בפגוש או בקצה דלת. פוליש מקצועי + ווקס מסיר.' },
        { title: "שריטה עמוקה", text: 'אם הציפורן נתפסת — פוליש לא יספיק. צריך תיקון נקודתי.' },
      ]}
      faq={[
        { q: "האם פוליש יסיר שריטה שאני רואה כבר 3 שנים?", a: 'תלוי בעומק. אם היא שטוחה ולא מרגישים אותה באצבע, כן. אם היא עמוקה, היא נשארת שם — שכבת הצבע עברה.' },
        { q: "כמה פוליש אפשר לעשות בלי להזיק לצבע?", a: 'פוליש איכותי מסיר רק 5-15 מיקרון מכל פעם. בלק רכב חדש יש 50-80 מיקרון. אפשר לעשות פוליש 3-5 פעמים לפני שמתקרבים לבסיס. רוב הרכבים אצלנו היו עם פוליש פעם אחת או שתיים בלבד.' },
      ]}
      related={[
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/scratch-repair", label: "תיקון שריטות עמוקות" },
        { href: "/services/polish/diy-vs-pro", label: "פוליש בעצמך מול מקצועי" },
      ]}
    />
  );
}
