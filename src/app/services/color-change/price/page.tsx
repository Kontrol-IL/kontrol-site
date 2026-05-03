import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "החלפת צבע לרכב — מחיר ותהליך",
  description:
    "מחיר החלפת צבע לרכב 2026 — גוונים סטנדרטיים, מטאליים, פנינה, קרבון. כולל טיפול ברישיון רכב במשרד הרישוי.",
  alternates: { canonical: "/services/color-change/price" },
};

export default function ColorChangePrice() {
  return (
    <ServicePageShell
      pageUrl="/services/color-change/price"
      kicker="מחירון"
      h1="החלפת צבע לרכב — מחיר ותהליך."
      intro={`מחיר החלפת צבע לרכב פרטי, כולל הצביעה המלאה ועדכון רישיון רכב במשרד הרישוי.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "החלפת צבע", href: "/services/color-change" },
        { name: "מחיר" },
      ]}
      body={
        <>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            {[
              ["גוון סטנדרטי (לבן, שחור, אפור, אדום, כחול)", '₪3,490 + מע"מ'],
              ["גוון מטאלי בסיסי", '₪3,990 + מע"מ'],
              ["גוון פנינה / מטאלי מיוחד", '₪4,500 + מע"מ'],
              ["גוון מאט (שחור מאט, אפור מאט)", '₪4,200 + מע"מ'],
              ["גוון קרבון / סימולציית קרבון", '₪4,800 + מע"מ'],
              ["גוון מותאם (Pantone / RAL ספציפי)", '₪5,200+ + מע"מ'],
              ["טיפול במשרד הרישוי (כלול בכל המחירים)", "כלול"],
            ].map(([label, price], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  padding: "14px 22px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                  background: i === 0 ? "rgba(57,101,200,0.08)" : "transparent",
                  fontSize: 15,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{label}</span>
                <span style={{ fontWeight: 700, color: "white" }}>{price}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            התהליך — שלב אחר שלב
          </h2>
          <ol style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>בחירת גוון:</strong> מספר אופציות לראייה במציאות (לא רק בקטלוג).</li>
            <li><strong>הצעת מחיר סופית:</strong> אחרי בחירת הגוון, מחיר נסגר.</li>
            <li><strong>איסוף הרכב:</strong> מהבית או העבודה.</li>
            <li><strong>שיוף + פריימר:</strong> הכנה לצבע החדש (1-2 ימים).</li>
            <li><strong>צביעה בתנור:</strong> צבע בסיס + לק עליון (2-3 ימים).</li>
            <li><strong>טיפול במשרד הרישוי:</strong> טפסים, צילומים, שליחה (יום).</li>
            <li><strong>החזרה:</strong> הרכב חוזר עם רישיון מעודכן.</li>
          </ol>
        </>
      }
      faq={[
        {
          q: "האם החלפת הצבע משפיעה על הביטוח?",
          a: "לא. כל עוד הצבע מעודכן ברישיון, הביטוח ממשיך לכסות. אם תחליפו צבע בלי לעדכן — זה יכול להיות בעייתי בעת תביעה.",
        },
        {
          q: "כמה עולה משרד הרישוי?",
          a: 'עלות אגרת עדכון רישיון: ₪{"{{LICENSE_UPDATE_FEE}}"} — כלולה במחיר אצלנו, אתם לא משלמים בנפרד.',
        },
        {
          q: "האם זה כולל פנים הרכב גם?",
          a: "לא. מקלעת פנים, מושבים, וכל מה שבפנים נשאר בצבע המקורי. אם רוצים החלפה גם בפנים — זה תמחור נפרד.",
        },
      ]}
      related={[
        { href: "/services/color-change", label: "החלפת צבע לרכב" },
        { href: "/services/full-repaint/price", label: "מחיר צביעה מלאה" },
        { href: "/blog/legal-color-change-license", label: "מאמר: עדכון רישיון רכב" },
      ]}
    />
  );
}
