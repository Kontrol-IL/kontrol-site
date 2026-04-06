"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import HeroBackground from "@/components/ui/hero-background";
import SectionBackground from "@/components/ui/section-background";
import HeroPrice from "@/components/ui/hero-price";
import { TypeOnScroll } from "@/components/ui/type-on-scroll";
import ScrollLine from "@/components/ui/scroll-line";
import { MotionFooter } from "@/components/ui/motion-footer";

/* ── SERVICES DATA ── */
const services = [
  { name: "צביעה מלאה של הרכב", img: "/images/BETTER/full-painting.png" },
  { name: "צביעה פרטנית", img: "/images/BETTER/detailed-painting.png" },
  { name: "צביעת קליפרים", img: "/images/BETTER/caliper-painting.png" },
  { name: "צביעת חישוקים", img: "/images/BETTER/wheel-painting.png" },
  { name: "צביעה מקומית", img: "/images/BETTER/local-painting.png" },
];

const benefits = [
  { title: "התאמת צבע 100%", text: "בחירת הפלטה המדויקת על ידי המומחים שלנו מבטלת כל הבדל בהשוואה לציפוי הקיים של הרכב." },
  { title: "שירות מועדון מס׳ 1", text: "עשרות יצרני צבע מוסמכים סומכים עלינו עם הרכבים שלהם. אנחנו גם מוכרים כמתקן שירות מותג." },
  { title: "בדיוק לפי התקציב שלך", text: "אנו מציעים מספר אפשרויות מחיר גם לאותו סוג עבודה, אז אל תדאגו לגבי העלויות." },
  { title: "חברים לא יראו הבדל", text: "על פי הסטטיסטיקה, ב-8 מתוך 10 מקרים הלקוחות עצמם לא רואים שינויים בגוף הרכב לאחר התיקון." },
];


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
  const [menuOpen, setMenuOpen] = useState(false);
  const { heroRef, cardRef, headerRef } = useHeroScroll();
  const aboutFlare = useMouseFlare("75%", "50%");
  const benefitsFlare = useMouseFlare("70%", "40%");

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container">
          <a href="#" className="nav-logo"><img src="/kontrol-white.png" alt="Kontrol" style={{ height: "24px", width: "auto" }} /></a>
          <ul className="nav-links">
            <li><a href="#">ראשי</a></li>
            <li><a href="#">שירותים</a></li>
            <li><a href="#">חנות</a></li>
            <li><a href="#">אודות</a></li>
            <li><a href="#">צור קשר</a></li>
          </ul>
          <div className="nav-right">
            <a href="#" className="nav-cb">התקשרו אלינו</a>
            <button
              className="nav-hamburger"
              aria-label="תפריט"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        <a href="#" onClick={closeMenu}>ראשי</a>
        <a href="#" onClick={closeMenu}>שירותים</a>
        <a href="#" onClick={closeMenu}>בלוג</a>
        <a href="#" onClick={closeMenu}>אודות</a>
        <a href="#" onClick={closeMenu}>צור קשר</a>
      </div>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <HeroBackground />
        <div className="hero-glow" />
        <div className="hero-perspective">
          <div className="hero-header" ref={headerRef}>
            <h1>הפכו את הצבע</h1>
            <div className="hero-title-big">למקסימום</div>
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

      {/* MAIN CONTENT (single shared background) */}
      <div className="relative overflow-hidden" ref={aboutFlare.sectionRef as React.RefObject<HTMLDivElement>}>
        <SectionBackground />
        <ScrollLine />
        <div className="about-flare" ref={aboutFlare.flareRef} />

        {/* ABOUT */}
        <section className="about" style={{ overflow: "visible" }}>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="about-grid">
              <h2>
                {"נמאס לנו מעבודות 🎨 "}
                <Typewriter
                  text={[
                    "שהיו גרועות.",
                    "שהיו יקרות.",
                    "שלא היה אכפת להם.",
                  ]}
                  speed={70}
                  className="text-[var(--accent)]"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar="_"
                />
              </h2>
              <div className="about-text">
                <p>המאמצים שלנו מתמקדים בחידוד מיומנויות מתמיד ובשיפור טכניקות תיקון וצביעת הרכב. אנו יכולים להבטיח בביטחון ללקוחות איכות עבודה, הן מבחינת המקצועיות והן מבחינת המחירים.</p>
                <p>תקנים גבוהים של איכות אפשרו לנו לקבל תעודות למסחר בתיקוני רכב, העומדים בסטנדרטים של מצוינות, וכבונוס ללקוחות — חוויה בלתי תלויה.</p>
                <a href="#" className="btn btn--blue">אודות החברה</a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <TypeOnScroll tag="h2" className="services-title" speed={30} text="סוגי צביעת רכב" />
            <div className="services-grid">
              {services.map((s) => (
                <div className="scard" key={s.name}>
                  <TypeOnScroll tag="span" className="scard-name" speed={25} text={s.name} />
                  <a href="#" className="scard-link">למידע נוסף</a>
                  <div className="scard-img">
                    <img src={s.img} alt={s.name} style={mirrorStyle} />
                  </div>
                </div>
              ))}
              <div className="scard--cta">
                <h3>השאירו פנייה לייעוץ חינם</h3>
                <a href="#" className="btn btn--white">התקשרו אלינו</a>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <div className="benefits-cta-wrapper" ref={benefitsFlare.sectionRef as React.RefObject<HTMLDivElement>}>
          <div className="benefits-cta-flare" ref={benefitsFlare.flareRef} />
          <section className="benefits">
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
              <div className="benefits-layout">
                <div className="benefits-intro">
                  <TypeOnScroll tag="h2" speed={30} text="אנחנו יכולים מה שאחרים לא!" />
                  <TypeOnScroll tag="p" speed={12} text="אנו מטפלים בכל בעיה ומבטיחים יעילות מרבית עבורכם. אנו שואפים להפוך את השירות לנוח ונגיש ללקוח." />
                </div>
                <div className="benefits-cards">
                  {benefits.map((b) => (
                    <div className="bcard" key={b.title}>
                      <TypeOnScroll tag="h3" speed={25} text={b.title} />
                      <TypeOnScroll tag="p" speed={10} text={b.text} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* MOTION FOOTER */}
      <MotionFooter />
    </>
  );
}
