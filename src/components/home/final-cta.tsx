"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Final CTA before MotionFooter. Per brief Phase 1 §8: repeat hero CTA pair.
 * Lighter visual treatment than MotionFooter — this is a final purchase nudge,
 * MotionFooter is the close-out.
 */

export function FinalCta() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "var(--bg-card)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Aurora glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 800px 300px at 50% 50%, rgba(57,101,200,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: 13,
              color: "var(--accent)",
              letterSpacing: "0.22em",
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            ₪3,490 + מע&quot;מ · בכל הארץ
          </p>

          <h2
            style={{
              fontSize: "clamp(38px, 5.4vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: 26,
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            צבע לרכב במחיר סיטונאי.
            <br />
            השאלון לוקח שתי דקות.
          </h2>

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
            <Link href="/book" className="btn btn--blue" style={{ padding: "16px 36px", fontSize: 16 }}>
              התחילו את השאלון
            </Link>
            <a
              href="https://wa.me/972527306191"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
              style={{ padding: "16px 36px", fontSize: 16 }}
            >
              דברו בוואטסאפ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
