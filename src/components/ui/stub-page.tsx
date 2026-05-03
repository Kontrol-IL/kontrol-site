"use client";

import Link from "next/link";
import { SubPageLayout, SubSection } from "./sub-page-layout";

interface StubPageProps {
  kicker: string;
  title: string;
  intro: string;
  body: React.ReactNode;
  breadcrumbName: string;
  breadcrumbHref: string;
}

/**
 * Used for content-pending pages (privacy / terms / accessibility / warranty / etc.)
 * Every stub renders consistent layout with a clear "operator pending" notice
 * inside the body so the user knows the content is intentional placeholder.
 */
export function StubPage({
  kicker,
  title,
  intro,
  body,
  breadcrumbName,
  breadcrumbHref,
}: StubPageProps) {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: breadcrumbName },
      ]}
    >
      <SubSection kicker={kicker} title={title} intro={intro} />

      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: 16,
          padding: 36,
          marginBottom: 60,
          border: "1px solid rgba(255,255,255,0.06)",
          fontSize: 16,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {body}
      </div>

      <div style={{ textAlign: "center" }}>
        <Link
          href="/contact"
          style={{
            fontSize: 14,
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          שאלות נוספות? צרו קשר ←
        </Link>
      </div>

      <input type="hidden" data-stub-href={breadcrumbHref} />
    </SubPageLayout>
  );
}
