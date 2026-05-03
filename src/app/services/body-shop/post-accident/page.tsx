import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "תיקון רכב לאחר תאונה",
  description:
    "תיקון רכב אחרי תאונה: פחחות, צביעה, החלפת פנלים, תיקון פגושים. עבודה במחיר B2B במוסכים מאומתים. כיסוי בכל הארץ.",
  alternates: { canonical: "/services/body-shop/post-accident" },
};

export default function PostAccident() {
  return (
    <ServicePageShell
      pageUrl="/services/body-shop/post-accident"
      kicker="פחחות וצבע"
      h1="תיקון רכב לאחר תאונה."
      intro={`עברתם תאונה. הרכב נסע, אבל הוא מקופל. אנחנו מטפלים בכל היקף הנזק — פחחות, החלפת פנלים, צביעה — באותו מודל סיטונאי, בכל הארץ.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פחחות וצבע", href: "/services/body-shop" },
        { name: "תיקון רכב לאחר תאונה" },
      ]}
      highlights={[
        { title: "שלב 1 — בדיקה", text: "שלחו לנו תמונות בוואטסאפ. נחזיר הצעת מחיר ראלית תוך כמה שעות." },
        { title: "שלב 2 — תיקון פח", text: "ישור פח, ריתוכים, החלפת פנלים שצריך. עד שהמבנה חזרה לתקין." },
        { title: "שלב 3 — צביעה מלאה", text: "אם הנזק רחב, צביעה מלאה ב־₪3,490. אם נקודתי, צביעה פרטנית." },
        { title: "שלב 4 — בדיקה והחזרה", text: "בדיקה משותפת לפני המסירה. הרכב חוזר אליכם מוכן." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            ביטוח — מה לעשות
          </h2>
          <p style={{ marginBottom: 18 }}>
            אם הביטוח שלכם הוא מקיף, יש סיכוי שהוא יכסה את התיקון. אנחנו לא מוסך הסדר רשמי של אף
            חברת ביטוח, אבל אנחנו עוזרים לכם בתהליך:
          </p>
          <ul style={{ paddingInlineStart: 24, marginBottom: 18, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>שולחים אליכם הצעת מחיר מפורטת לטובת חברת הביטוח</li>
            <li>מסייעים בתיעוד התאונה אם צריך</li>
            <li>מבצעים את התיקון, אתם מקבלים החזר מהביטוח</li>
          </ul>
          <p>
            במקרים רבים אתם תקבלו מהביטוח את ההפרש בין הצעות המחיר של מוסך הסדר (יקר) לבין שלנו
            (חצי) — וזה הופך את התיקון אצלנו לרווחי גם כשיש לכם ביטוח.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            לא לעשות לפני שאתם מתקשרים
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li><strong>לא להוציא רכב למוסך הסדר</strong> בלי להשוות מחיר. ההפרש יכול להיות ₪5,000+.</li>
            <li><strong>לא לחתום על הצהרה לחברת הביטוח</strong> לפני שאתם יודעים מה ההיקף.</li>
            <li><strong>לא לזרוק חלקים</strong> ששברו ונשארו ברכב — לפעמים אפשר לתקן ולא להחליף.</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "כמה זמן הרכב יושב בתיקון אחרי תאונה?",
          a: "תאונה קלה (פגוש + פנל) — 4-6 ימים. תאונה בינונית (3-4 פנלים) — 8-12 ימים. תאונה רחבה — יותר, תלוי בהיקף.",
        },
        {
          q: "האם הצבע של פנל חדש יתאים לרכב?",
          a: "כן. כל פנל שמותקן עובר אצלנו צביעה מלאה בתנור עם התאמת גוון ספקטרומטרית. לא רואים שהוא חדש.",
        },
        {
          q: "מה אם הרכב לא נוסע?",
          a: "אנחנו לוקחים אותו על גרר. שירות הגרר חינם בתחום השירות (כל הארץ).",
        },
        {
          q: "האם לאחר התיקון יישאר רישום בהיסטוריית הרכב?",
          a: "אם דווח לחברת הביטוח, כן. אם תיקנתם פרטית בלי לדווח לביטוח — לא. אנחנו לא מדווחים לאף גורם בלי הסכמתכם.",
        },
        {
          q: "מה האחריות?",
          a: "{{WARRANTY_TERMS_POST_ACCIDENT}} — בדרך כלל זהה לאחריות הצביעה הרגילה.",
        },
      ]}
      related={[
        { href: "/services/body-shop", label: "פחחות וצבע" },
        { href: "/services/body-shop/price", label: "מחירון פחחות" },
        { href: "/services/body-shop/bumper-repair", label: "תיקון פגוש פלסטיק" },
        { href: "/insurance/migdal", label: "ביטוח מגדל" },
        { href: "/insurance/phoenix", label: "ביטוח הפניקס" },
        { href: "/services/full-repaint", label: "צביעה מלאה" },
      ]}
    />
  );
}
