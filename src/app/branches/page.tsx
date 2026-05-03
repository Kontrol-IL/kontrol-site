import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";
import { CITIES } from "@/data/cities";

export const metadata: Metadata = {
  title: "אזור שירות",
  description:
    "Kontrol פעיל בכל הארץ. HQ באשדוד עם רשת מוסכים שותפים בערים מובילות. בחרו את העיר שלכם לפרטים מלאים.",
  alternates: { canonical: "/branches" },
};

// Group all cities by region (Ashdod is HQ; rest from data)
const ALL_CITIES = [
  {
    slug: "ashdod",
    city: "אשדוד",
    region: "שפלה",
    wave: 1 as const,
    isHQ: true,
    note: "המטה הראשי. מוסכי שותפים מרכזיים, צוות ניהול, ושירות מלא.",
  },
  ...CITIES.map((c) => ({
    slug: c.slug,
    city: c.city,
    region: c.region,
    wave: c.wave,
    isHQ: false,
    note: c.blurb.slice(0, 110) + "...",
  })),
];

const REGIONS_ORDER = [
  "שפלה",
  "מרכז",
  "שרון",
  "ירושלים והסביבה",
  "דרום",
  "חיפה והקריות",
  "צפון",
  "דרום רחוק",
];

export default function BranchesIndex() {
  // Group by region
  const byRegion = ALL_CITIES.reduce<Record<string, typeof ALL_CITIES>>((acc, c) => {
    (acc[c.region] = acc[c.region] || []).push(c);
    return acc;
  }, {});

  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "אזור שירות" },
      ]}
    >
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "אזור שירות", url: "/branches" },
        ]}
      />

      <SubSection
        kicker="אזור שירות"
        title="פעילים בכל הארץ."
        intro="המטה שלנו באשדוד, ויש לנו רשת של מוסכים שותפים שמכסים את כל הארץ — מהקריות בצפון עד אילת בדרום. בחרו את העיר שלכם לפרטים."
      />

      {REGIONS_ORDER.filter((r) => byRegion[r]?.length).map((region) => (
        <section key={region} style={{ marginBottom: 60 }}>
          <h2
            style={{
              fontSize: "clamp(20px, 2.4vw, 28px)",
              fontWeight: 700,
              marginBottom: 20,
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            {region}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {byRegion[region].map((c) => (
              <Link
                key={c.slug}
                href={`/branches/${c.slug}`}
                style={{
                  background: c.isHQ ? "var(--accent)" : "var(--bg-card)",
                  border: c.isHQ ? "none" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  padding: 22,
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                  transition: "transform 0.2s ease",
                }}
              >
                {c.isHQ && (
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.85)",
                      letterSpacing: "0.18em",
                      fontWeight: 500,
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    HQ · המטה הראשי
                  </span>
                )}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 8,
                    letterSpacing: "normal",
                  }}
                >
                  {c.city}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: c.isHQ ? "rgba(255,255,255,0.92)" : "var(--text-muted)",
                    lineHeight: 1.55,
                    marginBottom: 12,
                  }}
                >
                  {c.note}
                </p>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: c.isHQ ? "white" : "var(--accent)",
                  }}
                >
                  לפרטים על {c.city} ←
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </SubPageLayout>
  );
}
