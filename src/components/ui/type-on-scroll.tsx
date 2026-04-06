"use client";

import { useEffect, useRef, useState } from "react";

interface TypeOnScrollProps {
  text: string;
  speed?: number;
  className?: string;
  tag?: "span" | "p" | "h2" | "h3";
}

export function TypeOnScroll({
  text,
  speed = 25,
  className = "",
  tag: Tag = "span",
}: TypeOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Trigger when element enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Type out characters
  useEffect(() => {
    if (!started || charIndex >= text.length) return;
    const t = setTimeout(() => setCharIndex((i) => i + 1), speed);
    return () => clearTimeout(t);
  }, [started, charIndex, text, speed]);

  return (
    <Tag ref={ref as any} className={className}>
      {text.slice(0, charIndex)}
      {started && charIndex < text.length && (
        <span style={{ opacity: 0.6 }}>|</span>
      )}
      {/* Invisible full text for layout stability */}
      <span style={{ visibility: "hidden", position: "absolute" }}>{text}</span>
    </Tag>
  );
}
