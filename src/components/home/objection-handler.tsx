"use client";

import { motion } from "framer-motion";

/**
 * "Why this isn't a scam" objection handler — short section that names the
 * mechanism and uses one analogy. Per brief Phase 1 §6.
 */

export function ObjectionHandler() {
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
          style={{
            maxWidth: 880,
            margin: "0 auto",
            textAlign: "center",
          }}
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
            התלבטות הגיונית
          </p>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "normal",
              marginBottom: 26,
            }}
          >
            למה זה לא נראה אמיתי בהתחלה.
          </h2>

          <p
            style={{
              fontSize: "clamp(18px, 1.6vw, 22px)",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            בכל פעם שמשהו עולה חצי ממה שאתם מכירים, ההיגיון אומר שיש פה תרגיל.
            אנחנו מבינים את החשד. אז נסביר את זה במשפט אחד:
          </p>

          <p
            style={{
              fontSize: "clamp(20px, 2.2vw, 28px)",
              color: "white",
              lineHeight: 1.5,
              fontWeight: 600,
              marginBottom: 36,
              padding: "28px 32px",
              borderRadius: 16,
              background:
                "linear-gradient(180deg, rgba(57,101,200,0.12) 0%, rgba(57,101,200,0.04) 100%)",
              border: "1px solid rgba(57,101,200,0.20)",
            }}
          >
            המוסך לא נותן לכם הנחה — הוא ממלא שעה שבכל מקרה היתה ריקה. ההכנסה
            הזו <span style={{ color: "var(--accent)" }}>נטו רווח עבורו.</span>
            <br />
            אנחנו פשוט הצינור שמחבר אותו אליכם.
          </p>

          <p
            style={{
              fontSize: "clamp(15px, 1.3vw, 18px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            זה אותו עיקרון של <strong style={{ color: "white" }}>חשמל בשעות שפל</strong> —
            התשתית עולה אותו דבר 24/7, אז הזולים יותר הם השעות שאף אחד לא משתמש.
            או <strong style={{ color: "white" }}>HotelTonight</strong> — מלון שעמד ריק
            עד שמונה בערב מעדיף למלא את החדר בחצי מחיר מאשר להישאר עם מפתח ריק.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
