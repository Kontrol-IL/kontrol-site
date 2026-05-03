import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { HowToSchema } from "@/components/schema/HowTo";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";

export const metadata: Metadata = {
  title: "מחיר סיטונאי לצביעת רכב — איך זה עובד",
  description:
    "המנגנון מאחורי המחיר: איך אנחנו ממלאים שעות תנור פנויות אצל מוסכי צבע מובילים ומעבירים את החיסכון אליכם. ₪3,490 + מע\"מ.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    n: "01",
    title: "המוסך משלם על התנור גם כשהוא לא עובד.",
    body: "תנור צבע הוא הציוד היקר ביותר במוסך. שכר דירה, חשמל, פחת, שכר טכנאים — הכל ממשיך לרוץ גם בשעות שאף רכב לא צבוע. בפועל רוב התנורים בארץ מנוצלים פחות מ־50% מזמן הפעילות. השעות האלה הן הפסד נטו.",
  },
  {
    n: "02",
    title: "אנחנו מזהים את החלונות הפנויים בזמן אמת.",
    body: "התקנו אצל מוסכי שותפים מערכת שמדווחת לנו על שעות התנור הפנויות. אנחנו לא חושפים את הפרטים הטכניים — מה שחשוב לדעת זה שיש לנו תמונה מלאה של הקיבולת הפנויה ברגע נתון, בכל הארץ.",
  },
  {
    n: "03",
    title: "המוסכים מקבלים מאיתנו רק עבודות שממלאות חלונות ריקים.",
    body: 'מבחינת המוסך, זו הכנסה על שעה שהיתה ריקה ממילא. הוא לא מוכן להציע את המחיר הזה ללקוח רגיל מהרחוב — זה ירס לו את התמחור הקמעונאי הרגיל (₪7,000–₪15,000). אבל למלא חלון ריק דרכנו? זה רווח נקי.',
  },
  {
    n: "04",
    title: "אתם משלמים מחיר סיטונאי על אותה איכות.",
    body: 'אותם מוסכים שצובעים רכבים ב־₪10,000 לסוכנויות וחברות ביטוח — הם אלה שצובעים את הרכב שלכם. אותו תנור, אותו חומר, אותם טכנאים. ההבדל היחיד הוא שהשעה הזאת היתה ריקה — ואת הארגון של זה אנחנו לוקחים על עצמנו.',
  },
  {
    n: "05",
    title: "האיכות נשמרת כי המוסכים שלנו לא חד־פעמיים.",
    body: "אנחנו עובדים רק עם מוסכים בעלי שם, ביחסים ארוכי טווח, עם עבודות מאומתות. רכב שלא חוזר באיכות שאנחנו מצפים מתוקן על חשבון המוסך. הכלל הזה יושב בלב ההסכם.",
  },
];

export default function HowItWorks() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "איך זה עובד" },
      ]}
    >
      <HowToSchema
        name="כיצד עובד מודל המחיר הסיטונאי של Kontrol"
        description="חמישה שלבים: מחוסר היעילות במוסך, דרך זיהוי החלון הפנוי, ועד למחיר סיטונאי לאזרח."
        steps={STEPS.map((s) => ({ name: s.title, text: s.body }))}
      />
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "איך זה עובד", url: "/how-it-works" },
        ]}
      />
      <SubSection
        kicker="המנגנון"
        title="למה ₪3,490 זה לא הנחה — זה ארביטראז'."
        intro="המחיר שלנו נמוך כי אנחנו לא משלמים על אותו דבר שמחייב מוסכים אחרים לגבות ₪7,000–₪15,000. הנה איך זה עובד מאחורי הקלעים — ולמה זה לא עומד בסתירה לאיכות."
      />

      {STEPS.map((s) => (
        <article
          key={s.n}
          style={{
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "36px 32px",
            marginBottom: 20,
            display: "grid",
            gridTemplateColumns: "minmax(80px, 110px) 1fr",
            gap: 28,
            alignItems: "start",
            boxShadow:
              "0 0 20px rgba(57,101,200,0.10), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <span
            style={{
              fontSize: "clamp(48px, 5vw, 72px)",
              color: "var(--accent)",
              opacity: 0.7,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "0.05em",
            }}
          >
            {s.n}
          </span>
          <div>
            <h3
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(16px, 1.3vw, 19px)",
                color: "var(--text-muted)",
                lineHeight: 1.75,
              }}
            >
              {s.body}
            </p>
          </div>
        </article>
      ))}

      <SubSection kicker="האנלוגיה">
        <p
          style={{
            fontSize: "clamp(20px, 2.4vw, 30px)",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.92)",
            maxWidth: 880,
          }}
        >
          חשמל בשעות שפל זול יותר. חדרי מלון של הרגע האחרון זולים יותר. סרט באמצע
          השבוע זול יותר.{" "}
          <span style={{ color: "var(--accent)" }}>
            שעת תנור פנויה אצל מוסך זול יותר.
          </span>{" "}
          אותה איכות. רק תזמון אחר.
        </p>
      </SubSection>

      <SubSection>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            רוצים לראות אם יש לנו חלון פנוי לרכב שלכם?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 26, fontSize: 17 }}>
            6 שאלות. שתי דקות. תשובה בוואטסאפ.
          </p>
          <Link href="/book" className="btn btn--blue">
            התחילו את השאלון
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
