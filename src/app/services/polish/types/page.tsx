import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "סוגי פוליש לרכב — ננו, ווקס, מאט",
  description:
    "סוגי פוליש לרכב: ווקס סינתטי, ננו-פוליש, פוליש לרכב שחור, פוליש לרכב לבן. מה ההבדל ומה כדאי לבחור.",
  alternates: { canonical: "/services/polish/types" },
};

export default function PolishTypes() {
  return (
    <ServicePageShell
      pageUrl="/services/polish/types"
      kicker="סוגי פוליש"
      h1="סוגי פוליש לרכב — ננו, ווקס, מאט."
      intro={`לא כל הפוליש זהה. שכבת ההגנה האחרונה משתנה בין ווקס סינתטי בסיסי, ננו-קרמי קל, או ווקס מאט ייעודי. הנה מה כדאי לבחור לפי סוג הצבע שלכם.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פוליש", href: "/services/polish" },
        { name: "סוגי פוליש" },
      ]}
      highlights={[
        { title: "ווקס סינתטי קלאסי", text: "הזול והנפוץ. מחזיק 2-3 חודשים. מחזיר ברק טוב, אבל פחות עמיד לגשם וUV." },
        { title: "ננו-פוליש", text: "שכבת קרמיקה דקה (לא כמו סראמי קוטינג מלא). מחזיקה 6-12 חודש. עמידה לכימיקלים." },
        { title: "פוליש מאט (לרכבים בצבע מאט)", text: "ייעודי לצבעי מאט — לא מבריק. מנקה ומגן בלי לתת ברק שיהרוס את האפקט." },
        { title: "ווקס לרכבים שחורים", text: "פיגמנטד עם פיגמנט שחור עדין שממלא נקבוביות בצבע. מסתיר סוורילים." },
      ]}
      faq={[
        { q: "איך יודעים אם הצבע שלי מאט?", a: 'אם הוא נראה ללא ברק, ולא משקף — הוא מאט. צבעי מאט פופולריים: שחור מאט, אפור מאט. אסור להשתמש בווקס מבריק עליהם.' },
        { q: "מה ההבדל בין ננו-פוליש לסראמי קוטינג מלא?", a: 'ננו-פוליש = שכבת ננו דקה, מחזיקה 6-12 חודש, עולה ₪400-₪700. סראמי קוטינג מלא = ציפוי קשה יותר, מחזיק 2-5 שנים, עולה ₪1,500-₪3,500.' },
      ]}
      related={[
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/polish/price", label: "מחיר פוליש" },
        { href: "/services/color-change/matte-black", label: "צביעה לשחור מאט" },
      ]}
    />
  );
}
