import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "שריטות עמוקות ברכב — תיקון מקצועי",
  description:
    "תיקון שריטות עמוקות בלרכב — שריטות שחושפות מתכת. תהליך מלא: פריימר, צבע, לק, פוליש. ₪600-₪1,500.",
  alternates: { canonical: "/services/scratch-repair/deep-scratches" },
};

export default function DeepScratches() {
  return (
    <ServicePageShell
      pageUrl="/services/scratch-repair/deep-scratches"
      kicker="שריטה עמוקה"
      h1="שריטות עמוקות ברכב — תיקון מקצועי."
      intro={`שריטה עמוקה (חוצה ללק העליון, מגיעה למתכת) היא לא משהו שפוליש יסיר. צריך תהליך מלא: פריימר, צבע, לק. בלי זה, השריטה תחליד תוך חודשים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "תיקון שריטות", href: "/services/scratch-repair" },
        { name: "שריטות עמוקות" },
      ]}
      highlights={[
        { title: "שלב 1 — שיוף", text: "שיוף האזור הפגוע להחלקה ולהכנה לפריימר." },
        { title: "שלב 2 — פריימר", text: "שכבת פריימר על המתכת — מונעת חלודה ויוצרת בסיס לצבע." },
        { title: "שלב 3 — צבע + לק", text: "צבע בסיס מותאם בספקטרומטר + לק עליון. בתנור צבע." },
        { title: "שלב 4 — פוליש", text: "פוליש מקצועי לאיחוד הצבע החדש עם הסביבה." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            למה אסור להזניח שריטה עמוקה
          </h2>
          <p style={{ marginBottom: 18 }}>
            שריטה שחושפת מתכת היא הזמנה לחלודה. במזג האוויר הישראלי (לחות, אבק, מלח אם אתם בקרבת
            הים), המתכת מתחילה להחליד תוך 2-4 חודשים. החלודה מתפשטת מתחת לצבע ובסוף יוצרת אזור
            פגום הרבה יותר רחב מהשריטה המקורית.
          </p>
          <p style={{ marginBottom: 18 }}>
            אם יש לכם שריטה עמוקה — אל תחכו. תיקון של ₪800 היום מונע תיקון של ₪3,000 בעוד שנה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            כיצד לזהות שריטה עמוקה
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>הציפורן נתפסת</strong> כשמעבירים על השריטה</li>
            <li><strong>רואים שכבה כסופה / חומה</strong> בתחתית השריטה — זה המתכת</li>
            <li><strong>השריטה מבליטה</strong> בצורה ברורה ולא מתערבבת עם הצבע</li>
            <li><strong>אורך השריטה לא רלוונטי</strong> — אפילו 2 ס&quot;מ עמוקה צריכה תיקון מלא</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "כמה זמן לוקח תיקון שריטה עמוקה?",
          a: "2-3 ימים: יום שיוף + פריימר + יום צביעה + יום לק + תנור + פוליש. סטנדרט מקצועי.",
        },
        {
          q: "אפשר לתקן שריטה עמוקה בבית?",
          a: "אפשר לעצור את החלודה זמנית עם פריימר ביתי + צבע מהבקבוק. זה יחזיק חודשים, לא שנים. גם נראה כמו תיקון. עדיף לתקן מקצועי.",
        },
        {
          q: "מה אם השריטה כבר התחילה להחליד?",
          a: "אנחנו עוצרים את החלודה לפני התיקון — שיוף עד למתכת נקייה ופריימר מגן. עלות נוספת קטנה אבל הכרחית.",
        },
        {
          q: "האם המחיר תלוי באורך השריטה?",
          a: "פחות ממה שחושבים. שריטה של 5 ס\"מ או 25 ס\"מ — תהליך זהה (שיוף + פריימר + צבע + לק + תנור). הזמן הקובע הוא ההתאמה לגוון ולא האורך.",
        },
      ]}
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות" },
        { href: "/services/scratch-repair/price", label: "מחיר תיקון שריטות" },
        { href: "/services/full-repaint", label: "צביעה מלאה" },
        { href: "/services/body-shop", label: "פחחות וצבע" },
      ]}
    />
  );
}
