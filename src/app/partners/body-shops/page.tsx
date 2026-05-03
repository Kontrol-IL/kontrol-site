import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "מוסכי שותפים — הצטרפו לרשת Kontrol",
  description:
    "מוסכי צבע ופחחות: הצטרפו לרשת Kontrol. אנחנו מביאים אליכם 30+ רכבים בחודש למילוי שעות תנור פנויות, במחיר B2B מוסכם.",
  alternates: { canonical: "/partners/body-shops" },
};

export default function PartnersBodyShops() {
  return (
    <ServicePageShell
      pageUrl="/partners/body-shops"
      kicker="שותפים · מוסכים"
      h1="מוסכי שותפים — הצטרפו לרשת."
      intro={`אם אתם בעלי מוסך פחחות וצבע, ויש לכם זמן תנור פנוי — אנחנו רוצים לשמוע מכם. אנחנו ממלאים שעות תנור פנויות אצל מוסכים שותפים בכל הארץ, ומציעים תמחור B2B שמשתלם לשני הצדדים.`}
      breadcrumb={[
        { name: "שותפים", href: "/services" },
        { name: "מוסכי שותפים" },
      ]}
      hideQuizCta={true}
      highlights={[
        { title: "30+ רכבים בחודש", text: "אנחנו ממלאים שעות תנור פנויות. כל רכב הוא רווח נטו עליכם — בלי תוספת לקבע." },
        { title: "מחיר חוזה", text: "מחיר מסכום מראש — אתם יודעים בדיוק כמה תקבלו על כל סוג עבודה." },
        { title: "תזמון גמיש", text: "אנחנו לא מתחרים עם הזרימה הקיימת שלכם. ממלאים רק את השעות הריקות." },
        { title: "תשלום מהיר", text: "תשלום תוך 14 ימי עסקים מסיום העבודה. בלי תיקים פתוחים." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            דרישות הסף לרשת
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li>תנור צבע תעשייתי בעבודה תקינה</li>
            <li>ספקטרומטר דיגיטלי להתאמת גוון</li>
            <li>2+ טכנאים מקצועיים בעלי ניסיון</li>
            <li>5+ שנות פעילות באותו מיקום</li>
            <li>ביקורות חיוביות (Google Reviews 4.0+)</li>
            <li>אזור פעילות בכל הארץ — פחות חשוב, יותר חשוב יציבות מקצועית</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            תהליך ההצטרפות
          </h2>
          <ol style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>שיחת היכרות עם המנהל המסחרי שלנו</li>
            <li>ביקור מטעם שלנו במוסך — בדיקת ציוד ואיכות</li>
            <li>בדיקת רכב פיילוט — אנחנו שולחים אליכם רכב לבדיקת איכות סופית</li>
            <li>חתימת חוזה שותפות</li>
            <li>התחלת זרימת רכבים — בדרך כלל תוך שבועיים</li>
          </ol>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            אנחנו לא מתחרים — אנחנו משלימים
          </h2>
          <p>
            ההסכם שלנו מבטיח שאנחנו לא ממלאים שעות שאתם יכולים לתמחר במחיר קמעונאי רגיל. אנחנו
            רק ממלאים את השעות הריקות שלכם — אלה שלא היה אחרת. עבורכם, זה רווח נטו על זמן שהיה
            אבוד.
          </p>
          <p>
            הלקוחות שלנו לא בתחרות עם הלקוחות שלכם. רוב הם פרטיים שאחרת היו הולכים למוסך זול
            עם איכות נמוכה — לא ללקוחות שלכם.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            צרו קשר
          </h2>
          <p>
            <a href="mailto:partners@kontrolauto.net" style={{ color: "var(--accent)" }}>partners@kontrolauto.net</a>
            {" · "}
            {"{{PARTNERS_PHONE}}"}
          </p>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 16 }}>
            כל הפניות נבדקות בדיסקרטיות. אנחנו לא חושפים זהות מוסכים שותפים בפומבי, גם בלי
            חוזה רשמי.
          </p>
        </>
      }
      related={[
        { href: "/how-it-works", label: "איך זה עובד" },
        { href: "/wholesale-pricing", label: "מודל המחיר הסיטונאי" },
        { href: "/b2b/insurance", label: "שותפי ביטוח" },
      ]}
    />
  );
}
