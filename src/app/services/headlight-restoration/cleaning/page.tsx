import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "ניקוי פנסים מוצהבים — שיטות ועלויות",
  description:
    "ניקוי פנסים לרכב — מתי מספיק ניקוי בלבד ומתי צריך ליטוש מלא. שיטות, עלויות, ופתרונות ביתיים מהבית.",
  alternates: { canonical: "/services/headlight-restoration/cleaning" },
};

export default function HeadlightCleaning() {
  return (
    <ServicePageShell
      pageUrl="/services/headlight-restoration/cleaning"
      kicker="ניקוי פנסים"
      h1="ניקוי פנסים מוצהבים — שיטות ועלויות."
      intro={`לא כל פנס שנראה מערפל באמת מערפל. לפעמים זה רק לכלוך חיצוני, ושטיפה יסודית פותרת. אבל אם הערפול בתוך הפלסטיק — צריך ליטוש מלא. הנה איך מבחינים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "ליטוש פנסים", href: "/services/headlight-restoration" },
        { name: "ניקוי פנסים" },
      ]}
      highlights={[
        { title: "ניקוי בלבד", text: 'אם אחרי שטיפה הפנסים נראים שקופים — לא צריך ליטוש. עולה ₪80-₪150.' },
        { title: "ערפול חיצוני", text: 'שכבת UV התחילה להתחמצן. ליטוש קל בשלב אחד מסיר. ₪150-₪250.' },
        { title: "ערפול עמוק / צהבת", text: 'הפלסטיק עצמו פגום. ליטוש מלא 3-שלבי + ציפוי UV. ₪300-₪450.' },
        { title: "סדקים פנימיים", text: 'אם יש סדקים בתוך המכלה — לא ניתן לתקן. רק החלפה.' },
      ]}
      faq={[
        { q: "אפשר לנקות פנסים בבית?", a: 'ניקוי חיצוני — בהחלט. שמפו ידיים, מים, מטלית מיקרופייבר. אם זה לא מספיק, צריך ליטוש מקצועי.' },
        { q: "השתמשתי בנייר שיוף בעבר. הפנסים נראים גרוע. אפשר לתקן?", a: 'כן, אם הפלסטיק לא דק מדי. נצטרך לראות את התוצאה לפני המלצה. שלחו תמונה בוואטסאפ.' },
      ]}
      related={[
        { href: "/services/headlight-restoration", label: "ליטוש פנסים" },
        { href: "/services/headlight-restoration/price", label: "מחיר ליטוש פנסים" },
      ]}
    />
  );
}
