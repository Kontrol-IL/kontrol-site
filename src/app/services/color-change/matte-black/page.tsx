import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת רכב לשחור מאט / שחור מט",
  description:
    'החלפת צבע הרכב לשחור מאט — Stealth-look אגרסיבי. ₪4,200 + מע"מ כולל לק מאט מקצועי, עדכון רישיון רכב, ותחזוקה מותאמת.',
  alternates: { canonical: "/services/color-change/matte-black" },
};

export default function MatteBlack() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/matte-black"
      kicker="גוון מיוחד"
      h1="צביעת רכב לשחור מאט / שחור מט."
      intro={`שחור מאט הוא הצבע שמשנה רכב אחרי הצביעה הכי הרבה. הוא עוצר עין, מסתיר שריטות, ונותן מראה אגרסיבי-יוקרתי. ₪4,200 + מע"מ — כולל הלק המאט המיוחד, עדכון רישיון רכב, וטיפים לתחזוקה.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "שחור מאט" },
      ]}
      highlights={[
        { title: "לק מאט אמיתי", text: 'לא לק מבריק שעוטף — לק מאט תעשייתי שלא מבריק גם בשמש ישירה.' },
        { title: "אסור ווקס מבריק", text: 'אנחנו נסביר לכם איך לטפל ברכב מאט. ווקס רגיל ייצור כתמים מבריקים שלא ניתן להסיר.' },
        { title: "מסתיר שריטות שטוחות", text: 'המאט לא מחזיר אור — שריטות שטוחות שהיו בולטות על שחור מבריק נעלמות.' },
        { title: '₪4,200 + מע"מ', text: 'תוספת ₪710 על המחיר הסטנדרטי — בגלל הלק המאט המיוחד והקושי הנוסף.' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            תחזוקה מיוחדת
          </h2>
          <p style={{ marginBottom: 18 }}>
            רכב במאט אסור לשטוף ב־ווקס רגיל, אסור לפוליש מבריק, ואסור לשפשף עם ספונגיה אגרסיבית.
            השטיפה צריכה להיות עם שמפו מיוחד למאט (Matte Wash) ומטלית רכה. אנחנו מספקים בקבוק
            ראשון של שמפו מאט עם המסירה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            תחזוקה לטווח ארוך
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>שטיפה ידנית בלבד — לא מכונה אוטומטית עם מברשות</li>
            <li>שמפו מיוחד למאט (Matte Detailer)</li>
            <li>אסור פוליש או ווקס מבריק לעולם</li>
            <li>תיקון שריטה במאט — בקבוק טאצ&apos;-אפ מאט (לא מבריק)</li>
          </ul>
        </>
      }
      faq={[
        { q: 'האם שחור מאט מתחמם יותר בשמש?', a: 'מעט יותר מצבע מבריק (כי המאט סופג יותר אור), אבל לא בצורה משמעותית. הבדל של 2-3 מעלות בקיץ. שווה להבחנה.' },
        { q: 'האם אפשר לחזור לצבע מבריק אחרי?', a: 'כן, צביעה חדשה. אבל זה תהליך מלא נוסף — צריך להוריד את המאט ואז לצבוע מחדש.' },
        { q: 'בעיר עם הרבה אבק/חצץ — מתאים?', a: 'לא רע יותר ממבריק. אבל כל אבן שתפגע — תהיה יותר נראית כי המאט לא מסתיר טוב כמו מבריק.' },
      ]}
      related={[
        { href: "/services/color-change", label: "החלפת צבע לרכב" },
        { href: "/services/color-change/price", label: "מחיר החלפת צבע" },
        { href: "/services/polish/types", label: "סוגי פוליש (כולל למאט)" },
      ]}
    />
  );
}
