"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

interface NavProps {
  /** When true, makes the nav background solid for sub-pages (homepage uses absolute/transparent). */
  solid?: boolean;
}

const NAV_ITEMS = [
  { href: "/services", label: "שירותים" },
  { href: "/how-it-works", label: "איך זה עובד" },
  { href: "/branches", label: "אזור שירות" },
  { href: "/gallery", label: "גלריה" },
  { href: "/blog", label: "בלוג" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export function Nav({ solid = false }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        className="nav"
        style={
          solid
            ? {
                position: "sticky",
                background: "rgba(28,28,28,0.85)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }
            : undefined
        }
      >
        <div className="container">
          <Link href="/" className="nav-logo">
            <img
              src="/kontrol-white.png"
              alt="Kontrol"
              style={{ height: "24px", width: "auto" }}
            />
          </Link>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <Link href="/book" className="nav-cb">
              קבעו תור
            </Link>
            <button
              className="nav-hamburger"
              aria-label="תפריט"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Link href="/book" onClick={closeMenu}>
          קבעו תור
        </Link>
      </div>
    </>
  );
}
