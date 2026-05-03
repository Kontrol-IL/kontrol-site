"use client";

import { useEffect, useState } from "react";

const LINE1 = "במחיר של";
const LINE2 = "רק ₪3,490";
const COMBINED = LINE1 + LINE2;
const SPEED = 70;

export default function HeroPrice() {
  const [charIndex, setCharIndex] = useState(0);
  const [showUnderline, setShowUnderline] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (charIndex >= COMBINED.length) {
      const t = setTimeout(() => setShowUnderline(true), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCharIndex((i) => i + 1), SPEED);
    return () => clearTimeout(t);
  }, [charIndex, started]);

  const doneTyping = charIndex >= COMBINED.length;

  // Split into two lines based on how many chars typed
  const line1End = Math.min(charIndex, LINE1.length);
  const line2End = Math.max(0, charIndex - LINE1.length);
  const displayedLine1 = LINE1.slice(0, line1End);
  const displayedLine2 = LINE2.slice(0, line2End);

  // Find "₪3,490" portion within line2 for underline
  const priceStart = LINE2.indexOf("₪3,490");
  const priceInLine2 = line2End > priceStart ? LINE2.slice(priceStart, line2End) : "";

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "1rem",
        position: "relative",
        zIndex: 2,
        fontFamily: "var(--font-heebo), 'Heebo', sans-serif",
        fontWeight: 700,
        letterSpacing: "normal",
        color: "#FFFFFF",
        lineHeight: 1.2,
        padding: "1rem 0",
        direction: "rtl",
      }}
    >
      {/* Line 1 */}
      <div style={{ fontSize: "clamp(32px, 6vw, 48px)", opacity: 0.8 }}>
        {displayedLine1}
        {charIndex < LINE1.length && charIndex > 0 && (
          <span style={{ animation: "cursor-blink 0.6s step-end infinite" }}>|</span>
        )}
      </div>
      {/* Line 2 — bigger */}
      {line2End > 0 && (
        <div style={{ fontSize: "clamp(56px, 12vw, 80px)", marginTop: "0.1em" }}>
          {LINE2.slice(0, priceStart)}
          {line2End > priceStart && (
            <span style={{ position: "relative", display: "inline-block" }}>
              {priceInLine2}
              {showUnderline && priceInLine2.length > 0 && (
                <svg
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "-4px",
                    width: "calc(100% + 8px)",
                    height: "12px",
                    overflow: "visible",
                  }}
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C 30 3, 60 10, 100 6 S 170 9, 198 5"
                    fill="none"
                    stroke="#3965C8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    style={{ animation: "draw-underline 0.6s ease-out forwards" }}
                  />
                </svg>
              )}
            </span>
          )}
          {!doneTyping && charIndex >= LINE1.length && (
            <span style={{ animation: "cursor-blink 0.6s step-end infinite" }}>|</span>
          )}
        </div>
      )}

      {/* + מע"מ subtitle, fades in after underline draws */}
      {showUnderline && (
        <div
          style={{
            fontSize: "clamp(14px, 1.4vw, 18px)",
            fontWeight: 400,
            opacity: 0.7,
            marginTop: "0.6em",
            letterSpacing: "0.04em",
            animation: "fade-in-up 0.5s ease-out forwards",
          }}
        >
          + מע&quot;מ · בכל הארץ · HQ באשדוד
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 0.7; transform: translateY(0); }
        }
        @keyframes draw-underline {
          to { stroke-dashoffset: 0; }
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
