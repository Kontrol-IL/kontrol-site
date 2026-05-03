import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BreadcrumbListSchema } from "@/components/schema/BreadcrumbList";

export const metadata: Metadata = {
  title: "צביעת רכב במחיר סיטונאי",
  description:
    "ההסבר המלא: מה זה מחיר סיטונאי לצביעת רכב, איך זה אפשרי, ומה ההבדל ממחיר רגיל. ₪3,490 + מע\"מ.",
  alternates: { canonical: "/wholesale-pricing" },
};

export default function WholesalePricing() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "מחיר סיטונאי" },
      ]}
    >
      <BreadcrumbListSchema
        items={[
          { name: "צביעת רכב", url: "/" },
          { name: "מחיר סיטונאי לצביעת רכב", url: "/wholesale-pricing" },
        ]}
      />

      <SubSection
        kicker="מחיר סיטונאי"
        title="צביעת רכב במחיר סיטונאי — ההסבר המלא."
        intro="המילה 'סיטונאי' מתארת מבנה תמחור — לא הנחה. הנה הפירוק המלא: למה זה לא רגיל בשוק, איך זה עובד, ולמה זה מודל אמיתי."
      />

      <article
        style={{
          background: "var(--bg-card)",
          borderRadius: 16,
          padding: "40px 36px",
          marginBottom: 60,
          fontSize: 17,
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.88)",
        }}
      >
        <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
          מה זה מחיר סיטונאי?
        </h2>
        <p style={{ marginBottom: 24 }}>
          מחיר סיטונאי הוא המחיר שמוסך גובה מלקוח B2B (סוכנות רכב, חברת ביטוח, ציי רכב) — לא
          מלקוח פרטי. זה תמיד נמוך משמעותית מהמחיר הקמעונאי, כי הקבלה מתבצעת בכמויות, ובלי הוצאות
          השיווק והמכירה הרגילות שמוסך מתחזק כדי למשוך לקוחות פרטיים.
        </p>

        <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
          למה לקוח פרטי כמעט אף פעם לא מקבל מחיר סיטונאי?
        </h2>
        <p style={{ marginBottom: 24 }}>
          כי המוסך לא יכול להציע אותו ישירות. אם מוסך יפרסם &ldquo;₪3,490 לכולם&rdquo;, הוא יאבד
          את ההכנסה שמייצרת את ההפרש בין הסיטונאי לקמעונאי — וזו הכנסה שמשלמת את שכר הדירה,
          הצוות, והפחת על הציוד היקר ביותר במוסך: תנור הצבע. אז הסיטונאי קיים רק עבור B2B —
          פרטיים תמיד משלמים את הקמעונאי המלא.
        </p>

        <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
          איך Kontrol מצליחה לתת ללקוח פרטי מחיר סיטונאי?
        </h2>
        <p style={{ marginBottom: 24 }}>
          אנחנו לא מבקשים מהמוסך הנחה. אנחנו ממלאים אצלו שעות תנור פנויות — שעות שבהן התנור עומד
          ריק וגורם לו הפסד תפעולי. מבחינתו, השעה הזו היתה זרוקה. כל הכנסה עליה היא תוספת. הוא
          מוכן לקבל אותה במחיר סיטונאי — כי לא נצטרך להחליף את הלקוח הקמעונאי שלו, ולא נחשוף
          את המחיר הזה בפרסום שלו.
        </p>

        <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
          האם זה אומר איכות נמוכה?
        </h2>
        <p style={{ marginBottom: 24 }}>
          ההפך. אותם תנורים שצובעים רכבי סוכנות וחברות ביטוח ב־₪10,000 — הם אלה שצובעים את
          הרכב שלכם. אותו צבע, אותם טכנאים, אותו תהליך. הוויתור היחיד הוא על גמישות ביום
          האיסוף — אנחנו בוחרים את החלון הפנוי במוסך, לא אתם.
        </p>

        <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
          לאיזה מודלים אחרים זה דומה?
        </h2>
        <p>
          חשמל בשעות שפל זול יותר. חדרי מלון של הרגע האחרון זולים יותר. סרט באמצע השבוע זול
          יותר. כולם דוגמאות לאותו עיקרון: קיבולת קבועה שעולה כסף 24/7, ואי־שימוש בה הוא הפסד.
          התשובה הכלכלית הנכונה היא למלא אותה במחיר נמוך יותר ממה שגובים בשעות עומס — לא
          להשאיר אותה ריקה. אנחנו עושים את זה לתעשיית הצבע.
        </p>
      </article>

      <div style={{ textAlign: "center" }}>
        <Link href="/book" className="btn btn--blue">
          התחילו את השאלון
        </Link>
      </div>
    </SubPageLayout>
  );
}
