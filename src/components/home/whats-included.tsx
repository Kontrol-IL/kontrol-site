"use client";

import { motion } from "framer-motion";

/**
 * "What's included in ₪3,490" — 6-item visual grid.
 * Per brief Phase 1 §2: ≤6-word headline (`הכל כלול במחיר`).
 */

const ITEMS = [
  {
    title: "צביעה מלאה",
    text: "כל הרכב, לא חלקי, לא טלאים.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 17l3-9h8l3 9M5 17v3a1 1 0 001 1h2a1 1 0 001-1v-1h6v1a1 1 0 001 1h2a1 1 0 001-1v-3M7 13h10" strokeLinecap="round" />
        <circle cx="8" cy="17" r="1.5" />
        <circle cx="16" cy="17" r="1.5" />
      </svg>
    ),
  },
  {
    title: "איסוף מהבית",
    text: "אנחנו מגיעים אליכם — בית או עבודה.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12L12 4l9 8M5 11v9h4v-5h6v5h4v-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "החזרה עד הבית",
    text: "מחזירים את הרכב מצוחצח.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h13l-3-3M3 12l13 0 -3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 5v14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "פוליש פנסים",
    text: "ליטוש מקצועי, פנסים שקופים.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="6" ry="4.5" />
        <path d="M2 12h2M20 12h2M12 2v2M12 20v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ניקוי פנים",
    text: "ספוגות, תפירה, מושבים.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11h14M5 11v6a2 2 0 002 2h10a2 2 0 002-2v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "ניקוי חיצוני",
    text: "שטיפה, חישוקים, חלונות.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3v4M7 11v4M7 19v2M12 3v2M12 9v4M12 17v4M17 3v4M17 11v4M17 19v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhatsIncluded() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "var(--bg-card)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56, textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "normal",
              marginBottom: 14,
            }}
          >
            הכל כלול במחיר.
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 1.4vw, 20px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            ₪3,490 + מע&quot;מ. בלי תוספות, בלי הפתעות, בלי תוספי איכות.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              style={{
                background: "var(--bg)",
                borderRadius: 16,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: 4,
                }}
              >
                {it.icon}
              </div>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "normal",
                  marginBottom: 4,
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                }}
              >
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
