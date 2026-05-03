"use client";

import Link from "next/link";
import { SubPageLayout, SubSection } from "../ui/sub-page-layout";
import { ServiceSchema } from "../schema/Service";
import { BreadcrumbListSchema } from "../schema/BreadcrumbList";
import { FAQPageSchema } from "../schema/FAQPage";
import type { InsuranceEntry } from "@/data/insurance";

interface InsurancePageShellProps {
  entry: InsuranceEntry;
}

export function InsurancePageShell({ entry }: InsurancePageShellProps) {
  const pageUrl = `/insurance/${entry.slug}`;
  const faq = [
    {
      q: `האם Kontrol הוא מוסך הסדר רשמי של ${entry.name}?`,
      a: `לא. אנחנו לא מוסך הסדר של ${entry.name}. אבל אנחנו עובדים עם אותם מוסכי צבע שמטפלים בתביעות ${entry.name}, ולכן הציוד והאיכות זהים. ההבדל הוא במודל התמחור: אצלנו אתם מקבלים מחיר סיטונאי גם בלי תהליך תביעה.`,
    },
    {
      q: `האם הביטוח של ${entry.name} מכסה צביעה אצלכם?`,
      a: `אם הביטוח שלכם הוא מקיף וכולל תיקוני צבע אחרי תאונה — בחלק מהמקרים, כן. שלחו לנו את פרטי התביעה והצעת מחיר ממוסך הסדר רשמי, ואנחנו נציג הצעת מחיר תחרותית. ${entry.name} בדרך כלל מאשרת מוסך עצמאי אם המחיר נמוך משמעותית.`,
    },
    {
      q: `אם אני לא מגיש תביעה, יש לי הנחה?`,
      a: `המחיר שלנו (₪3,490 + מע"מ לצביעה מלאה) הוא אותו מחיר בין אם יש תביעה ובין אם לא. במקרים רבים, גם עם השתתפות עצמית, התשלום אצלנו ישיר יוצא נמוך יותר מתביעה דרך הביטוח.`,
    },
    {
      q: `כמה זמן לוקח לעומת מוסך הסדר?`,
      a: `מוסכי הסדר רשמיים יכולים להמתין שבועות לאישור עבודה. אצלנו, אם החלטתם לשלם ישירות, העבודה יכולה להתחיל תוך ימים בודדים. שירות איסוף ומשלוח חינם, בכל הארץ.`,
    },
  ];

  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "ביטוח", href: "/insurance" },
        { name: entry.name },
      ]}
    >
      <ServiceSchema
        name={`תיקוני צבע ופחחות — ${entry.name}`}
        description={entry.intro}
        pageUrl={pageUrl}
      />
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "ביטוח", url: "/insurance" },
          { name: entry.name, url: pageUrl },
        ]}
      />
      <FAQPageSchema questions={faq} />

      <SubSection kicker={`ביטוח · ${entry.name}`} title={entry.tagline} intro={entry.intro}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: 14,
            flexWrap: "wrap",
            marginTop: 8,
          }}
        >
          <Link href="/book" className="btn btn--blue">
            התחילו את השאלון
          </Link>
          <a
            href="https://wa.me/972527306191"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              padding: "12px 22px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            דברו בוואטסאפ
          </a>
        </div>
      </SubSection>

      <SubSection title="איך אנחנו עובדים עם תביעות ביטוח">
        <div
          style={{
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "32px 28px",
            fontSize: 16,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>תרחיש 1 — תביעה רשמית</h3>
          <p style={{ marginBottom: 22 }}>
            אם הנזק קרה בתאונה ויש לכם פוליסה מקיפה ב{entry.name}: שלחו לנו את הצעת המחיר ממוסך
            הסדר. אנחנו נחזיר הצעה תחרותית. אם {entry.name} מאשרת — מבצעים את העבודה. אנחנו
            עוזרים בכל הניירת.
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>תרחיש 2 — תשלום ישיר</h3>
          <p style={{ marginBottom: 22 }}>
            אם הנזק לא תאונתי (דהייה, שריטות חניה, צבע מקולף) — הביטוח לא מכסה. במקרה זה, התשלום
            הישיר אצלנו (₪3,490 + מע&quot;מ) הוא הפתרון הזול ביותר בשוק.
          </p>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>תרחיש 3 — השתתפות עצמית גבוהה</h3>
          <p>
            לפעמים ההשתתפות העצמית של תביעה ב{entry.name} גבוהה מהמחיר שלנו. במקרים האלה, גם אם
            הנזק תאונתי, התשלום הישיר אצלנו משתלם יותר מהליך תביעה.
          </p>
        </div>
      </SubSection>

      <SubSection title="שאלות נפוצות">
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {faq.map((f, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "22px 0",
              }}
            >
              <summary
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span>{f.q}</span>
                <span style={{ fontSize: 22, color: "var(--accent)", fontWeight: 700 }}>+</span>
              </summary>
              <p
                style={{
                  fontSize: 15.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginTop: 14,
                  maxWidth: 820,
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </SubSection>

      <SubSection>
        <div style={{ textAlign: "center" }}>
          <Link href="/book" className="btn btn--blue">
            התחילו את השאלון
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
