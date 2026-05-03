import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת טסלה — פחחות וצבע במחיר סיטונאי",
  description:
    'צביעת רכבי טסלה (Model 3, Model Y, Model S, Model X) במחיר סיטונאי. צבעי מפעל של טסלה — Pearl White, Solid Black, Midnight Silver, Deep Blue, Red.',
  alternates: { canonical: "/services/full-repaint/by-brand/tesla" },
};

export default function TeslaRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/full-repaint/by-brand/tesla"
      kicker="לפי יצרן · טסלה"
      h1='צביעת טסלה — פחחות וצבע במחיר סיטונאי.'
      intro={`רכבי טסלה הם בנייה אלומיניום + פלדה עם פאנלים מדויקים. הצביעה מצריכה ניסיון ספציפי בעבודה עם אלומיניום (תיקוני פח שונים מפלדה רגילה). ₪3,490 + מע"מ — אותו מחיר, אותה איכות.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה מלאה", href: "/services/full-repaint" },
        { name: "לפי יצרן" },
        { name: "טסלה" },
      ]}
      highlights={[
        { title: "ניסיון באלומיניום", text: 'טסלה משתמשת באלומיניום בחלק מהפנלים. ריתוך וצביעה של אלומיניום שונים מפלדה — אנחנו עובדים עם מוסכים שמכירים את זה.' },
        { title: "צבעי מפעל מדויקים", text: 'Pearl White Multi-Coat, Solid Black, Midnight Silver Metallic, Deep Blue Metallic, Red Multi-Coat — כולם בקטלוג שלנו.' },
        { title: "כל הדגמים", text: 'Model 3, Model Y, Model S, Model X. גם דגמי Performance ו־Long Range.' },
        { title: "טיפול במצלמות / חיישנים", text: 'הסרה והרכבה זהירה של מצלמות Autopilot ו־סנסורים. כיוונון מחדש אחרי הצביעה.' },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            למה טסלה דורשת זהירות מיוחדת
          </h2>
          <p style={{ marginBottom: 18 }}>
            טסלה היא רכב חשמלי עם הרבה אלקטרוניקה רגישה. בזמן הצביעה אנחנו דואגים:
          </p>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>הסרה מסודרת של חיישני Autopilot (8 מצלמות מקיפות)</li>
            <li>הגנה על כניסת הטעינה (Charge Port)</li>
            <li>הגנה על הסוללה התחתונה (לא חשופה לחום של תנור הצבע)</li>
            <li>בדיקת הפעלה אחרי הצביעה — Autopilot, מצלמות, מערכות</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "האם תנור הצבע מסוכן לסוללת הטסלה?",
          a: 'לא. הטמפרטורה בתנור (60-80°C) נמוכה ממה שטסלה חווה ביום קיץ ישראלי בחניה. הסוללה מוגנת תרמית ובמיקום נפרד מהפנלים.',
        },
        {
          q: "צבע Pearl White Multi-Coat — קשה להתאים?",
          a: 'כן, זה אתגר. הוא רב-שכבתי (לבן בסיס + פנינה + לק). הצביעה אצלנו דורשת 5 שכבות במקום 3, אבל המחיר זהה.',
        },
        {
          q: "האם אובדן ערך צביעה?",
          a: 'מומלץ לעדכן ב־Tesla App את צבע הרכב אם השתנה. צביעה מקצועית עם התאמת גוון לא משפיעה על ערך — אם זה לא מקצועי, יכול להוריד.',
        },
      ]}
      related={[
        { href: "/services/full-repaint", label: "צביעה מלאה לרכב" },
        { href: "/services/full-repaint/price", label: "מחיר" },
        { href: "/services/color-change", label: "החלפת צבע (לטסלה)" },
        { href: "/services/full-repaint/by-brand/toyota", label: "צביעת טויוטה" },
      ]}
    />
  );
}
