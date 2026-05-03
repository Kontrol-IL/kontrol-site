"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SubPageLayout, SubSection } from "../ui/sub-page-layout";
import { ServiceSchema } from "../schema/Service";
import { BreadcrumbListSchema } from "../schema/BreadcrumbList";
import { FAQPageSchema } from "../schema/FAQPage";
import type { BreadcrumbCrumb } from "../ui/breadcrumb";

/** Page-specific hero image map (pageUrl -> { folder, slug, alt }) */
const HUB_HERO_IMAGES: Record<string, { folder: string; slug: string; alt: string }> = {
  // Service hubs
  "/services/full-repaint": { folder: "services", slug: "service-full-repaint-hero", alt: "רכב פרטי לאחר צביעה מלאה במוסך מקצועי" },
  "/services/body-shop": { folder: "services", slug: "service-body-shop-hero", alt: "מוסך פחחות מקצועי עם רכב בעמדת תיקון" },
  "/services/polish": { folder: "services", slug: "service-polish-hero", alt: "מכונת ליטוש מקצועית בפעולה על רכב כהה" },
  "/services/headlight-restoration": { folder: "services", slug: "service-headlight-hero", alt: "פנס רכב לפני ואחרי ליטוש" },
  "/services/scratch-repair": { folder: "services", slug: "service-scratch-repair-hero", alt: "מאקרו של תיקון שריטה ברכב" },
  "/services/caliper-painting": { folder: "services", slug: "service-caliper-painting-hero", alt: "קליפר אדום צבוע על חישוק רכב" },
  "/services/wheel-painting": { folder: "services", slug: "service-wheel-painting-hero", alt: "חישוק רכב בצבע אנטרציט" },
  "/services/color-change": { folder: "services", slug: "service-color-change-hero", alt: "רכב לפני ואחרי החלפת צבע לשחור מאט" },
  "/services/partial-repaint": { folder: "services", slug: "service-partial-repaint-hero", alt: "דלת רכב ממוסכת לקראת צביעה פרטנית" },
  "/services/pickup-delivery": { folder: "services", slug: "service-pickup-delivery-hero", alt: "משאית גרר עם רכב פרטי בכביש משכנה" },
  // Color-change variants (sub-pages with delivered images)
  "/services/color-change/matte-black": { folder: "color-change", slug: "color-change-matte-black", alt: "רכב יוקרתי בגימור שחור מאט עמוק" },
  "/services/color-change/white": { folder: "color-change", slug: "color-change-white-pearl", alt: "רכב יוקרתי בלבן פנינה מולטי-קוט" },
  "/services/color-change/concrete-grey": { folder: "color-change", slug: "color-change-concrete-grey", alt: "רכב SUV באפור בטון מטאלי" },
  "/services/color-change/carbon": { folder: "color-change", slug: "color-change-carbon", alt: "מאקרו של דוגמת קרבון פייבר על מכסה מנוע" },
};

export interface ServicePageData {
  /** URL of this page (e.g. "/services/full-repaint") */
  pageUrl: string;
  /** H1 — primary keyword as user-facing phrase */
  h1: string;
  /** Eyebrow above the H1 */
  kicker: string;
  /** Lead intro paragraph below H1 */
  intro: string;
  /** Schema name (for ServiceSchema). Defaults to h1. */
  schemaName?: string;
  /** Schema description. Defaults to intro. */
  schemaDescription?: string;
  /** Optional price override (defaults to ₪3,490 in ServiceSchema) */
  priceILS?: number;
  /** Hide the price/quiz CTA (e.g. on info-only sub-pages) */
  hideQuizCta?: boolean;
  /** Bullet list of "what's included" / key features */
  highlights?: { title: string; text: string }[];
  /** Long-form body content (rich JSX) */
  body?: React.ReactNode;
  /** FAQ entries shown on this page + emitted as FAQPage schema */
  faq?: { q: string; a: string }[];
  /** Sibling / related service links */
  related?: { href: string; label: string }[];
  /** Breadcrumb chain — first item is always { name: "צביעת רכב", href: "/" } injected here. */
  breadcrumb: { name: string; href?: string }[];
}

