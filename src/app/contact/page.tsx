import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { ContactPageSchema } from "@/components/schema/ContactPage";
import { LocalBusinessSchema } from "@/components/schema/LocalBusiness";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "טלפון, וואטסאפ, וכל הפרטים. אנחנו זמינים בשעות הפעילות לכל שאלה. שירות בכל הארץ, HQ באשדוד.",
  alternates: { canonical: "/contact" },
};

const WHATSAPP_URL =
  "https://wa.me/972527306191?text=" +
  encodeURIComponent("היי, אני רוצה לשמוע פרטים על צביעת רכב.");

export default function ContactPage() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "צור קשר" },
      ]}
    >
      <ContactPageSchema />
      <LocalBusinessSchema pageUrl="/contact" />
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "צור קשר", url: "/contact" },
        ]}
      />
      <SubSection
        kicker="צור קשר"
        title="דברו איתנו ישירות."
        intro="הדרך הכי מהירה היא וואטסאפ. אם אתם מעדיפים טלפון, אנחנו עונים בשעות הפעילות."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginBottom: 60,
        }}
      >
        <ContactCard kicker="הכי מהיר" title="WhatsApp" value="052-730-6191" href={WHATSAPP_URL} external primary />
        <ContactCard kicker="בטלפון" title="חייגו אלינו" value="058-404-0744" href="tel:0584040744" />
        <ContactCard kicker="במייל" title="כתבו לנו" value="info@kontrolauto.net" href="mailto:info@kontrolauto.net" />
      </div>

      <SubSection>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
            color: "var(--text-muted)",
            fontSize: 15,
            lineHeight: 1.7,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            padding: 36,
          }}
        >
          <Col title="שעות פעילות">{"{{BUSINESS_HOURS}}"}</Col>
          <Col title="אזור שירות">בכל הארץ · HQ באשדוד</Col>
          <Col title="חברה">
            לוחמים בצבע בע&quot;מ
            <br />
            ח.פ. {"{{COMPANY_NUMBER}}"}
            <br />
            {"{{LEGAL_ADDRESS}}"}
          </Col>
          <Col title="משפטי">
            <Link href="/faq" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              שאלות ותשובות
            </Link>
            <br />
            מדיניות פרטיות
            <br />
            תנאי שימוש
          </Col>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        style={{
          fontSize: 13,
          color: "var(--accent)",
          letterSpacing: "0.18em",
          marginBottom: 12,
          fontWeight: 500,
        }}
      >
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

function ContactCard({
  kicker,
  title,
  value,
  href,
  external,
  primary,
}: {
  kicker: string;
  title: string;
  value: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        background: primary ? "var(--accent)" : "var(--bg-card)",
        border: primary ? "none" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 28,
        color: "white",
        textDecoration: "none",
        display: "block",
        boxShadow: primary
          ? "0 0 30px rgba(57,101,200,0.25)"
          : "0 0 20px rgba(57,101,200,0.10), 0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <p
        style={{
          fontSize: 12,
          color: primary ? "rgba(255,255,255,0.75)" : "var(--accent)",
          letterSpacing: "0.22em",
          fontWeight: 500,
          marginBottom: 12,
        }}
      >
        {kicker}
      </p>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 6,
          letterSpacing: "normal",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 17,
          fontWeight: 600,
          opacity: primary ? 0.95 : 0.78,
        }}
      >
        {value}
      </p>
    </a>
  );
}
