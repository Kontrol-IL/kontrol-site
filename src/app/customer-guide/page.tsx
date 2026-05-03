import type { Metadata } from "next";
import { StubPage } from "@/components/ui/stub-page";

export const metadata: Metadata = {
  title: "תהליך צביעת רכב",
  description: "מה לצפות מהשירות: לפני האיסוף, במהלך הצביעה, ובמסירה. מדריך מלא ללקוח Kontrol.",
  alternates: { canonical: "/customer-guide" },
};

export default function CustomerGuide() {
  return (
    <StubPage
      kicker="מדריך הלקוח"
      title="מה לצפות מהשירות."
      intro="הצביעה לוקחת בדרך כלל 3–5 ימי עבודה. הנה איך התהליך נראה לפני, במהלך, ואחרי."
      breadcrumbName="מדריך הלקוח"
      breadcrumbHref="/customer-guide"
      body={
        <>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>לפני האיסוף</h3>
          <ul style={{ paddingInlineStart: 24, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>הוציאו פריטים אישיים מהרכב.</li>
            <li>הוציאו ציוד יקר ערך מהתא המטען.</li>
            <li>צלמו את הרכב לתיעוד מצב לפני המסירה.</li>
            <li>אנחנו מתאמים איתכם את שעת האיסוף יום קודם בוואטסאפ.</li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>במהלך הצביעה</h3>
          <ul style={{ paddingInlineStart: 24, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>הרכב מועבר למוסך השותף.</li>
            <li>שיוף, פריימר, צבע בסיס, צבע גמר, לק — בתנור צבע סטנדרטי תעשייתי.</li>
            <li>פוליש פנסים וניקוי פנימי במהלך התהליך.</li>
            <li>תקבלו עדכון בוואטסאפ כשהרכב מוכן למסירה.</li>
          </ul>

          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, marginTop: 32 }}>במסירה</h3>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>הרכב חוזר אליכם הביתה או למקום העבודה.</li>
            <li>בדיקה משותפת לפני המסירה — חוזרים על הפינוי לפני שאתם חותמים.</li>
            <li>תשלום ב{"{{PAYMENT_METHODS}}"}.</li>
            <li>מסמכי האחריות נמסרים בכתב.</li>
          </ul>
        </>
      }
    />
  );
}
