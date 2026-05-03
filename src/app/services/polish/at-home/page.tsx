import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "פוליש ווקס לרכב עד הבית",
  description:
    "פוליש מקצועי עד הבית — אנחנו מגיעים אליכם, בכל הארץ. פוליש 3-שלבי במכונת ליטוש תעשייתית, ב-4 שעות, בלי לזוז מהבית.",
  alternates: { canonical: "/services/polish/at-home" },
};

export default function PolishAtHome() {
  return (
    <ServicePageShell
      pageUrl="/services/polish/at-home"
      kicker="פוליש בבית"
      h1="פוליש ווקס לרכב עד הבית."
      intro={`אתם לא צריכים להגיע למוסך. אנחנו באים אליכם — בית, מקום עבודה, חניה תת־קרקעית — ועושים פוליש מקצועי 3-שלבי על המקום. בלי גרר, בלי תור, בלי לבזבז יום.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "פוליש", href: "/services/polish" },
        { name: "עד הבית" },
      ]}
      highlights={[
        { title: "ציוד מקצועי נייד", text: "מכונת ליטוש תעשייתית, פדים מקצועיים, וכל החומרים — מגיעים אליכם." },
        { title: "4 שעות בלבד", text: "בזמן שאתם בעבודה, בבית, או באירוע — הפוליש מסתיים." },
        { title: "בכל הארץ", text: "מהקריות בצפון עד באר שבע בדרום. אין הגבלת מרחק, אין דמי הסעה." },
        { title: "הרכב לא זז", text: "אתם לא צריכים לסדר אוטו חליפי, חניה במוסך, או גרר. המכונית נשארת אצלכם." },
      ]}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            איך זה עובד
          </h2>
          <ol style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
            <li><strong>שולחים תמונות של הרכב</strong> בוואטסאפ — זווית קדמית, אחורית, וצדדית.</li>
            <li><strong>מקבלים הצעת מחיר ראלית</strong> תוך כמה שעות.</li>
            <li><strong>אתם בוחרים יום</strong> — אנחנו מגיעים אליכם בשעה שתואמת.</li>
            <li><strong>4 שעות עבודה</strong> — אתם יכולים לחזור לחיים, לעבודה, למשפחה.</li>
            <li><strong>תשלום על המקום</strong> — אחרי שראיתם את התוצאה.</li>
          </ol>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            דרישות מקום
          </h2>
          <p style={{ marginBottom: 12 }}>
            כדי שנעשה פוליש איכותי, אנחנו צריכים:
          </p>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>חניה רגילה (לא קומפקטית) או חניית בית</li>
            <li>גישה לחשמל (שקע 220V) או שהמכונה תהיה ניידת</li>
            <li>גישה למים זורמים (לשטיפה לפני)</li>
            <li>מקום מוצל אם אפשר — שמש ישירה מקשה על הליטוש</li>
          </ul>
          <p style={{ marginTop: 16 }}>
            אם החניה שלכם לא מתאימה, אנחנו יכולים להציע מיקום קרוב חלופי.
          </p>
        </>
      }
      faq={[
        {
          q: "האם זה באמת זול יותר מאשר במוסך?",
          a: "המחיר זהה למחיר במוסך — אנחנו לא גובים תוספת בגלל הנסיעה. הזמן שאתם חוסכים (לא צריך לבזבז יום על מוסך) הוא הערך המוסף.",
        },
        {
          q: "מה אם הרכב פגום מהשמש או דהוי קשה?",
          a: "פוליש 3-שלבי מטפל גם במצב דהוי קשה. אם הצבע באמת מקולף, יידרש פוליש אגרסיבי יותר ולפעמים גם תיקוני צבע נקודתיים — נציין בהצעה.",
        },
        {
          q: "האם תגיעו גם לחניון תת־קרקעי?",
          a: "כן, ברוב המקרים. נצטרך לוודא שיש שם תאורה מספקת וגישה למים. שלחו לנו תמונה של החניון ונאשר.",
        },
        {
          q: "מה אם השכן מתלונן על הרעש?",
          a: "המכונה היא בעוצמת רעש דומה לשואב אבק. בדרך כלל לא בעיה. אם החניה מאוד צמודה, אפשר לתאם שעה לא רגישה.",
        },
      ]}
      related={[
        { href: "/services/polish", label: "פוליש לרכב" },
        { href: "/services/polish/price", label: "מחיר פוליש" },
        { href: "/services/headlight-restoration", label: "ליטוש פנסים" },
        { href: "/services/full-repaint", label: "צביעה מלאה (כולל פוליש חינם)" },
      ]}
    />
  );
}
