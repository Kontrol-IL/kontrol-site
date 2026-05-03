import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "מוצרים להעלמת שריטות בבית",
  description:
    "מסיר שריטות לרכב, צבע תיקון מהבקבוק, קיט תיקון שריטות, חומר לשריטות. מה עובד, מה לא, ומתי כדאי לוותר ולהזמין מקצועי.",
  alternates: { canonical: "/services/scratch-repair/diy-products" },
};

export default function ScratchDiyProducts() {
  return (
    <ServicePageShell
      pageUrl="/services/scratch-repair/diy-products"
      kicker="DIY מוצרים"
      h1="מוצרים להעלמת שריטות בבית."
      intro={`חנויות הרכב מלאות ב"פטנטים" לתיקון שריטות. רובם משחת ליטוש בתחפושת. הנה הסקירה הכנה — מה כל מוצר באמת עושה, ומה הגבולות שלו.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "תיקון שריטות", href: "/services/scratch-repair" },
        { name: "מוצרים DIY" },
      ]}
      hideQuizCta={false}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            מסיר שריטות (Scratch Remover)
          </h2>
          <p style={{ marginBottom: 18 }}>
            בעיקרון משחת פוליש דקה. עובדת רק על שריטות שטוחות. אם השריטה מורגשת באצבע — לא יעבוד.
            <strong> מחיר:</strong> ₪40-₪150. <strong>מי שזה מתאים לו:</strong> סימני שטיפה,
            סוורילים, שפשופים שטוחים מאוד.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            צבע תיקון מהבקבוק (Touch-up Paint)
          </h2>
          <p style={{ marginBottom: 18 }}>
            בקבוק קטן עם צבע מטויב לקוד הצבע של הרכב שלכם. עובד על שריטות עמוקות שהגיעו למתכת,
            אבל התוצאה כמעט תמיד נראית. זה מונע חלודה — לא מתקן ויזואלית.
            <strong> מחיר:</strong> ₪50-₪120 לבקבוק.
            <strong> מתי לבחור:</strong> אם רוצים רק למנוע חלודה, ולא אכפת מהמראה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            קיט תיקון שריטות (Scratch Repair Kit)
          </h2>
          <p style={{ marginBottom: 18 }}>
            ערכה עם מסיר שריטות + פוליש + ווקס. בעיקרון מארז של 3 מוצרים שאפשר לקנות בנפרד. עובדת
            על שריטות שטוחות, לא עמוקות. <strong> מחיר:</strong> ₪150-₪400.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            &ldquo;חומר קסם&rdquo; (Quick Fix / Scratch Eraser)
          </h2>
          <p>
            פטנטים עם שמות שיווקיים. רובם משחת פוליש או ספונג&apos;ה רטובה עם מינרל בסיסי. אפקט
            זמני (יום-יומיים) — הם פשוט ממלאים את השריטה ב-ווקס. אחרי שטיפה, השריטה חוזרת.
            <strong> מחיר:</strong> ₪50-₪150. <strong> תועלת אמיתית:</strong> נמוכה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            מתי לוותר על DIY ולהזמין
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>אם השריטה מורגשת באצבע</li>
            <li>אם רואים מתכת או צבע אחר מתחת</li>
            <li>אם יש 3+ שריטות באותו אזור</li>
            <li>אם זה רכב חדש שאתם רוצים לשמור על המראה ההתחלתי</li>
            <li>אם אתם מתכוננים למכור</li>
          </ul>
        </>
      }
      related={[
        { href: "/services/scratch-repair", label: "תיקון שריטות מקצועי" },
        { href: "/services/scratch-repair/price", label: "מחיר" },
        { href: "/blog/auto-depo-vs-professional", label: "אוטו דיפו מול מקצועי" },
      ]}
    />
  );
}
