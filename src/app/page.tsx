"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Nav } from "@/components/ui/nav";
import HeroBackground from "@/components/ui/hero-background";
import SectionBackground from "@/components/ui/section-background";
import HeroPrice from "@/components/ui/hero-price";
import { TypeOnScroll } from "@/components/ui/type-on-scroll";
import ScrollLine from "@/components/ui/scroll-line";
import { MotionFooter } from "@/components/ui/motion-footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusiness";
import { WhatsIncluded } from "@/components/home/whats-included";
import { MechanismSteps } from "@/components/home/mechanism-steps";
import { TrustStrip } from "@/components/home/trust-strip";
import { ObjectionHandler } from "@/components/home/objection-handler";
import { HomepageFAQ } from "@/components/home/homepage-faq";
import { FinalCta } from "@/components/home/final-cta";

/* ── HOOKS ── */

function useMouseFlare(defaultX: string, defaultY: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const flare = flareRef.current;
    if (!section || !flare) return;

    flare.style.left = defaultX;
    flare.style.top = defaultY;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      flare.style.left = `${e.clientX - rect.left}px`;
      flare.style.top = `${e.clientY - rect.top}px`;
    };
    const onLeave = () => {
      flare.style.left = defaultX;
      flare.style.top = defaultY;
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [defaultX, defaultY]);

  return { sectionRef, flareRef };
}

function useHeroScroll() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    const header = headerRef.current;
    if (!hero || !card || !header) return;

    let isMobile = window.innerWidth <= 768;
    const onResize = () => { isMobile = window.innerWidth <= 768; };
    window.addEventListener("resize", onResize);

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));

      const rotateX = lerp(20, 0, p);
      const scaleStart = isMobile ? 0.95 : 1.05;
      const scale = lerp(scaleStart, 1, p);
      const translateY = lerp(0, -100, p);

      card.style.transform = `rotateX(${rotateX}deg) scale(${scale})`;
      header.style.transform = `translateY(${translateY}px)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { heroRef, cardRef, headerRef };
}

/* ── MIRROR STYLE ── */
const mirrorStyle = { transform: "scaleX(-1)" } as const;

/* ── PAGE ── */
export default function Home() {
  const { heroRef, cardRef, headerRef } = useHeroScroll();

  return (
    <>
      {/* JSON-LD */}
      <LocalBusinessSchema pageUrl="/" />

      {/* NAV */}
      <Nav />

      {/* §1 — HERO (existing 3D perspective + video card + typewriter price) */}
      <section className="hero" ref={heroRef}>
        <HeroBackground />
        <div className="hero-glow" />
        <div className="hero-perspective">
          <div className="hero-header" ref={headerRef}>
            <h1>צבע לרכב</h1>
            <div className="hero-title-big">במחיר סיטונאי</div>
          </div>
          <div className="hero-card" ref={cardRef}>
            <div className="hero-card-inner">
              <video
                src="/hero-video.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", ...mirrorStyle }}
              />
            </div>
          </div>
          <HeroPrice />
        </div>
      </section>

      {/* §2 — WHAT'S INCLUDED */}
      <WhatsIncluded />

      {/* §3 — MECHANISM 3-STEP EXPLAINER */}
      <MechanismSteps />

      {/* §4 — TRUST STRIP (animated counters) */}
      <TrustStrip />

      {/* §5 — WHY THIS ISN'T A SCAM (objection handler with analogy) */}
      <ObjectionHandler />

      {/* §7 — HOMEPAGE FAQ (top 6 from /faq + FAQPage schema) */}
      <HomepageFAQ />

      {/* §8 — FINAL CTA */}
      <FinalCta />

      {/* §9 — MOTION FOOTER (existing gsap magnetic pills + diagonal marquee + giant text) */}
      <MotionFooter />
    </>
  );
}
