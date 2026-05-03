import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת רכב אפור בטון",
  description:
    'צביעת רכב באפור בטון (Concrete Grey) — הצבע שהוביל את המכירות בעולם הרכב 2024-2026. ₪3,990 + מע"מ.',
  alternates: { canonical: "/services/color-change/concrete-grey" },
};

export default function ConcreteGrey() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/concrete-grey"
      kicker="גוון פופולרי"
      h1="צביעת רכב אפור בטון."
      intro={`Concrete Grey — אפור עמוק עם פיגמנט חם, נראה כמו בטון לח. הצבע הפך טרנדי בעולם הרכב 2024-2026, מ־פורשה דקאר ועד יונדאי טוסון. אצלנו אפשר לעשות את זה ב־₪3,990 + מע"מ.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "אפור בטון" },
      ]}
      highlights={[
        { title: "טרנד 2024-2026", text: 'יצרניות פרימיום (פורשה, אאודי, BMW) משתמשות בו ברכבי הדגל. נראה יוקרתי בלי להיות בוהק.' },
        { title: "מסתיר אבק יותר מלבן/שחור", text: 'אפור הוא צבע אידיאלי לתחזוקה — לא מראה אבק כמו שחור, ולא מראה אבן כמו לבן.' },
        { title: "מתאים לכל דגם", text: 'נראה טוב על SUV, סדאן, האצ"בק. גם על רכבים ספורטיביים.' },
        { title: '₪3,990 + מע"מ', text: 'תוספת ₪500 על המחיר הסטנדרטי — בגלל המורכבות של ערבוב הצבע המדויק.' },
      ]}
      faq={[
        { q: 'מה ההבדל בין אפור בטון לאפור רגיל?', a: 'אפור רגיל (Cool Grey) הוא ניטרלי, חי. אפור בטון (Warm Concrete) יש בו פיגמנט חם של חום-אדום עדין. בשמש זה בולט.' },
        { q: 'האם זה דהוי מהר?', a: 'לא. אפור הוא צבע יציב מאוד מ־UV, אם נעשה עם לק עליון איכותי כמו אצלנו. מחזיק 8-12 שנים.' },
      ]}
      related={[
        { href: "/services/color-change", label: "החלפת צבע" },
        { href: "/services/color-change/matte-black", label: "שחור מאט" },
      ]}
    />
  );
}
