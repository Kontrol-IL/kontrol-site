import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "שותפי ביטוח — תיקוני צבע במחיר מוסכם",
  description:
    "Kontrol מציעה לחברות ביטוח שיתוף פעולה — תיקוני צבע ופחחות במחיר B2B תחרותי, רשת ארצית, תיעוד דיגיטלי מלא.",
  alternates: { canonical: "/b2b/insurance" },
};

export default function B2BInsurance() {
  return (
    <ServicePageShell
      pageUrl="/b2b/insurance"
      kicker="B2B · ביטוח"
      h1="שותפי ביטוח — תיקוני צבע במחיר מוסכם."
      intro={`חברות ביטוח: אנחנו מציעים שותפות אסטרטגית לתיקוני צבע ופחחות. רשת ארצית של מוסכים מאומתים, תמחור תחרותי שמוריד את עלויות התביעה הממוצעות שלכם, ותיעוד דיגיטלי מלא בכל שלב.`}
      breadcrumb={[
        { name: "B2B", href: "/services" },
        { name: "שותפי ביטוח" },
      ]}
      hideQuizCta={true}
      highlights={[
        { title: "מחיר תחרותי", text: "₪3,490 + מע\"מ למקרה צביעה מלאה — הרבה מתחת למחיר ממוצע במוסכי הסדר." },
        { title: "כיסוי ארצי", text: "מצפון ועד דרום, רשת מוסכים שותפים מאומתים. אין צורך לדאוג לאזורי כיסוי." },
        { title: "תיעוד דיגיטלי", text: "כל עבודה מצולמת ומדווחת. אין מקום לבעיות תיעוד בתהליך התביעה." },
        { title: "תזמון מהיר", text: "אישור עבודה תוך 48 שעות. התחלת עבודה תוך שבוע מהפניית התביעה." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            המודל לחברות ביטוח
          </h2>
          <p style={{ marginBottom: 18 }}>
            אנחנו לא מוסך עצמאי — אנחנו רשת. זה אומר:
          </p>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <li>אין הגבלה גיאוגרפית. אם הלקוח שלכם בנהריה — יש לנו פתרון. אם בדימונה — גם.</li>
            <li>אין סיכון של מוסך אחד שמתפרק. אם מוסך שותף נסגר, אנחנו ממשיכים לפעול.</li>
            <li>תקשורת אחידה — נציג Kontrol יחיד מטפל בכל התביעות שלכם.</li>
            <li>מערכת דיווח דיגיטלית — מתחברת ל־CRM שלכם דרך API.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            למה זה משתלם לחברת הביטוח
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>חיסכון בהחזר ממוצע:</strong> 30-40% הפחתה ב־payout ממוצע על תיקון צבע.</li>
            <li><strong>מהירות תהליך:</strong> תיקונים שלוקחים שבועיים במוסך הסדר — אצלנו בשבוע.</li>
            <li><strong>פחות מחלוקות:</strong> תיעוד מלא = פחות פגישות צמ&quot;ה (צוות מ&quot;ה).</li>
            <li><strong>שביעות רצון לקוח:</strong> שירות איסוף ומשלוח עד הבית, ניקוי כלול. לקוחות מרוצים = פחות תלונות.</li>
          </ul>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            צרו קשר עסקי
          </h2>
          <p>
            לפגישת היכרות עם נציג עסקי, שלחו פרטים ל־
            <a href="mailto:partnerships@kontrolauto.net" style={{ color: "var(--accent)" }}>partnerships@kontrolauto.net</a>{" "}
            או חייגו {"{{PARTNERSHIPS_PHONE}}"}.
          </p>
        </>
      }
      related={[
        { href: "/insurance", label: "כל חברות הביטוח" },
        { href: "/b2b/fleets", label: "ציי רכב" },
        { href: "/b2b/dealerships", label: "סוכנויות רכב" },
      ]}
    />
  );
}
