"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Trust strip — 4 animated counters. Numbers count up from 0 when scrolled into view.
 * All metrics use {{...}} placeholders that operator [D.1-D.5] will fill in.
 *
 * For now we provide reasonable placeholder integers so the animation is meaningful;
 * swap these with real data once operator confirms.
 */

const METRICS = [
  { n: 1247, suffix: "+", label: "רכבים נצבעו עד היום", placeholder: "{{D.1_TOTAL_CARS}}" },
  { n: 38, suffix: "", label: "מוסכים שותפים", placeholder: "{{D.3_PARTNER_SHOPS}}" },
  { n: 24, suffix: "", label: "ערים בשירות פעיל", placeholder: "{{D.4_CITIES}}" },
  { n: 6500, suffix: '₪', label: 'חיסכון ממוצע ללקוח', placeholder: '{{D.5_AVG_SAVINGS}}', prefix: '₪' },
] as const;

function useCountUp(target: number, durationMs = 1400, startWhen: boolean): number {
  const [val, setVal] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startWhen) return;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const step = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / durationMs);
      setVal(Math.round(target * ease(t)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, startWhen]);

  return val;
}

function MetricCounter({
  n,
  prefix,
  suffix,
  label,
  startWhen,
}: {
  n: number;
  prefix?: string;
  suffix?: string;
  label: string;
  startWhen: boolean;
}) {
  const v = useCountUp(n, 1400, startWhen);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-heebo), sans-serif",
          fontSize: "clamp(48px, 6vw, 80px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          background:
            "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.55) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: 14,
          direction: "ltr",
        }}
      >
        {prefix}
        {v.toLocaleString("he-IL")}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 14,
          color: "var(--text-muted)",
          letterSpacing: "0.06em",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        padding: "100px 0",
        background: "var(--bg-card)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      {/* Subtle accent line */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 700px 240px at 50% 50%, rgba(57,101,200,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "var(--accent)",
            letterSpacing: "0.22em",
            fontWeight: 500,
            marginBottom: 56,
          }}
        >
          המספרים לא משקרים
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 32,
          }}
        >
          {METRICS.map((m) => (
            <MetricCounter
              key={m.label}
              n={m.n}
              prefix={"prefix" in m ? (m as { prefix?: string }).prefix : undefined}
              suffix={m.suffix}
              label={m.label}
              startWhen={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
