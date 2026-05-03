import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת ג'נטים — מחיר 2026",
  description:
    "מחיר צביעת חישוקים וג'נטים לרכב 2026 — תיקון שריטות, החלפת גוון, חידוש מלא. מחירון מלא ל־4 חישוקים.",
  alternates: { canonical: "/services/wheel-painting/price" },
};

export default function WheelPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/wheel-painting/price"
      kicker="מחירון"
      h1="צביעת ג'נטים — מחיר 2026."
      intro={`מחיר צביעת חישוקים לרכב פרטי בישראל 2026, כולל פירוק, ניקוי כימי, צביעה, ולק עליון.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעת חישוקים", href: "/services/wheel-painting" },
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
              ["תיקון שריטה / קילוף בחישוק יחיד", "₪200–₪400"],
              ["צביעת 4 חישוקים — צבע סטנדרטי", "₪900–₪1,400"],
              ["צביעת 4 חישוקים — מטאלי / מיוחד", "₪1,200–₪1,800"],
              ["צביעת 4 חישוקים — גוון מותאם", "₪1,400–₪2,200"],
              ["צביעת חישוק אחד בלבד", "₪300–₪500"],
              ['חישוקים גדולים (19" ומעלה)', "+₪200–₪400"],
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
            צבעים פופולריים
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>שחור מאט / שחור מבריק</li>
            <li>אנטרציט (אפור כהה מבריק)</li>
            <li>גרפיט / גרפיט מטאלי</li>
            <li>ברונזה</li>
            <li>נחושת מטאלית</li>
            <li>כסוף / כסוף מטאלי (חידוש לזה שהיה במקור)</li>
            <li>לבן / לבן פנינה (לרכבים ספורטיביים)</li>
          </ul>
        </>
      }
      related={[
        { href: "/services/wheel-painting", label: "צביעת חישוקים" },
        { href: "/services/caliper-painting/price", label: "מחיר צביעת קליפרים" },
      ]}
    />
  );
}
