import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "תיקון שריטות ברכב — מחיר 2026",
  description:
    "מחירון תיקון שריטות לרכב 2026 — שריטה שטוחה, בינונית, עמוקה. מחירים ראליים בכל הארץ עם התאמת גוון מקצועית.",
  alternates: { canonical: "/services/scratch-repair/price" },
};

export default function ScratchPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/scratch-repair/price"
      kicker="מחירון"
      h1="תיקון שריטות ברכב — מחיר 2026."
      intro={`המחיר תלוי בעומק השריטה ובמספר השריטות. הנה הטווח הראלי לעבודה איכותית בתנור צבע עם התאמת גוון ספקטרומטרית.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "תיקון שריטות", href: "/services/scratch-repair" },
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
              ["שריטה שטוחה (פוליש בלבד מסיר)", "₪150–₪300"],
              ["שריטה בינונית בודדה (₪+ צביעה)", "₪400–₪800"],
              ["שריטה עמוקה למתכת (פריימר + צבע + לק)", "₪600–₪1,500"],
              ["2-3 שריטות בפנלים שונים", "₪900–₪1,800"],
              ["שריטות מקיפות בפנל אחד (כדאי לצבוע פנל)", "₪1,400–₪2,400"],
              ["צביעה מלאה — אלטרנטיבה", '₪3,490 + מע"מ'],
              ["מסיר שריטות / קיט DIY (ביתי)", "₪40–₪200"],
            ].map(([label, price], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  padding: "14px 22px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                  background: i === 5 ? "rgba(57,101,200,0.12)" : "transparent",
                  fontSize: 15,
                  color: i === 5 ? "white" : "rgba(255,255,255,0.85)",
                  fontWeight: i === 5 ? 700 : 400,
                }}
              >
                <span>{label}</span>
                <span style={{ fontWeight: 700, color: i === 5 ? "var(--accent)" : "white" }}>
                  {price}
                </span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מתי משתלם לעבור לצביעה מלאה
          </h2>
          <p>
            אם המחיר המצטבר לתיקון שריטות נקודתיות מתקרב ל־₪2,500-3,000, צביעה מלאה (₪3,490) הופכת
            למחיר הגיוני יותר — אתם מקבלים רכב שלם נקי במקום פנלים נקודתיים. אנחנו תמיד נציע
            לכם את שתי האופציות עם תמחור שקוף.
          </p>
        </>
      }
      faq={[
        {
          q: "האם מחיר תיקון תלוי בצבע הרכב?",
          a: "כן, חלקית. צבעים מטאליים מיוחדים (פנינה, קרבון) מצריכים זמן ארוך יותר להתאמה — תוספת של ₪100-₪300. לבן רגיל, שחור רגיל, אפור — מחיר סטנדרטי.",
        },
        {
          q: "אפשר לקבל הצעת מחיר לפי תמונה?",
          a: "כן. שלחו תמונה ברורה של השריטה (ביום, מקרוב), והאזור הסובב. נחזור עם הצעת מחיר ראלית.",
        },
        {
          q: "האם המחיר כולל איסוף ומשלוח?",
          a: "תיקון נקודתי בודד — לא תמיד כדאי לאיסוף עד הבית כי זה נמשך רק כמה שעות. תיקון מורכב יותר — כן, איסוף ומשלוח חינם בכל הארץ.",
        },
      ]}
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות" },
        { href: "/services/scratch-repair/deep-scratches", label: "שריטות עמוקות" },
        { href: "/services/full-repaint/price", label: "מחיר צביעה מלאה" },
        { href: "/services/polish/price", label: "מחיר פוליש לרכב" },
      ]}
    />
  );
}
