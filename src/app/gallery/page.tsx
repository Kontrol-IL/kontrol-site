import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";

export const metadata: Metadata = {
  title: "צביעת רכב לפני ואחרי — גלריה",
  description:
    "רכבים שצבענו בחודשים האחרונים בכל הארץ. תמונות אמיתיות, לקוחות אמיתיים, מחיר אחד: ₪3,490 + מע\"מ.",
  alternates: { canonical: "/gallery" },
};

const TESTIMONIALS = [
  { name: "{{CUSTOMER_NAME_1}}", city: "אשדוד", quote: "חיפשתי הצעות מחיר וכולם נתנו לי בין ₪9,000 ל־₪14,000. הסתכלתי על Kontrol בחשד. הרכב חזר אחרי 4 ימים נראה כמו חדש. עדיין לא מאמין." },
  { name: "{{CUSTOMER_NAME_2}}", city: "ראשון לציון", quote: "מה שמכר לי זה ההסבר איך זה עובד — מילוי שעות תנור פנויות. נשמע הגיוני, וקיבלתי איכות של מוסך גדול." },
  { name: "{{CUSTOMER_NAME_3}}", city: "מודיעין", quote: "באו לקחת מהבית, החזירו אחרי 5 ימים מצוחצח מבפנים ומבחוץ. בלי הפתעות בחשבון. הם שווים את ה־₪3,490." },
];

export default function GalleryPage() {
  return (
    <SubPageLayout
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "גלריה" },
      ]}
    >
      <SubSection title="מה לקוחות אמרו אחרי המסירה.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              style={{
                margin: 0,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 28,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer style={{ fontSize: 13, color: "var(--text-muted)" }}>
                — {t.name} · {t.city}
              </footer>
            </blockquote>
          ))}
        </div>
      </SubSection>

      <SubSection>
        <div style={{ textAlign: "center" }}>
          <Link href="/book" className="btn btn--blue">
            רוצים שזה יהיה הרכב שלכם הבא? התחילו את השאלון
          </Link>
        </div>
      </SubSection>
    </SubPageLayout>
  );
}
