"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * 3-step mechanism explainer: זיהוי → ניתוב → חיסכון.
 * Per brief Phase 1 §3: each step ≤6-word headline + 2-line body, framer-motion entrance.
 */

const STEPS = [
  {
    n: "01",
    kicker: "זיהוי",
    title: "תנור פנוי = הפסד למוסך.",
    body: "כל מוסך מחזיק תנור צבע יקר שעובד רק חלק מהשעות. הריקות עולות לו כסף — והוא לא יכול להציע אותן ללקוח רגיל.",
  },
  {
    n: "02",
    kicker: "ניתוב",
    title: "מנתבים אתכם לחלון פנוי.",
    body: "הטכנולוגיה שלנו רואה איפה ומתי יש קיבולת ריקה. אנחנו מתאמים את הרכב שלכם לאחד המוסכים השותפים, בכל הארץ.",
  },
  {
    n: "03",
    kicker: "חיסכון",
    title: "אתם משלמים מחיר סיטונאי.",
    body: "המוסך מקבל הכנסה על שעה שהיתה ריקה. אתם מקבלים את אותה איכות ב־₪3,490 + מע\"מ במקום ₪10,000 בשוק.",
  },
];

export function MechanismSteps() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "var(--bg)",
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
          <p
            style={{
              fontSize: 13,
              color: "var(--accent)",
              letterSpacing: "0.22em",
              marginBottom: 14,
              fontWeight: 500,
            }}
          >
            המנגנון
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "normal",
              marginBottom: 14,
            }}
          >
            איך אנחנו עושים את זה.
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
            שלושה שלבים בלבד מפרידים בין &ldquo;זה לא יכול להיות אמיתי&rdquo; ל־ &ldquo;זה הגיוני לחלוטין&rdquo;.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {STEPS.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              style={{
                background: "var(--bg-card)",
                borderRadius: 20,
                padding: 36,
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "0 0 30px rgba(57,101,200,0.10), 0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              {/* Accent corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  background:
                    "radial-gradient(circle, rgba(57,101,200,0.20) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  fontFamily: "var(--font-heebo), sans-serif",
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "rgba(57,101,200,0.50)",
                  marginBottom: 18,
                }}
              >
                {s.n}
              </div>

              <p
                style={{
                  fontSize: 12,
                  color: "var(--accent)",
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                {s.kicker}
              </p>

              <h3
                style={{
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "normal",
                  marginBottom: 16,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/how-it-works" className="btn btn--blue">
            הסבר מלא — איך זה עובד
          </Link>
        </div>
      </div>
    </section>
  );
}
