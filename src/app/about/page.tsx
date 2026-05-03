import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";

export const metadata: Metadata = {
  title: "אודות Kontrol",
  description:
    "Kontrol נולד מתוך זיהוי חוסר יעילות בתעשייה: תנורי צבע יקרים יושבים ריקים שעות ביום. בנינו רשת שמתמודדת עם זה ומעבירה את החיסכון ללקוחות.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "אודות" },
      ]}
    >
      <SubSection
        kicker="אודות Kontrol"
        title="חברה שנבנתה סביב חוסר יעילות אחת בתעשייה."
        intro="תנור צבע הוא הציוד היקר ביותר במוסך. הוא ממשיך לעלות כסף גם בשעות שאף רכב לא נכנס. הסתכלנו על זה, ושאלנו: מה אם נמלא את השעות האלה, ונעביר את החיסכון ללקוח?"
      />

      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          width: "100%",
          borderRadius: 16,
          overflow: "hidden",
          marginBottom: 60,
        }}
      >
        <Image
          src="/images/about/about-paint-shop-tour.png"
          alt="פנים מוסך צבע שותף — מבט רחב"
          fill
          sizes="(max-width: 1080px) 100vw, 1080px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Block
        kicker="הסיפור"
        title="מה ראינו לפני שהתחלנו."
        body="ביקרנו עשרות מוסכי צבע לאורך השנים. גילינו דבר עקבי: בכל מוסך, מאשדוד עד מודיעין, התנור עומד פנוי שעות ביום. הסיבה פשוטה — מוסכים מתמחרים את השעות הפנויות לתוך המחיר של הלקוחות הקיימים, כי אין להם דרך אחרת. אנחנו בנינו את הדרך האחרת."
      />
      <Block
        kicker="הטכנולוגיה"
        title="מערכת שמדברת עם תנורים."
        body="פיתחנו מערכת שמותקנת אצל המוסכים השותפים שלנו, ומדווחת בזמן אמת על קיבולת תנור פנויה. אנחנו לא חושפים את הפרטים הטכניים, אבל זה מה שמאפשר לנו לתמחר את העבודה במחיר סיטונאי בלי לפגוע באיכות."
      />
      <Block
        kicker="הערכים"
        title="לא להתפשר על איכות, לא לעגל פינות בכסף."
        body={'כל מוסך שאנחנו עובדים איתו עובר בדיקה. כל רכב שלא חוזר באיכות שאנחנו מצפים מתוקן על חשבון המוסך. כל לקוח יודע מראש מה כלול ומה לא — אין הפתעות בחשבון. ₪3,490 + מע"מ זה ₪3,490 + מע"מ.'}
      />
      <Block
        kicker="הצוות"
        title="3 שותפים, חלוקה שווה, מטרה אחת."
        body="Kontrol נוסדה על ידי קאל, ירין ועמית — שלושה שותפים שווים. רקעים שונים, זווית משותפת: מה שעובד במוסכים גדולים לא חייב להיות מוסתר מלקוחות פרטיים. הטכנולוגיה והכמויות פתחו פתח לתמחור שנגיש לכולם."
      />

      <SubSection>
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 14,
            padding: 28,
            color: "var(--text-muted)",
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "white", display: "block", marginBottom: 8 }}>
            הערה משפטית
          </strong>
          Kontrol הוא מותג של לוחמים בצבע בע&quot;מ ח.פ.{" "}
          {"{{COMPANY_NUMBER}}"}. המותג Kontrol Auto הוא מותג צרכני לעבודות
          צביעת רכב פרטיות, ופועל בנפרד מ־Kontrol Technologies K.A Ltd שהיא חברה
          אחות בתחום המנעולים החכמים תחת homekontrol.net.
        </div>
      </SubSection>

      <SubSection>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 700, marginBottom: 18 }}>
            תרצו שנעבוד גם על הרכב שלכם?
          </h2>
          <Link href="/book" className="btn btn--blue">
            התחילו את השאלון
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}

function Block({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <SubSection>
      <p
        style={{
          fontSize: 12,
          color: "var(--accent)",
          letterSpacing: "0.22em",
          fontWeight: 500,
          marginBottom: 12,
        }}
      >
        {kicker}
      </p>
      <h3
        style={{
          fontSize: "clamp(22px, 2.6vw, 34px)",
          fontWeight: 700,
          marginBottom: 14,
          maxWidth: 760,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "clamp(16px, 1.3vw, 19px)",
          color: "var(--text-muted)",
          lineHeight: 1.75,
          maxWidth: 780,
        }}
      >
        {body}
      </p>
    </SubSection>
  );
}
