import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "פחחות וצבע — מחירים ומחירון 2026",
  description:
    "מחירון פחחות וצבע מעודכן 2026: שקעים, פגושים, פנלים, תיקוני תאונה. כולל הצעות מחיר ראליות לעבודות הנפוצות ביותר.",
  alternates: { canonical: "/services/body-shop/price" },
};

export default function BodyShopPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/body-shop/price"
      kicker="מחירון"
      h1="פחחות וצבע — מחירים ומחירון 2026."
      intro={`מחירון ראלי מעודכן לעבודות הפחחות והצבע הנפוצות ביותר. כל מחיר הוא הערכה — התמחור הסופי תלוי בבדיקה. אבל זה הטווח שאתם יכולים לצפות לו.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פחחות וצבע", href: "/services/body-shop" },
        { name: "מחירון" },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            מחירון נקודתי
          </h2>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            {[
              ["שקע קטן בלי קילוף צבע (paintless dent repair)", "₪250–₪450"],
              ["שקע בינוני עם קילוף צבע", "₪600–₪1,200"],
              ["תיקון פגוש פלסטיק (סדק / שבר)", "₪400–₪900"],
              ["החלפת פגוש (כולל הפגוש החדש)", "₪1,500–₪3,500"],
              ["תיקון פנל דלת מעוקם", "₪800–₪1,800"],
              ["החלפת פנל דלת מלא", "₪2,500–₪5,000"],
              ["תיקון מכסה מנוע", "₪1,200–₪2,500"],
              ["תיקון אחרי תאונה קלה (פגוש + פנל)", "₪3,000–₪6,000"],
              ["תיקון אחרי תאונה בינונית (3-4 פנלים)", "₪6,000–₪12,000"],
            ].map(([label, price], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  padding: "14px 22px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                  fontSize: 15,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{label}</span>
                <span style={{ fontWeight: 700, color: "white" }}>{price}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            פחחות + צביעה מלאה: חבילה
          </h2>
          <p style={{ marginBottom: 18 }}>
            אם אחרי הפחחות אתם רוצים גם צביעה מלאה — המחיר אחיד: ₪3,490 + מע&quot;מ. בלי קשר להיקף
            הפחחות (כל עוד הוא לא דורש החלפת רכיבים גדולה).
          </p>
          <p>
            הדוגמה הנפוצה ביותר: רכב אחרי תאונה קלה — ₪4,000 פחחות + ₪3,490 צביעה = ₪7,490 לעבודה
            מלאה. מוסך רגיל ייתן לכם על אותה עבודה הצעה של ₪14,000–₪18,000.
          </p>
        </>
      }
      faq={[
        {
          q: "איך מקבלים הצעת מחיר מדויקת?",
          a: "שלחו לנו תמונות של הנזק בוואטסאפ. תוך כמה שעות נחזור עם הצעה ראלית. אם אתם מסכימים, נקבע איסוף.",
        },
        {
          q: "המחיר כולל את הפגוש החדש או רק את העבודה?",
          a: "כשמדובר בהחלפה, המחיר כולל את החלק. כשמדובר בתיקון בלבד, המחיר רק על העבודה. אנחנו מציינים בהצעה.",
        },
        {
          q: "אפשר לשלם בתשלומים?",
          a: "{{PAYMENT_METHODS_AND_INSTALLMENTS}} — לפרטים מלאים, צרו קשר.",
        },
        {
          q: "המחיר זול ב־30-50% ממוסך רגיל. למה?",
          a: 'אותו מודל של צביעה מלאה — אנחנו ממלאים שעות פנויות אצל מוסכים שעובדים גם עם סוכנויות וחברות ביטוח. השעות שאנחנו ממלאים היו ריקות בכל מקרה. עבורכם, אותה איכות במחיר B2B.',
        },
      ]}
      related={[
        { href: "/services/body-shop", label: "פחחות וצבע" },
        { href: "/services/body-shop/bumper-repair", label: "תיקון פגוש פלסטיק" },
        { href: "/services/body-shop/post-accident", label: "תיקון רכב לאחר תאונה" },
        { href: "/services/full-repaint/price", label: "מחיר צביעה מלאה" },
      ]}
    />
  );
}
