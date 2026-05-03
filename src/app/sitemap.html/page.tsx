import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";

export const metadata: Metadata = {
  title: "מפת אתר",
  description: "מפת האתר של Kontrol — כל הדפים במקום אחד.",
  alternates: { canonical: "/sitemap.html" },
};

const SECTIONS = [
  {
    title: "ראשי",
    links: [
      { href: "/", label: "דף הבית" },
      { href: "/how-it-works", label: "איך זה עובד" },
      { href: "/wholesale-pricing", label: "מחיר סיטונאי — ההסבר המלא" },
      { href: "/about", label: "אודות" },
      { href: "/gallery", label: "גלריה" },
      { href: "/faq", label: "שאלות ותשובות" },
      { href: "/book", label: "קביעת תור" },
      { href: "/contact", label: "צור קשר" },
    ],
  },
  {
    title: "אזור שירות",
    links: [
      { href: "/branches", label: "כל הערים" },
      { href: "/branches/ashdod", label: "אשדוד (HQ)" },
      { href: "/branches/rishon-letzion", label: "ראשון לציון" },
      { href: "/branches/modiin", label: "מודיעין" },
    ],
  },
  {
    title: "מידע נוסף",
    links: [
      { href: "/warranty", label: "אחריות" },
      { href: "/customer-guide", label: "מה לצפות מהשירות" },
      { href: "/refund-policy", label: "ביטול ומדיניות החזרים" },
    ],
  },
  {
    title: "משפטי",
    links: [
      { href: "/privacy", label: "מדיניות פרטיות" },
      { href: "/terms", label: "תנאי שימוש" },
      { href: "/accessibility", label: "הצהרת נגישות" },
      { href: "/security", label: "פרסום פגיעות אבטחה" },
    ],
  },
];

export default function HtmlSitemap() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "מפת אתר" },
      ]}
    >
      <SubSection
        kicker="מפת אתר"
        title="כל הדפים במקום אחד."
        intro="ניווט מהיר לכל פינה ב־Kontrol."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 32,
        }}
      >
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h3
              style={{
                fontSize: 14,
                color: "var(--accent)",
                letterSpacing: "0.18em",
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              {s.title}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {s.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SubPageLayout>
  );
}
