"use client";

import { Nav } from "./nav";
import SectionBackground from "./section-background";
import { MotionFooter } from "./motion-footer";
import { Breadcrumb, type BreadcrumbCrumb } from "./breadcrumb";

interface SubPageLayoutProps {
  children: React.ReactNode;
  /** Hide the motion footer (used on /book where we don't want footer noise above the form). */
  hideFooter?: boolean;
  /** Visible breadcrumb (must include home anchor `צביעת רכב` first per brief 6.13). */
  breadcrumb?: BreadcrumbCrumb[];
}

export function SubPageLayout({ children, hideFooter = false, breadcrumb }: SubPageLayoutProps) {
  return (
    <>
      <Nav solid />
      <main
        style={{
          position: "relative",
          minHeight: "60vh",
          paddingTop: "120px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        <SectionBackground />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
          {children}
        </div>
      </main>
      {!hideFooter && <MotionFooter />}
    </>
  );
}

/** Standard section block with consistent vertical rhythm. */
export function SubSection({
  children,
  kicker,
  title,
  intro,
}: {
  children?: React.ReactNode;
  kicker?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section style={{ marginBottom: "80px" }}>
      {kicker && (
        <div
          style={{
            fontSize: 13,
            color: "var(--accent)",
            letterSpacing: "0.22em",
            marginBottom: 18,
            fontWeight: 500,
          }}
        >
          {kicker}
        </div>
      )}
      {title && (
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 22,
            letterSpacing: "normal",
          }}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p
          style={{
            fontSize: "clamp(17px, 1.4vw, 21px)",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 760,
            marginBottom: 32,
          }}
        >
          {intro}
        </p>
      )}
      {children}
    </section>
  );
}
