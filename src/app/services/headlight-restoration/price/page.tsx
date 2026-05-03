import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "ליטוש פנסים — מחיר 2026",
  description:
    "מחיר ליטוש פנסים לרכב 2026 — בכל הארץ. ליטוש זוג פנסים בודד, ליטוש מלא עם UV, ניקוי פנסים בלבד. מחירון השוואתי.",
  alternates: { canonical: "/services/headlight-restoration/price" },
};

export default function HeadlightPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/headlight-restoration/price"
      kicker="מחירון"
      h1="ליטוש פנסים — מחיר 2026."
      intro={`טווח מחירי ליטוש פנסים בישראל 2026, מהשירות הבסיסי (ניקוי וערפול קל) עד הליטוש המלא עם ציפוי UV. השוואה עם מוסכים סטנדרטיים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "ליטוש פנסים", href: "/services/headlight-restoration" },
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
              ["ניקוי פנסים בלבד (לערפול קל)", "₪80–₪150"],
              ["ליטוש פנס יחיד (עד 3 שלבים)", "₪120–₪200"],
              ["ליטוש 2 פנסים — בסיסי", "₪200–₪300"],
              ["ליטוש 2 פנסים + ציפוי UV", "₪300–₪450"],
              ["ליטוש 4 פנסים (קדמיים + אחוריים)", "₪400–₪600"],
              ["Kontrol — ליטוש פנסים בצביעה מלאה", "חינם (₪3,490 הכולל)"],
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
            <li><strong>חומרת הערפול:</strong> ליטוש בשלוש דרגות חיספוס לעומת בליטוש קל יותר.</li>
            <li><strong>גודל הפנס:</strong> פנסי SUV/ג&apos;יפ גדולים יותר, מצריכים יותר זמן.</li>
            <li><strong>ציפוי UV:</strong> תוספת לחיי הליטוש (2-3 שנים במקום 6-12 חודשים).</li>
            <li><strong>פנסים אחוריים:</strong> בדרך כלל לא מתערפלים כמו הקדמיים, אבל לפעמים מצריכים גם הם.</li>
          </ul>
        </>
      }
      faq={[
        {
          q: "כמה זמן לוקח ליטוש פנסים?",
          a: "ליטוש מקצועי לזוג פנסים — 1-2 שעות. אם זה כלול בצביעה מלאה, זה נעשה במהלך התהליך הכולל בלי תוספת זמן.",
        },
        {
          q: "האם ניקוי פנסים = ליטוש פנסים?",
          a: "לא. ניקוי הוא שטיפה חיצונית בלבד, מסיר לכלוך אבל לא ערפול. ליטוש מסיר את שכבת הפלסטיק הפגועה ומחזיר שקיפות.",
        },
        {
          q: "האם יש אחריות?",
          a: "{{HEADLIGHT_RESTORATION_WARRANTY}} — בדרך כלל 6-12 חודשים על שקיפות, תלוי בציפוי שנבחר.",
        },
        {
          q: "האם פנסי לד / קסנון מתערפלים גם?",
          a: "המכלה (הפלסטיק) מתערפלת בכולם. סוג הנורה לא משנה — השמש שוחקת את הפלסטיק החיצוני בכל מקרה.",
        },
      ]}
      related={[
        { href: "/services/headlight-restoration", label: "ליטוש פנסים" },
        { href: "/services/headlight-restoration/diy-vs-pro", label: "ליטוש בעצמך" },
        { href: "/services/polish/price", label: "מחיר פוליש לרכב" },
        { href: "/services/full-repaint", label: "צביעה מלאה (כולל ליטוש פנסים)" },
      ]}
    />
  );
}
