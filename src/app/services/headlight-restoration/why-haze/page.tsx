import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "למה הפנסים מתערפלים — והפתרון",
  description:
    "למה פנסי רכב מתערפלים, מצהיבים, ומאבדים תפוקת תאורה? הסבר טכני על שכבת UV, חיי הפלסטיק, ואיך למנוע.",
  alternates: { canonical: "/services/headlight-restoration/why-haze" },
};

export default function WhyHaze() {
  return (
    <ServicePageShell
      pageUrl="/services/headlight-restoration/why-haze"
      kicker="הסבר טכני"
      h1="למה הפנסים מתערפלים — והפתרון."
      intro={`פנסי רכב מודרניים עשויים מפלסטיק פוליקרבונט עם שכבת מגן UV. אחרי שנות חשיפה לשמש, השכבה מתחמצנת ומתחילה להתפרק. הנה התהליך המלא, ומה אפשר לעשות כדי להאט אותו.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "ליטוש פנסים", href: "/services/headlight-restoration" },
        { name: "למה מתערפלים" },
      ]}
      hideQuizCta={false}
      body={
        <>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18 }}>
            הכימיה
          </h2>
          <p style={{ marginBottom: 18 }}>
            פנסי הרכב המודרניים עשויים פוליקרבונט (PC) — פלסטיק שקוף וחזק יותר מזכוכית, אבל עם
            חולשה אחת: הוא רגיש ל־UV. כשהוא יוצא מהמפעל, הוא מצופה בשכבה דקה שדוחה UV ושומרת על
            השקיפות.
          </p>
          <p style={{ marginBottom: 18 }}>
            בארץ עם שמש כמעט יומית, השכבה הזו מחזיקה 3-7 שנים. אחרי זה היא מתחילה להתחמצן —
            תהליך כימי שגורם לפלסטיק להפוך לחלבי, צהוב, ובסוף לסדוק שטוח.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            איך זה משפיע על התאורה
          </h2>
          <p style={{ marginBottom: 18 }}>
            פנס שמערפל מאיר 30-60% פחות מפנס תקין. בנהיגת לילה זה קריטי — אתם רואים פחות, ונראים
            פחות. במבחן רישוי זה יכול לגרום לפסילה.
          </p>

          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 700, marginBottom: 18, marginTop: 32 }}>
            איך להאט את התהליך
          </h2>
          <ul style={{ paddingInlineStart: 24, display: "flex", flexDirection: "column", gap: 10 }}>
            <li><strong>חניית מקורה / צל:</strong> הכי חשוב. כל יום שלא בשמש = שנה נוספת לפנסים.</li>
            <li><strong>ווקס לפנסים:</strong> שכבת ווקס דקה כל 6 חודשים מעלה את החיים.</li>
            <li><strong>ניקוי שטיפה רגיל:</strong> אבק שמתאסף מאיץ את החמצון.</li>
            <li><strong>ציפוי UV מקצועי לאחר ליטוש:</strong> מאריך 2-3 שנים מההתחלה.</li>
          </ul>
        </>
      }
      related={[
        { href: "/services/headlight-restoration", label: "ליטוש פנסים" },
        { href: "/services/headlight-restoration/diy-vs-pro", label: "ליטוש בעצמך" },
        { href: "/blog/why-headlights-haze", label: "מאמר מורחב" },
      ]}
    />
  );
}
