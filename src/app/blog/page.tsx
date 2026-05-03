import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";
import { BLOG_INDEX } from "@/data/blog";

export const metadata: Metadata = {
  title: "מרכז הידע של Kontrol",
  description:
    "מאמרים על מחירי צביעת רכב, המנגנון הסיטונאי, ניצול תנורים, ביטוחים, פוליש, ועוד. רק מה שלקוח חכם צריך לדעת לפני שמשלם.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const articles = [...BLOG_INDEX].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "מרכז הידע" },
      ]}
    >
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "מרכז הידע", url: "/blog" },
        ]}
      />

      <SubSection
        kicker="מרכז הידע"
        title="מאמרים שמוסכים לא רוצים שתקראו."
        intro="פירוק כלכלי של תעשיית צביעת הרכב, ההסבר המלא על המודל הסיטונאי, ומדריכים פרקטיים לחיסכון. רק מה שלקוח חכם צריך לדעת."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            style={{
              background: "var(--bg-card)",
              borderRadius: 16,
              overflow: "hidden",
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
              <Image
                src={`/images/blog/${a.heroImageSlug}.png`}
                alt={a.heroImageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 360px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--accent)",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                {a.category} · {a.readingMinutes} דק׳ קריאה
              </p>
              <h2
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "normal",
                }}
              >
                {a.title}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {a.description.length > 140 ? a.description.slice(0, 137) + "..." : a.description}
              </p>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "auto",
                  paddingTop: 6,
                }}
              >
                {new Date(a.datePublished).toLocaleDateString("he-IL")}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
