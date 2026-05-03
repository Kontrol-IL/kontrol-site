import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "תיקון שריטות פלסטיק ברכב",
  description:
    "תיקון שריטות בפגושי פלסטיק, רכיבי פלסטיק חיצוניים, וטרים. צריך פריימר ייעודי לאחיזה ארוכת טווח. ₪400-₪900.",
  alternates: { canonical: "/services/scratch-repair/plastic" },
};

export default function ScratchPlastic() {
  return (
    <ServicePageShell
      pageUrl="/services/scratch-repair/plastic"
      kicker="פלסטיק"
      h1="תיקון שריטות פלסטיק ברכב."
      intro={`פגושי פלסטיק, טרים שחור, וכיסויי גלגלים — כולם פלסטיק. תיקון שריטה עליהם דורש פריימר ייעודי לפלסטיק (Pro1 / RD1) כדי שהצבע יחזיק. בלי זה, הצבע מתקלף תוך חודשים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "תיקון שריטות", href: "/services/scratch-repair" },
        { name: "פלסטיק" },
      ]}
      highlights={[
        { title: "פריימר ייעודי", text: 'פלסטיק לא מקבל צבע ישירות. צריך פריימר שמתחבר כימית לפלסטיק. אצלנו זה סטנדרט.' },
        { title: "התאמת גוון לפלסטיק", text: 'פגוש פלסטיק לרוב נראה גוון שונה מהפנלים — דהוי יותר. אנחנו מתאימים לפגוש, לא למפעל.' },
        { title: "טרים שחור (Plastic Trim)", text: 'הטרים השחור סביב חלונות / דלתות מתערפל ומלבין. אצלנו אפשר לחדש אותו.' },
        { title: "₪400-₪900", text: 'תיקון שריטה בפלסטיק — תלוי בגודל ובמקום. כולל פריימר, צבע, לק.' },
      ]}
      faq={[
        { q: 'הצבע של הפגוש המקורי דהוי. אפשר לחדש?', a: 'כן. אנחנו עושים פוליש פלסטיק ייעודי + שכבת מגן. ₪200-₪400 לפגוש מלא. נראה כמעט חדש.' },
        { q: 'טרים שחור פלסטיק שלי הולבן. אפשר?', a: 'כן. ייצוב טרים שחור הוא טיפול נפרד שמחזיר אותו לשחור עמוק. ₪150-₪300.' },
      ]}
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות" },
        { href: "/services/body-shop/bumper-repair", label: "תיקון פגוש פלסטיק" },
        { href: "/services/scratch-repair/scuffs", label: "תיקון שפשופים" },
      ]}
    />
  );
}
