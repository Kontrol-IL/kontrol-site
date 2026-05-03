import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { FAQPageSchema } from "@/components/schema/FAQPage";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";

export const metadata: Metadata = {
  title: "שאלות נפוצות צביעת רכב",
  description: "התשובות לשאלות שכל לקוח שואל לפני שמתקשר. ₪3,490 — איך, למה, מה כלול, מה לא, ומה האחריות.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "₪3,490 על צביעת רכב מלאה? איך זה אפשרי?",
    a: "אנחנו ממלאים שעות תנור פנויות אצל מוסכי צבע מובילים באזור. השעות האלה היו ריקות בכל מקרה — מבחינת המוסך, כל הכנסה עליהן היא תוספת. אנחנו מנתבים את העבודה שלכם לחלון ריק, מקבלים מחיר סיטונאי, ומעבירים אליכם את החיסכון.",
  },
  {
    q: "האיכות באמת אותה איכות?",
    a: "כן. אותם מוסכים שצובעים רכבי סוכנויות וחברות ביטוח ב־₪10,000 — הם אלה שצובעים את הרכב שלכם. אותו תנור, אותו חומר, אותם טכנאים. אנחנו עובדים רק עם מוסכים מאומתים ביחסים ארוכי טווח. רכב שלא חוזר באיכות שאנחנו מצפים מתוקן על חשבון המוסך.",
  },
  {
    q: "מה הקאצ'?",
    a: "האמת? אתם לא בוחרים את היום. הזמינות תלויה במתי יש חלון פנוי במוסך, וזה בדרך כלל {{LEAD_TIME_DAYS}} ימים קדימה. אם אתם צריכים את הרכב מחר אחר הצהריים — אנחנו לא הכתובת.",
  },
  {
    q: "למה המוסכים עצמם לא מציעים את המחיר הזה ישירות?",
    a: 'כי זה ירס להם את התמחור הקמעונאי הרגיל. אם הם יכריזו "₪3,490 לכולם" הלקוחות הקיימים שלהם יפסיקו לשלם ₪10,000. אבל למלא חלון ריק דרך גורם חיצוני (אנחנו) — זו הכנסה נטו על שעה שהיתה אבודה. זה מודל שעובד גם בענפים אחרים: HotelTonight, חשמל בשעות שפל, סרט בחמישי באמצע היום.',
  },
  {
    q: "מה כלול במחיר?",
    a: "צביעה מלאה של הרכב, איסוף ומשלוח עד הבית, ניקוי פנימי וחיצוני, פוליש פנסים. רכבים פרטיים בלבד. תיקוני חלודה, פחחות, נזקי תאונה — מטופלים בנפרד עם תמחור פרטני.",
  },
  {
    q: "מה האחריות?",
    a: "{{WARRANTY_TERMS}} — לפרטים מלאים, צרו איתנו קשר.",
  },
  {
    q: "אני לא באזור המרכז. אפשר?",
    a: "השירות שלנו פעיל בכל הארץ — מהקריות בצפון עד באר שבע בדרום. ה־HQ שלנו באשדוד, ויש לנו רשת מוסכים שותפים בערים מובילות. ענו על השאלון ונחזור עם זמינות מדויקת לאזור שלכם.",
  },
  {
    q: "כמה זמן הרכב יושב אצלכם?",
    a: "תלוי בעבודה. צביעה מלאה לוקחת בדרך כלל 3–5 ימי עבודה, לא כולל יום איסוף ויום החזרה.",
  },
];

export default function FAQPage() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "שאלות ותשובות" },
      ]}
    >
      <FAQPageSchema questions={FAQS} />
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "שאלות ותשובות", url: "/faq" },
        ]}
      />

      <SubSection
        kicker="שאלות ותשובות"
        title="כל מה שמתלבטים עליו לפני שמתקשרים."
      />

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        {FAQS.map((f, i) => (
          <details
            key={i}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "26px 0",
            }}
          >
            <summary
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                fontWeight: 700,
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                color: "white",
              }}
            >
              <span>{f.q}</span>
              <span
                style={{
                  fontSize: 22,
                  color: "var(--accent)",
                  flexShrink: 0,
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p
              style={{
                fontSize: 16,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginTop: 18,
                maxWidth: 820,
              }}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>

      <SubSection>
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: 14 }}>
            עוד שאלה? כתבו לנו.
          </h2>
          <Link
            href="/contact"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            לעמוד צור קשר ←
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
