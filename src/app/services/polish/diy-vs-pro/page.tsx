import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "פוליש בעצמך מול פוליש מקצועי — ההבדל",
  description:
    "פוליש DIY (ערכה ביתית) מול פוליש מקצועי במכונת ליטוש: מה אפשר להשיג בבית, איפה ה־DIY נכשל, ומתי שווה לבחור מקצועי.",
  alternates: { canonical: "/services/polish/diy-vs-pro" },
};

export default function PolishDiyVsPro() {
  return (
    <ServicePageShell
      pageUrl="/services/polish/diy-vs-pro"
      kicker="DIY מול מקצועי"
      h1="פוליש בעצמך מול פוליש מקצועי — ההבדל."
      intro={`ערכת פוליש בבית עולה ₪150 ולוקחת 5 שעות. פוליש מקצועי עולה ₪600 ולוקח 4 שעות. ההבדל הוא לא רק במחיר — זה במה שאתם באמת משיגים. הנה הפירוק.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פוליש", href: "/services/polish" },
        { name: "DIY מול מקצועי" },
      ]}
      hideQuizCta={false}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            מה ערכת DIY נותנת
          </h2>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>שיפור ויזואלי של 30–40%</strong> מהרמה הנוכחית — נראה הרבה יותר טוב, אבל לא חדש.</li>
            <li><strong>הסרת לכלוך והברקה זמנית</strong> — מחזיק 4–8 שבועות.</li>
            <li><strong>טיפול בשריטות שטוחות מאוד</strong> — שריטות שטוחות מאוד מ־כביסה אגרסיבית.</li>
            <li><strong>חוויה מהנה</strong> — אם אתם אוהבים לטפל ברכב, זה תהליך נחמד.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            איפה DIY נכשל
          </h2>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>שריטות בעומק בינוני</strong> — מקצועי מסיר, DIY רק מסתיר זמנית.</li>
            <li><strong>סוורילים (מעגלי שטיפה)</strong> — נראים יותר אחרי DIY כי שכבת הווקס המסכה אותם דקה.</li>
            <li><strong>צבעים כהים (שחור / כחול עמוק)</strong> — DIY כמעט תמיד משאיר חיווויים שרואים בשמש.</li>
            <li><strong>החזקת הברק</strong> — DIY מחזיק 1–2 חודשים. מקצועי מחזיק 4–6.</li>
            <li><strong>אחידות</strong> — קשה לשמור על לחץ אחיד וכמות חומר אחידה ידנית.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            ההבדל הטכני
          </h2>
          <p style={{ marginBottom: 18 }}>
            <strong>מכונת ליטוש מקצועית:</strong> 2,500–3,000 RPM, פד אורביטלי כפול, לחץ קבוע. מסירה
            5–15 מיקרון של שכבת הלק (יש 50–80 מיקרון בלק רכב חדש), חושפת שכבה נקייה.
          </p>
          <p style={{ marginBottom: 18 }}>
            <strong>ערכת DIY:</strong> ידנית או מכונה ביתית של 800–1,200 RPM, פד פשוט, לחץ ידני
            לא־אחיד. מסירה 0.5–2 מיקרון בלבד — לא מספיק להסרת שריטות אמיתיות.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מתי DIY כן הגיוני
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>הרכב כבר נראה טוב, רק רוצים רענון לפני אירוע</li>
            <li>תקציב קשוח ואין צורך בתוצאה אופטימלית</li>
            <li>אוהבים פרויקטים DIY כתחביב</li>
            <li>הצבע בהיר (לבן/כסף) שסולח על אי־אחידות</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "כמה עולה ערכת פוליש DIY?",
          a: 'ערכה בסיסית — ₪80–₪150. ערכה איכותית עם פדים ומשחות שונות — ₪200–₪400. מכונת ליטוש ביתית — עוד ₪400–₪900.',
        },
        {
          q: "המכונת פוליש שמוכרים בהום סנטר עובדת?",
          a: "מכונות הום סנטר הן בעוצמה נמוכה (800–1,200 RPM) ומיועדות לשימוש מזדמן. הן עובדות ברמה של פוליש בסיסי, לא של פוליש מקצועי 3-שלבי.",
        },
        {
          q: "אפשר לקלקל את הצבע עם DIY?",
          a: "כן, בקלות. שימוש לחוץ מדי במכונה, פד לא מתאים, או חומר אגרסיבי על צבע מטאלי — כל אחד מהם יכול לחרוט את הלק. אם אתם לא בטוחים, עדיף מקצועי.",
        },
        {
          q: "אם אני עושה DIY רגיל, צריך גם פוליש מקצועי?",
          a: "אם אתם מתחזקים את הרכב היטב עם DIY טוב כל 2-3 חודשים — אולי לא תזדקקו למקצועי במשך שנים. אם הצבע התדהה כבר — DIY לא יציל אותו, מקצועי יציל.",
        },
      ]}
      related={[
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/polish/price", label: "מחיר פוליש" },
        { href: "/services/polish/at-home", label: "פוליש עד הבית" },
        { href: "/blog/best-polish-machine-for-car", label: "מאמר: המכונת פוליש הטובה ביותר" },
        { href: "/blog/how-to-polish-a-car", label: "מאמר: איך לעשות פוליש לרכב" },
      ]}
    />
  );
}
