import Link from "next/link";
import { Nav } from "@/components/ui/nav";
import SectionBackground from "@/components/ui/section-background";

export default function NotFound() {
  return (
    <>
      <Nav solid />
      <main
        style={{
          position: "relative",
          minHeight: "calc(100vh - 80px)",
          paddingTop: 120,
          paddingBottom: 80,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SectionBackground />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heebo), sans-serif",
              fontSize: "clamp(80px, 16vw, 200px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "normal",
              maxWidth: 720,
            }}
          >
            הדף הזה לא קיים. אבל ההזמנה שלכם — כן.
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            כנראה הגעתם לקישור ישן או שגוי. נסו את הדפים שלמטה, או חזרו לדף הבית.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <Link href="/" className="btn btn--blue">
              חזרה לדף הבית
            </Link>
            <Link href="/book" className="btn btn--white">
              קביעת תור
            </Link>
          </div>

          <nav
            style={{
              marginTop: 36,
              display: "flex",
              gap: 22,
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: 14,
              color: "var(--text-muted)",
              direction: "rtl",
            }}
            aria-label="קישורים מועילים"
          >
            <Link href="/how-it-works" style={{ color: "var(--text-muted)" }}>איך זה עובד</Link>
            <span aria-hidden="true">·</span>
            <Link href="/gallery" style={{ color: "var(--text-muted)" }}>גלריה</Link>
            <span aria-hidden="true">·</span>
            <Link href="/branches" style={{ color: "var(--text-muted)" }}>אזור שירות</Link>
            <span aria-hidden="true">·</span>
            <Link href="/faq" style={{ color: "var(--text-muted)" }}>שאלות נפוצות</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" style={{ color: "var(--text-muted)" }}>צור קשר</Link>
          </nav>
        </div>
      </main>
    </>
  );
}
