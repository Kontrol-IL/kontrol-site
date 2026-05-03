import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "ליטוש פנסים בעצמך — שווה את זה?",
  description:
    "ערכת ליטוש פנסים DIY ביתית מול ליטוש מקצועי: מה אפשר להשיג בבית, איפה ה־DIY נכשל, ומתי שווה לבחור מקצועי.",
  alternates: { canonical: "/services/headlight-restoration/diy-vs-pro" },
};

export default function HeadlightDiyVsPro() {
  return (
    <ServicePageShell
      pageUrl="/services/headlight-restoration/diy-vs-pro"
      kicker="DIY מול מקצועי"
      h1="ליטוש פנסים בעצמך — שווה את זה?"
      intro={`ערכת ליטוש פנסים ביתית עולה ₪40–₪120 וטוענת שהיא "כמו מקצועית". הנה הפירוק האמיתי: מה היא נותנת, איפה היא נכשלת, ומתי באמת כדאי לבחור בה.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "ליטוש פנסים", href: "/services/headlight-restoration" },
        { name: "DIY מול מקצועי" },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            מה ערכת DIY כוללת
          </h2>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>2-3 ניירות שיוף בחיספוס משתנה (1500, 2000, 3000)</li>
            <li>מקדח עם פד פוליש קטן או רק ספוגית ליטוש ידנית</li>
            <li>בקבוק קומפאונד וליטוש</li>
            <li>בקבוק ציפוי UV בסיסי</li>
            <li>הוראות הפעלה</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מה היא יכולה לתת
          </h2>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>שיפור ויזואלי משמעותי</strong> אם הפנסים בערפול בינוני</li>
            <li><strong>עליה בתפוקת תאורה של 30–50%</strong> בנהיגה לילית</li>
            <li><strong>חוויה מספקת</strong> לחובבי DIY</li>
            <li><strong>חיסכון של ₪200–₪400</strong> אם אתם עושים את זה בעצמכם</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            איפה היא נכשלת
          </h2>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>ערפול עמוק או צהבת קשה</strong> — נדרש שיוף בחיספוס נמוך יותר (800-1000) שלא בערכה.</li>
            <li><strong>אחידות הלחץ</strong> — קשה לשמור על לחץ אחיד ידנית. רואים את הסימנים אחרי.</li>
            <li><strong>החזקת התוצאה</strong> — ציפוי UV בערכה דק. מחזיק 4-8 חודשים. מקצועי מחזיק 2-3 שנים.</li>
            <li><strong>נזק לפנסים</strong> — שיוף לחוץ מדי על אזור אחד יוצר חיווי בלתי הפיך.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מתי כדאי DIY
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>הערפול קל (פנסים נראים שלמים, רק קצת חלביים)</li>
            <li>אתם נהנים מפרויקטים DIY</li>
            <li>תקציב קשוח</li>
            <li>הרכב לא חדש מאוד ואתם לא מתכננים למכור בקרוב</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מתי כדאי מקצועי
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>הערפול קשה / צהבת עמוקה</li>
            <li>לפני מבחן רישוי</li>
            <li>לפני מכירת הרכב</li>
            <li>אחרי צביעה מלאה — ב־Kontrol זה כלול חינם</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "האם ערכות אוטו דיפו / חמצן עובדות?",
          a: "ערכת אוטו דיפו (₪60-₪100) היא ברמה DIY בסיסית. עובדת על ערפול קל, לא על צהבת קשה. ערכות יקרות יותר (₪200+) טובות יותר, אבל עדיין מתחת לרמה מקצועית.",
        },
        {
          q: "כמה זמן לוקח ליטוש DIY?",
          a: "1.5–3 שעות לזוג פנסים, אם אתם עוקבים אחרי ההוראות. סבלנות זה מה שמפריד בין תוצאה טובה לרעה.",
        },
        {
          q: "אפשר לעשות ליטוש שוב ושוב?",
          a: "כן, אבל כל ליטוש מסיר שכבה דקה של פלסטיק. אחרי 3-5 ליטושים כבדים, הפלסטיק נדק מדי ואפילו ליטוש מקצועי לא יציל. אז עדיף לעשות פעם אחת מקצועי שמחזיק 3 שנים.",
        },
        {
          q: "מהי משחת השיניים שמדברים עליה ברשת?",
          a: "משחת שיניים מכילה אלומיניום אוקסיד (חומר ליטוש בסיסי). זה עובד ברמה הבסיסית ביותר, על ערפול קל מאוד. אצל פנסים שצריכים יותר — חוסר זמן.",
        },
      ]}
      related={[
        { href: "/services/headlight-restoration", label: "ליטוש פנסים" },
        { href: "/services/headlight-restoration/price", label: "מחיר ליטוש פנסים" },
        { href: "/blog/auto-depo-vs-professional", label: "מאמר: אוטו דיפו מול מקצועי" },
        { href: "/blog/why-headlights-haze", label: "מאמר: למה הפנסים מתערפלים" },
      ]}
    />
  );
}
