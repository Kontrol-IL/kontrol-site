"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Nav } from "@/components/ui/nav";
import SectionBackground from "@/components/ui/section-background";

/**
 * Post-quiz thank-you page. Fires GA4 lead_submitted + dataLayer event,
 * which GTM forwards to Pixel/CAPI tags. Server-side CAPI mirror is via
 * /api/lead which is hit at quiz submit (not here).
 */
export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dl = (window as unknown as { dataLayer?: Record<string, unknown>[] }).dataLayer;
      if (dl) dl.push({ event: "lead_submitted", source: "quiz_thank_you" });
    }
  }, []);

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
            gap: 22,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "rgba(57,101,200,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "normal",
              maxWidth: 720,
            }}
          >
            קיבלנו את הפרטים שלכם.
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            הצוות שלנו יחזור אליכם בוואטסאפ תוך כמה שעות עם זמינות מדויקת
            לאזור שלכם. אם הוואטסאפ עוד לא נפתח אצלכם — תוכלו לפתוח אותו עכשיו.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 18,
            }}
          >
            <a
              href="https://wa.me/972527306191"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--blue"
            >
              פתחו את הוואטסאפ
            </a>
            <Link href="/" className="btn btn--white">
              חזרה לדף הבית
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
