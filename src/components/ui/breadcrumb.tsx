"use client";

import Link from "next/link";

export interface BreadcrumbCrumb {
  name: string;
  href?: string; // last crumb has no href (it's the current page)
}

interface BreadcrumbProps {
  /** First item is always the home anchor `צביעת רכב` per brief 6.13. */
  items: BreadcrumbCrumb[];
}

/**
 * Visual breadcrumb. Use alongside <BreadcrumbListSchema> for the JSON-LD.
 * Renders RTL — last crumb is the current page (no link, dimmer color).
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="פירורי לחם"
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 8,
        marginBottom: 28,
        fontSize: 13,
        color: "var(--text-muted)",
        direction: "rtl",
      }}
    >
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {c.href && !last ? (
              <Link
                href={c.href}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {c.name}
              </Link>
            ) : (
              <span style={{ color: "rgba(255,255,255,0.45)" }} aria-current={last ? "page" : undefined}>
                {c.name}
              </span>
            )}
            {!last && (
              <span aria-hidden="true" style={{ opacity: 0.5 }}>
                ›
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
