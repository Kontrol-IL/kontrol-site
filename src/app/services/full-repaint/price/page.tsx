import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "מחיר צביעת רכב מלאה — ₪3,490 + מע\"מ",
  description:
    'מחיר צביעת רכב מלאה ב־Kontrol — ₪3,490 + מע"מ. השוואת מחירים לשוק (₪7,000–₪15,000) ולמה אצלנו זה אפשרי.',
  alternates: { canonical: "/services/full-repaint/price" },
};

export default function FullRepaintPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/full-repaint/price"
      kicker="מחיר"
      h1='צביעת רכב מלאה — ₪3,490 + מע"מ.'
      intro={`המחיר אחיד לכל רכב פרטי סטנדרטי. כולל איסוף ומשלוח, פוליש פנסים, וניקוי פנימי וחיצוני. בלי תוספות, בלי הפתעות, בלי תוספי איכות.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה מלאה", href: "/services/full-repaint" },
        { name: "מחיר" },
      ]}
      highlights={[
        { title: "₪3,490 + מע\"מ", text: "המחיר המלא של השירות. כולל את הכל — לא תוספות, לא קופונים מסתוריים." },
        { title: "₪7,000–₪15,000", text: "המחיר הסטנדרטי בשוק. מה שמוסך גובה מלקוח פרטי לעבודה זהה." },
        { title: "₪10,000", text: "מה שאותם מוסכים גובים מסוכנויות וחברות ביטוח על אותו הרכב, אותה עבודה." },
        { title: "חיסכון של ~50%", text: "ההפרש בין המחיר הקמעונאי הרגיל למחיר הסיטונאי שלנו." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            השוואת מחירים — שוק 2026
          </h2>
          <p style={{ marginBottom: 24 }}>
            הרכבנו את הטבלה הבאה לאחר עשרות הצעות מחיר ממוסכים בכל הארץ. כל המחירים הם לרכבים
            פרטיים סטנדרטיים, צביעה מלאה, ללא פחחות.
          </p>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            {[
              ["מוסך פרימיום (סוכנות / יבואן רשמי)", "₪12,000–₪15,000"],
              ["מוסך גדול ידוע (תל אביב, חיפה, פתח תקווה)", "₪9,000–₪12,000"],
              ["מוסך אזורי בינוני", "₪7,000–₪9,000"],
              ["B2B / סוכנות → אותו מוסך, חוזה אספקה", "₪8,000–₪10,000"],
              ["Kontrol — צביעה מלאה במחיר סיטונאי", '₪3,490 + מע"מ'],
            ].map(([label, price], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  padding: "16px 22px",
                  background: i === 4 ? "rgba(57,101,200,0.12)" : "transparent",
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                  fontSize: 15,
                  color: i === 4 ? "white" : "rgba(255,255,255,0.85)",
                  fontWeight: i === 4 ? 700 : 400,
                }}
              >
                <span>{label}</span>
                <span style={{ fontFamily: "var(--font-heebo), sans-serif", fontWeight: 700, color: i === 4 ? "var(--accent)" : "white" }}>
                  {price}
                </span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            למה זה אפשרי
          </h2>
          <p style={{ marginBottom: 18 }}>
            אנחנו לא נותנים הנחה — אנחנו ממלאים שעות תנור פנויות אצל אותם מוסכים שגובים ₪10,000
            מסוכנויות. השעות שאנחנו ממלאים היו ריקות בכל מקרה. עבור המוסך, כל הכנסה עליהן היא
            תוספת. עבורכם, זו אותה איכות במחיר B2B.
          </p>
        </>
      }
      faq={[
        {
          q: "האם המחיר משתנה לפי גודל הרכב?",
          a: '₪3,490 + מע"מ הוא אחיד לרכבים פרטיים סטנדרטיים. רכבי פנאי גדולים, ג\'יפים, ומסחריים — תמחור פרטני.',
        },
        {
          q: "מה כלול ב־₪3,490?",
          a: "צביעה מלאה של הרכב, איסוף מהבית או העבודה, החזרה הביתה, פוליש פנסים, ניקוי פנימי, ניקוי חיצוני. רכבים פרטיים בלבד.",
        },
        {
          q: "מה לא כלול?",
          a: "תיקוני פחחות (פח, פגושים, נזקי תאונה), תיקוני חלודה, התקנת אביזרים. אם הרכב צריך תיקון לפני הצביעה, התמחור נפרד.",
        },
        {
          q: "כמה זמן עד שמקבלים תור?",
          a: "תלוי במתי יש חלון תנור פנוי במוסכים השותפים. בדרך כלל {{LEAD_TIME_DAYS}} ימים מהזמנה. אם דחוף — דברו איתנו בוואטסאפ.",
        },
        {
          q: "אפשר לשלם בתשלומים?",
          a: "{{PAYMENT_METHODS_AND_INSTALLMENTS}} — לפרטים על אפשרויות התשלום, צרו קשר.",
        },
      ]}
      related={[
        { href: "/services/full-repaint", label: "צביעה מלאה לרכב" },
        { href: "/wholesale-pricing", label: "מחיר סיטונאי — ההסבר המלא" },
        { href: "/services/full-repaint/oven", label: "צביעה בתא צבע" },
        { href: "/services/full-repaint/included", label: 'מה כלול ב־₪3,490' },
        { href: "/how-it-works", label: "איך זה עובד" },
      ]}
    />
  );
}
