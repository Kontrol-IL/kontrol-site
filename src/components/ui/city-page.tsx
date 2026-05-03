"use client";

import Image from "next/image";
import Link from "next/link";
import { SubPageLayout, SubSection } from "./sub-page-layout";
import { LocalBusinessSchema } from "../schema/LocalBusiness";
import { ServiceSchema } from "../schema/Service";
import { BreadcrumbListSchema } from "../schema/BreadcrumbList";

/** Branches that have a delivered hero image (slug -> file basename + alt) */
const BRANCH_HERO_IMAGES: Record<string, { file: string; alt: string }> = {
  ashdod: { file: "branch-ashdod-hq", alt: "מוסך Kontrol באשדוד עם נמל אשדוד ברקע" },
  "petach-tikva": { file: "branch-petach-tikva-area", alt: "אזור פתח תקווה — רחוב עם רכב ובניינים" },
  "tel-aviv": { file: "branch-tel-aviv-area", alt: "רחוב מגורים בתל אביב עם רכב חונה" },
  haifa: { file: "branch-haifa-area", alt: "מבט מהר הכרמל בחיפה אל מפרץ חיפה" },
  jerusalem: { file: "branch-jerusalem-area", alt: "רכב ברחוב ירושלמי עם חומת אבן ירושלמית" },
  "beer-sheva": { file: "branch-beer-sheva-area", alt: "רכב ברחוב בבאר שבע עם דקל ובתי אבן" },
};

interface CityPageProps {
  city: string;
  slug: string;
  monthlyCount: string;
  blurb: string;
  /** Ashdod HQ gets full LocalBusiness; other cities get Service+areaServed only. */
  isHQ?: boolean;
}

export function CityPage({ city, slug, monthlyCount, blurb, isHQ = false }: CityPageProps) {
  const pageUrl = `/branches/${slug}`;
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "אזור שירות", href: "/branches" },
        { name: city },
      ]}
    >
      {/* JSON-LD */}
      {isHQ ? (
        <LocalBusinessSchema pageUrl={pageUrl} city={city} />
      ) : (
        <ServiceSchema
          name={`צביעת רכב ב${city} — במחיר סיטונאי`}
          description={blurb}
          pageUrl={pageUrl}
          areaServedCity={city}
        />
      )}
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "אזור שירות", url: "/branches" },
          { name: city, url: pageUrl },
        ]}
      />

      {/* CITY HERO IMAGE (Wave 1 cities have delivered images) */}
      {BRANCH_HERO_IMAGES[slug] && (
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 36,
          }}
        >
          <Image
            src={`/images/branches/${BRANCH_HERO_IMAGES[slug].file}.png`}
            alt={BRANCH_HERO_IMAGES[slug].alt}
            fill
            sizes="(max-width: 1080px) 100vw, 1080px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <SubSection
        kicker={`אזור שירות · ${slug}`}
        title={`צביעת רכב ב${city} — במחיר סיטונאי.`}
        intro={blurb}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Link href="/book" className="btn btn--blue">
            קבעו תור ל{city}
          </Link>
          <Link
            href="/how-it-works"
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              padding: "12px 22px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            איך זה עובד
          </Link>
        </div>
      </SubSection>

      <SubSection>
        <div
          style={{
            textAlign: "center",
            background: "var(--bg-card)",
            borderRadius: 20,
            padding: "60px 40px",
            boxShadow: "0 0 30px rgba(57,101,200,0.12), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "var(--accent)",
              letterSpacing: "0.22em",
              marginBottom: 14,
              fontWeight: 500,
            }}
          >
            פעילות חודשית
          </p>
          <p
            style={{
              fontSize: "clamp(56px, 8vw, 120px)",
              color: "white",
              lineHeight: 1,
              fontWeight: 800,
              marginBottom: 14,
              letterSpacing: "-0.02em",
            }}
          >
            {monthlyCount}
          </p>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 560,
              marginInline: "auto",
              lineHeight: 1.6,
            }}
          >
            רכבים שצבענו ב{city} בחודש האחרון.
          </p>
        </div>
      </SubSection>

      <SubSection title={`איך אנחנו מצליחים לצבוע ב־₪3,490 ב${city}.`}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { kicker: "01", title: "מוסכים מקומיים", body: `אנחנו עובדים עם מוסכי צבע ב${city} ובאזור — מקצועיים, מאומתים, בעלי וותק.` },
            { kicker: "02", title: "שעות תנור פנויות", body: "אצל כל אחד מהם יש חלונות זמן בהם התנור עומד ריק. אנחנו ממלאים אותם." },
            { kicker: "03", title: "מחיר סיטונאי לאזרח", body: 'מה שלקוחות B2B (סוכנויות, חברות ביטוח) משלמים — אתם משלמים. ₪3,490 + מע"מ.' },
          ].map((c) => (
            <div
              key={c.kicker}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                {c.kicker}
              </span>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{c.title}</h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 700, marginBottom: 14 }}>
            יש לנו תנור פנוי השבוע ב{city}?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 26, fontSize: 16 }}>
            נחזיר לכם תשובה תוך כמה שעות.
          </p>
          <Link href="/book" className="btn btn--blue">
            התחילו את השאלון
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
