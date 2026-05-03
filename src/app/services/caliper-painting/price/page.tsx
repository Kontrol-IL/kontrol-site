import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת קליפרים — מחיר וצבעים",
  description:
    "מחיר צביעת קליפרים לרכב 2026 — צבע אחד, צבע מטאלי, גוון מותאם. מחירון מלא + מבחר צבעים נפוצים.",
  alternates: { canonical: "/services/caliper-painting/price" },
};

export default function CaliperPrice() {
  return (
    <ServicePageShell
      pageUrl="/services/caliper-painting/price"
      kicker="מחירון"
      h1="צביעת קליפרים — מחיר וצבעים."
      intro={`מחיר צביעת קליפרים לרכב פרטי בישראל 2026, כולל פירוק והרכבה.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעת קליפרים", href: "/services/caliper-painting" },
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
              ["צבע סטנדרטי (אדום, צהוב, כחול, שחור)", "₪600–₪900"],
              ["צבע מטאלי / מיוחד", "₪900–₪1,200"],
              ["גוון מותאם (Pantone / RAL)", "₪1,200–₪1,800"],
              ["צביעה אחורית בלבד (2 קליפרים)", "₪400–₪600"],
              ["הוספת לוגו / טקסט (יצרן הרכב)", "+₪150–₪300"],
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
            הצבעים הנפוצים
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>אדום קלאסי:</strong> הצבע הפופולרי. נראה ספורטיבי, מתאים לרכבים כהים.</li>
            <li><strong>צהוב Brembo:</strong> נראה כמו קליפרים מקצועיים מבעלי שם.</li>
            <li><strong>כחול חשמלי:</strong> טוב על רכבים לבנים וכסופים.</li>
            <li><strong>שחור מאט:</strong> אם רוצים שדרוג איכותי בלי לבלוט.</li>
            <li><strong>נחושת / כתום:</strong> ייחודי, מתאים לרכבי SUV ולרכבים גדולים.</li>
          </ul>
        </>
      }
      related={[
        { href: "/services/caliper-painting", label: "צביעת קליפרים" },
        { href: "/services/wheel-painting/price", label: "מחיר צביעת חישוקים" },
      ]}
    />
  );
}
