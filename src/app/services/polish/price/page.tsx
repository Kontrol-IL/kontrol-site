import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "פוליש ווקס לרכב — מחיר 2026",
  description:
    'מחיר פוליש לרכב 2026 — בכל הארץ. פוליש שטיפה, פוליש מקצועי 3-שלבי, פוליש עד הבית. כולל מחירון השוואתי ומה משפיע על המחיר.',
  alternates: { canonical: "/services/polish/price" },
};

export default function PolishPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/polish/price"
      kicker="מחירון"
      h1="פוליש ווקס לרכב — מחיר 2026."
      intro={`טווח המחירים לפוליש מקצועי בישראל. מהשירות הבסיסי (ווקס בלבד) עד הליטוש המלא בשלוש שלבים. כולל פוליש עד הבית.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פוליש", href: "/services/polish" },
        { name: "מחיר" },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            מחירון מעודכן
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
              ["שטיפה + ווקס בלבד (1-שלבי)", "₪150–₪250"],
              ["פוליש בסיסי 2-שלבי (קומפאונד + ווקס)", "₪350–₪500"],
              ["פוליש מקצועי 3-שלבי (קומפאונד + פוליש + ווקס)", "₪600–₪900"],
              ["פוליש עד הבית — בכל הארץ", '+₪{"{{POLISH_HOME_DELIVERY_FEE}}"}'],
              ["פוליש פנסים נפרד", "₪150–₪300"],
              ["Kontrol — פוליש כלול בצביעה מלאה", "חינם (₪3,490 הכולל)"],
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
            מה משפיע על המחיר
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>גודל הרכב:</strong> סדאן/האצ&apos;בק זול יותר מ־SUV/ג&apos;יפ.</li>
            <li><strong>מצב הצבע:</strong> אם הוא דהוי קשה, יידרש זמן ליטוש ארוך יותר.</li>
            <li><strong>כמות שלבים:</strong> בסיסי 2-שלבי לעומת מקצועי 3-שלבי.</li>
            <li><strong>סוג הווקס:</strong> ווקס סינתטי (זול) לעומת ווקס סראמי / ננו (יקר, מחזיק שנה+).</li>
            <li><strong>צבע שחור:</strong> מצריך זהירות נוספת — ליטוש על שחור חושף שריטות יותר מאחרים.</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "האם פוליש כלול חינם רק בצביעה מלאה?",
          a: "פוליש פנסים כלול תמיד. פוליש גוף מלא כלול בצביעה מלאה (₪3,490). כשירות עצמאי, פוליש מקצועי הוא תמחור נפרד.",
        },
        {
          q: "מה ההבדל בין פוליש לסראמי קוטינג?",
          a: "פוליש = ליטוש + ווקס, מחזיק חודשים. סראמי קוטינג = שכבה חזקה יותר, מחזיקה 2–5 שנים, אבל יקרה (₪1,500–₪3,500). אנחנו לא עושים סראמי כרגע.",
        },
        {
          q: "כמה זמן לוקח פוליש מקצועי?",
          a: "פוליש 3-שלבי לרכב סטנדרטי — 4–6 שעות. כולל ניקוי לפני, ליטוש, ווקס, וניקוי אחרי.",
        },
        {
          q: "אפשר לקבל הצעת מחיר לפי תמונה?",
          a: "כן. שלחו תמונות של הרכב מכמה זוויות בוואטסאפ, ונחזיר הצעת מחיר ראלית.",
        },
      ]}
      related={[
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/polish/at-home", label: "פוליש עד הבית" },
        { href: "/services/polish/diy-vs-pro", label: "פוליש בעצמך מול מקצועי" },
        { href: "/services/headlight-restoration/price", label: "מחיר ליטוש פנסים" },
      ]}
    />
  );
}
