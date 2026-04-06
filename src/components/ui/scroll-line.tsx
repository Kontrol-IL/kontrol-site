"use client";

import { useEffect, useRef } from "react";

const LINES = [
  {
    d: "M 950 30 L 950 200 L 900 250 L 200 250 L 100 300 L 100 700 L 150 750 L 850 750 L 900 800 L 900 1600 L 850 1650 L 200 1650 L 100 1700 L 100 2200 L 150 2250 L 900 2250 L 950 2300 L 950 2900",
    width: 4,
  },
  {
    d: "M 50 100 L 50 500 L 100 550 L 500 550 L 550 600 L 550 1100 L 500 1150 L 100 1150 L 50 1200 L 50 1900 L 100 1950 L 700 1950 L 750 2000 L 750 2800",
    width: 3,
  },
  {
    d: "M 800 150 L 800 450 L 750 500 L 350 500 L 300 550 L 300 1000 L 350 1050 L 700 1050 L 750 1100 L 750 1500 L 700 1550 L 250 1550 L 200 1600 L 200 2100 L 250 2150 L 600 2150 L 650 2200 L 650 2700",
    width: 2.5,
  },
  {
    d: "M 500 0 L 500 350 L 450 400 L 150 400 L 100 450 L 100 900 L 150 950 L 600 950 L 650 1000 L 650 1400 L 600 1450 L 300 1450 L 250 1500 L 250 2000 L 300 2050 L 800 2050 L 850 2100 L 850 2950",
    width: 2,
  },
];

export default function ScrollLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    if (!svg || paths.length === 0) return;

    const lengths = paths.map((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      return len;
    });

    const onScroll = () => {
      const parent = svg.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const scrolled = -rect.top;
      const viewable = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / viewable));

      paths.forEach((p, i) => {
        p.style.strokeDashoffset = `${lengths[i] * (1 - progress)}`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      preserveAspectRatio="none"
      viewBox="0 0 1000 3000"
      fill="none"
    >
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3965C8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {LINES.map((line, i) => (
        <path
          key={i}
          ref={(el) => { pathRefs.current[i] = el; }}
          d={line.d}
          stroke="url(#line-grad)"
          strokeWidth={line.width}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.25"
        />
      ))}
    </svg>
  );
}
