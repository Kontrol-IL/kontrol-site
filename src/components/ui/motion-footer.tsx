"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Magnetic Button ── */
const MagneticButton = React.forwardRef<
  HTMLElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: React.ElementType }
>(({ className, children, as: Component = "a", ...props }, forwardedRef) => {
  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = localRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.35, y: y * 0.35, scale: 1.05, ease: "power2.out", duration: 0.4 });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 });
      };
      el.addEventListener("mousemove", onMove as any);
      el.addEventListener("mouseleave", onLeave);
      return () => { el.removeEventListener("mousemove", onMove as any); el.removeEventListener("mouseleave", onLeave); };
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <Component
      ref={(node: HTMLElement) => {
        (localRef as any).current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) (forwardedRef as any).current = node;
      }}
      className={`cursor-pointer ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
});
MagneticButton.displayName = "MagneticButton";

/* ── Marquee Items ── */
const marqueeItems = ["איסוף ומשלוח עד הבית", "פוליש חינם", "ניקוי פנימי חינם"];

const MarqueeContent = () => (
  <>
    {[...Array(12)].map((_, i) =>
      marqueeItems.map((item) => (
        <React.Fragment key={`${i}-${item}`}>
          <span>{item}</span>
          <span className="mf-marquee-diamond">✦</span>
        </React.Fragment>
      ))
    )}
  </>
);

/* ── WhatsApp & Phone Icons ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="#25D366" style={{ width: 22, height: 22, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22, flexShrink: 0 }}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

/* ── MAIN COMPONENT ── */
export function MotionFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Giant text parallax
      gsap.fromTo(giantRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 }
        }
      );
      // Staggered content reveal
      gsap.fromTo([headingRef.current, linksRef.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 50%", end: "bottom bottom", scrub: 1 }
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="mf-reveal">
      <footer className="mfooter">
        {/* Aurora + Grid + Giant Text */}
        <div className="mf-aurora" />
        <div className="mf-grid-bg" />
        <div ref={giantRef} className="mf-giant" style={{ direction: "ltr" }}>KONTROL</div>

        {/* Diagonal Marquee */}
        <div className="mf-marquee">
          <div className="mf-marquee-track">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>

        {/* Center CTA */}
        <div className="mf-cta">
          <h2 ref={headingRef}>מוכנים להתחיל?</h2>

          <div ref={linksRef} className="mf-links-wrap">
            {/* Primary pills */}
            <div className="mf-actions">
              <MagneticButton href="https://wa.me/972527306191" className="mf-pill mf-pill--wa">
                <WhatsAppIcon />
                שלחו לנו בוואטסאפ
              </MagneticButton>
              <MagneticButton href="tel:0584040744" className="mf-pill mf-pill--phone">
                <PhoneIcon />
                התקשרו אלינו
              </MagneticButton>
            </div>

            {/* Secondary pills */}
            <div className="mf-secondary">
              <MagneticButton href="#" className="mf-pill mf-pill--sm">מדיניות פרטיות</MagneticButton>
              <MagneticButton href="#" className="mf-pill mf-pill--sm">תנאי שימוש</MagneticButton>
              <MagneticButton href="#" className="mf-pill mf-pill--sm">תמיכה</MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mf-bottom">
          <span className="mf-copyright">&copy; Kontrol. כל הזכויות שמורות.</span>
        </div>
      </footer>
    </div>
  );
}
