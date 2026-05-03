import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";
import { INSURANCES } from "@/data/insurance";

export const metadata: Metadata = {
  title: "מוסכי הסדר ביטוח רכב",
  description:
    "Kontrol עובד עם לקוחות של כל חברות הביטוח הגדולות בישראל — מגדל, הפניקס, הראל, מנורה, ועוד. תיקוני צבע ופחחות במחיר סיטונאי.",
  alternates: { canonical: "/insurance" },
};

export default function InsuranceHub() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "ביטוח" },
      ]}
    >
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "ביטוח", url: "/insurance" },
        ]}
      />

      <SubSection
        kicker="ביטוח רכב"
        title="עובדים עם כל חברות הביטוח."
        intro="Kontrol הוא לא מוסך הסדר רשמי של אף חברת ביטוח — אבל אנחנו עובדים עם אותם מוסכי צבע שמטפלים בתביעות שלהן. ההבדל: אנחנו מציעים את אותם מחירים סיטונאיים גם ללקוחות שמשלמים ישירות, בלי תהליך תביעה."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 60,
        }}
      >
        {INSURANCES.map((i) => (
          <Link
            key={i.slug}
            href={`/insurance/${i.slug}`}
            style={{
              background: "var(--bg-card)",
              borderRadius: 14,
              padding: 24,
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "block",
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, letterSpacing: "normal" }}>
              {i.name}
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }}>
              {i.tagline}
            </p>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
              לפרטים על {i.name} ←
            </span>
          </Link>
        ))}
      </div>

      <SubSection>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 28,
            color: "var(--text-muted)",
            fontSize: 15,
            lineHeight: 1.75,
          }}
        >
          <strong style={{ color: "white", display: "block", marginBottom: 10 }}>הערה משפטית</strong>
          Kontrol אינה מוסך הסדר רשמי של חברות הביטוח המוזכרות באתר. אנחנו עובדים עם רשת מוסכים
          שותפים שלעיתים מטפלים בתביעות של אותן חברות. אזכורי שמות חברות הביטוח באתר נועדו לסייע
          ללקוחות שמחפשים אלטרנטיבה למוסכי הסדר רשמיים, ואינם מהווים שיתוף פעולה רשמי עם החברות.
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
