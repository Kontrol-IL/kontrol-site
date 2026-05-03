"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQPageSchema } from "../schema/FAQPage";

/**
 * Top 6 FAQ from /faq, embedded on homepage. Per brief Phase 1 §7.
 * Emits FAQPage schema for the homepage FAQ block.
 */

const HOMEPAGE_FAQS = [
  {
    q: "₪3,490 על צביעת רכב מלאה? איך זה אפשרי?",
    a: "אנחנו ממלאים שעות תנור פנויות אצל מוסכי צבע מובילים. השעות האלה היו ריקות בכל מקרה — מבחינת המוסך, כל הכנסה עליהן היא תוספת. אנחנו מנתבים את העבודה שלכם לחלון ריק, מקבלים מחיר סיטונאי, ומעבירים אליכם את החיסכון.",
  },
  {
    q: "האיכות באמת אותה איכות?",
    a: "כן. אותם מוסכים שצובעים רכבי סוכנויות וחברות ביטוח ב־₪10,000 — הם אלה שצובעים את הרכב שלכם. אותו תנור, אותו חומר, אותם טכנאים. רכב שלא חוזר באיכות שאנחנו מצפים מתוקן על חשבון המוסך.",
  },
  {
    q: "מה הקאצ'?",
    a: "האמת? אתם לא בוחרים את היום. הזמינות תלויה במתי יש חלון פנוי במוסך, וזה בדרך כלל {{LEAD_TIME_DAYS}} ימים קדימה. אם אתם צריכים את הרכב מחר אחר הצהריים — אנחנו לא הכתובת.",
  },
  {
    q: "למה המוסכים לא מציעים את זה ישירות?",
    a: 'כי זה ירס להם את התמחור הקמעונאי הרגיל. אם הם יכריזו "₪3,490 לכולם" הלקוחות הקיימים שלהם יפסיקו לשלם ₪10,000. אבל למלא חלון ריק דרכנו — זה רווח נטו על שעה שהיתה אבודה.',
  },
  {
    q: "מה כלול במחיר?",
    a: "צביעה מלאה של הרכב, איסוף ומשלוח עד הבית, ניקוי פנימי וחיצוני, פוליש פנסים. רכבים פרטיים בלבד. תיקוני חלודה, פחחות, נזקי תאונה — מטופלים בנפרד עם תמחור פרטני.",
  },
  {
    q: "מה האחריות?",
    a: "{{WARRANTY_TERMS}} — לפרטים מלאים, צרו איתנו קשר.",
  },
];

function FaqRow({ q, a, idx, openIdx, setOpen }: { q: string; a: string; idx: number; openIdx: number | null; setOpen: (i: number | null) => void }) {
  const isOpen = openIdx === idx;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: idx * 0.04 }}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={() => setOpen(isOpen ? null : idx)}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          padding: "26px 0",
          background: "transparent",
          border: "none",
          textAlign: "right",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          color: "white",
          fontFamily: "inherit",
          fontSize: "clamp(17px, 1.8vw, 21px)",
          fontWeight: 700,
          lineHeight: 1.4,
        }}
      >
        <span>{q}</span>
        <span
          aria-hidden="true"
          style={{
            fontSize: 24,
            color: "var(--accent)",
            flexShrink: 0,
            transform: isOpen ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.25s ease",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          maxHeight: isOpen ? 400 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p
          style={{
            fontSize: 16,
            color: "var(--text-muted)",
            lineHeight: 1.75,
            paddingBottom: 26,
            maxWidth: 820,
          }}
        >
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HomepageFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "var(--bg)",
      }}
    >
      <FAQPageSchema questions={HOMEPAGE_FAQS} />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, maxWidth: 920, margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48, textAlign: "center" }}
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
            שאלות נפוצות
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
            6 התשובות החשובות.
          </h2>
        </motion.div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {HOMEPAGE_FAQS.map((f, i) => (
            <FaqRow
              key={i}
              q={f.q}
              a={f.a}
              idx={i}
              openIdx={openIdx}
              setOpen={setOpenIdx}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link
            href="/faq"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            עוד שאלות? עמוד שאלות נפוצות מלא ←
          </Link>
        </div>
      </div>
    </section>
  );
}
