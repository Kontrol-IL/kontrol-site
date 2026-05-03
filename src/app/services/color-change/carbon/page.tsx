import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת רכב קרבון",
  description:
    'צביעה לאפקט קרבון פייבר — שכבה דקה שמדמה רקמת קרבון אמיתית. ₪4,800 + מע"מ. ייחודי, לא נפוץ.',
  alternates: { canonical: "/services/color-change/carbon" },
};

export default function Carbon() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/carbon"
      kicker="קרבון אפקט"
      h1="צביעת רכב קרבון."
      intro={`קרבון פייבר אמיתי הוא חומר יקר ולא נפוץ ברכבי שטח. אבל אפקט הקרבון בצביעה — שכבה עם רקמה תלת-מימדית שמדמה קרבון — אפשרי. נראה ייחודי, יוקרתי, ספורטיבי. ₪4,800 + מע"מ.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "קרבון" },
      ]}
      highlights={[
        { title: "אפקט קרבון אמיתי", text: 'רקמה דק תלת-מימדית שמדמה אריגת קרבון. לא רק "צבע כהה עם נצנוצים".' },
        { title: "שילובים ייחודיים", text: 'אפשר רק על גג + מכסה מנוע (אקסנט) או על כל הרכב.' },
        { title: "תחזוקה רגילה", text: 'אחרי הצביעה זה נראה כמו צבע רגיל לתחזוקה. ווקס + שטיפה רגילה.' },
        { title: '₪4,800 + מע"מ', text: 'התוספת בגלל המורכבות של היישום והעיבוד התלת-מימדי.' },
      ]}
      faq={[
        { q: 'האם זה זהה לציפוי קרבון אמיתי?', a: 'לא. קרבון אמיתי הוא חומר מבני (פייבר אריג + שרף). אצלנו זה אפקט ויזואלי בלבד. אבל הוא נראה כמו קרבון אמיתי בעין.' },
        { q: 'אפשר רק על חלקים — לא הרכב כולו?', a: 'כן, ולרוב מומלץ. גג + מכסה מנוע + מראות בקרבון, השאר בצבע אחר. נראה הכי טוב.' },
      ]}
      related={[
        { href: "/services/color-change", label: "החלפת צבע" },
        { href: "/services/color-change/matte-black", label: "שחור מאט" },
      ]}
    />
  );
}