const QUIZ_HREF = "/book";

export function ServicePageShell(props: ServicePageData) {
  const breadcrumb: BreadcrumbCrumb[] = [{ name: "צביעת רכב", href: "/" }, ...props.breadcrumb];
  const breadcrumbWithUrls = [
    { name: "צביעת רכב", url: "/" },
    ...props.breadcrumb.map((b, i, arr) => ({
      name: b.name,
      url: b.href || (i === arr.length - 1 ? props.pageUrl : "/"),
    })),
  ];

  return (
    <SubPageLayout breadcrumb={breadcrumb}>
      <ServiceSchema
        name={props.schemaName || props.h1}
        description={props.schemaDescription || props.intro}
        pageUrl={props.pageUrl}
        price={props.priceILS}
      />
      <BreadcrumbListSchema items={breadcrumbWithUrls} />
      {props.faq && props.faq.length > 0 && <FAQPageSchema questions={props.faq} />}

      {/* HERO IMAGE (top-level hubs + color-change variants have one) */}
      {HUB_HERO_IMAGES[props.pageUrl] && (
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
            src={`/images/${HUB_HERO_IMAGES[props.pageUrl].folder}/${HUB_HERO_IMAGES[props.pageUrl].slug}.png`}
            alt={HUB_HERO_IMAGES[props.pageUrl].alt}
            fill
            sizes="(max-width: 1080px) 100vw, 1080px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* HERO */}
      <SubSection kicker={props.kicker} title={props.h1} intro={props.intro}>
        {!props.hideQuizCta && (
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
            <Link href={QUIZ_HREF} className="btn btn--blue">
              התחילו את השאלון
            </Link>
            <a
              href="https://wa.me/972527306191"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                padding: "12px 22px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              דברו בוואטסאפ
            </a>
          </div>
        )}
      </SubSection>

      {/* HIGHLIGHTS GRID */}
      {props.highlights && props.highlights.length > 0 && (
        <SubSection title="מה כולל השירות">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {props.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                style={{
                  background: "var(--bg-card)",
                  borderRadius: 14,
                  padding: 24,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: "normal" }}>
                  {h.title}
                </h3>
                <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {h.text}
                </p>
              </motion.div>
            ))}
          </div>
        </SubSection>
      )}

      {/* LONG-FORM BODY */}
      {props.body && (
        <SubSection>
          <div
            style={{
              background: "var(--bg-card)",
              borderRadius: 16,
              padding: "36px 32px",
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {props.body}
          </div>
        </SubSection>
      )}

      {/* FAQ */}
      {props.faq && props.faq.length > 0 && (
        <SubSection title="שאלות נפוצות">
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {props.faq.map((f, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  padding: "22px 0",
                }}
              >
                <summary
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    color: "white",
                  }}
                >
                  <span>{f.q}</span>
                  <span style={{ fontSize: 22, color: "var(--accent)", fontWeight: 700, flexShrink: 0 }} aria-hidden="true">
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: 15.5,
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginTop: 14,
                    maxWidth: 820,
                  }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </SubSection>
      )}

      {/* RELATED */}
      {props.related && props.related.length > 0 && (
        <SubSection title="שירותים קשורים">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              flexDirection: "row-reverse",
            }}
          >
            {props.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  padding: "10px 18px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 9999,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </SubSection>
      )}

      {/* FINAL CTA */}
      {!props.hideQuizCta && (
        <SubSection>
          <div
            style={{
              textAlign: "center",
              background: "var(--bg-card)",
              borderRadius: 20,
              padding: "48px 32px",
              boxShadow: "0 0 30px rgba(57,101,200,0.12), 0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3.4vw, 40px)",
                fontWeight: 700,
                marginBottom: 14,
                letterSpacing: "normal",
              }}
            >
              רוצים לבדוק זמינות?
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: 16 }}>
              6 שאלות. שתי דקות. תשובה בוואטסאפ.
            </p>
            <Link href={QUIZ_HREF} className="btn btn--blue">
              התחילו את השאלון
            </Link>
          </div>
        </SubSection>
      )}
    </SubPageLayout>
  );
}
