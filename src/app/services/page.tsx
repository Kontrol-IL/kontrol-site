import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";

export const metadata: Metadata = {
  title: "שירותי צביעת רכב",
  description:
    'כל השירותים של Kontrol: צביעה מלאה, פחחות, פוליש, ליטוש פנסים, תיקון שריטות, צביעת קליפרים וג\'נטים. הכל במחיר סיטונאי, בכל הארץ.',
  alternates: { canonical: "/services" },
};

const HUBS = [
  {
    href: "/services/full-repaint",
    title: "צביעה מלאה לרכב",
    sub: "₪3,490 + מע\"מ — שירות הדגל",
    desc: "צביעה מלאה של הרכב, איסוף ומשלוח חינם, פוליש פנסים, וניקוי פנימי וחיצוני.",
    primary: true,
  },
  {
    href: "/services/body-shop",
    title: "פחחות וצבע",
    sub: "פחחות מקצועית במחיר B2B",
    desc: "תיקוני פח, פגושים, פנלים. מחירים שקופים, איכות של מוסכי סוכנויות.",
  },
  {
    href: "/services/polish",
    title: "פוליש לרכב",
    sub: "ליטוש מקצועי, גם עד הבית",
    desc: "ליטוש מכני בשלוש שכבות לחידוש הברק. כלול חינם בכל צביעה מלאה.",
  },
  {
    href: "/services/headlight-restoration",
    title: "ליטוש פנסים",
    sub: "חידוש מלא של הפנסים",
    desc: "הסרת ערפול וצהבת מהפנסים. שדרוג ראייה לילית. כלול בכל צביעה מלאה.",
  },
  {
    href: "/services/scratch-repair",
    title: "תיקון שריטות",
    sub: "מהשריטות הקטנות עד העמוקות",
    desc: "תיקון נקודתי ללא צביעה מלאה. התאמת גוון ספקטרומטרית.",
  },
  {
    href: "/services/caliper-painting",
    title: "צביעת קליפרים",
    sub: "שדרוג ויזואלי בעלות נמוכה",
    desc: "צביעת קליפרי בלם בצבעי טמפרטורה גבוהה. עמיד לחום ושימוש קשה.",
  },
  {
    href: "/services/wheel-painting",
    title: "צביעת חישוקים",
    sub: "חידוש ג'נטים לרכב",
    desc: "צביעת ג'נטים וחישוקים. תיקון שריטות, החלפת גוון, חידוש מלא.",
  },
  {
    href: "/services/color-change",
    title: "החלפת צבע לרכב",
    sub: "שחור מאט, לבן פנינה, ועוד",
    desc: "שינוי צבע מלא של הרכב. כולל עדכון ברישיון רכב במשרד הרישוי.",
  },
  {
    href: "/services/partial-repaint",
    title: "צביעה פרטנית",
    sub: "פנל ספציפי, גג, או דלת",
    desc: "צביעה של חלק ספציפי ברכב — דלת, גג, פגוש, מכסה מנוע.",
  },
  {
    href: "/services/pickup-delivery",
    title: "איסוף ומשלוח",
    sub: "חינם — בכל הארץ",
    desc: "אנחנו לוקחים את הרכב מהבית או מהעבודה ומחזירים אותו אליכם. כלול בכל שירות.",
  },
];

export default function ServicesIndex() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "כל השירותים" },
      ]}
    >
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "כל השירותים", url: "/services" },
        ]}
      />

      <SubSection
        kicker="שירותים"
        title="כל השירותים שלנו."
        intro="המרכז של Kontrol הוא צביעה מלאה ב־₪3,490 + מע&quot;מ. סביבו בנינו 8 קבוצות שירות נוספות שעובדות לפי אותו מודל סיטונאי."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {HUBS.map((h) => (
          <Link
            key={h.href}
            href={h.href}
            style={{
              background: h.primary ? "var(--accent)" : "var(--bg-card)",
              border: h.primary ? "none" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 28,
              textDecoration: "none",
              color: "white",
              display: "block",
              boxShadow: h.primary
                ? "0 0 30px rgba(57,101,200,0.30), 0 4px 12px rgba(0,0,0,0.3)"
                : "0 0 20px rgba(57,101,200,0.10), 0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                color: h.primary ? "rgba(255,255,255,0.85)" : "var(--accent)",
                letterSpacing: "0.18em",
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              {h.sub}
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10,
                letterSpacing: "normal",
              }}
            >
              {h.title}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: h.primary ? "rgba(255,255,255,0.92)" : "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {h.desc}
            </p>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: h.primary ? "white" : "var(--accent)",
              }}
            >
              לפרטים מלאים ←
            </span>
          </Link>
        ))}
      </div>
    </SubPageLayout>
  );
}
