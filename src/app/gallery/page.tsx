import type { Metadata } from "next";
import Link from "next/link";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";

export const metadata: Metadata = {
  title: "צביעת רכב לפני ואחרי — גלריה",
  description:
    "רכבים שצבענו בחודשים האחרונים בכל הארץ. תמונות אמיתיות, לקוחות אמיתיים, מחיר אחד: ₪3,490 + מע\"מ.",
  alternates: { canonical: "/gallery" },
};

const PROJECTS = [
  { make: "מאזדה 3", year: 2018, city: "אשדוד", days: 4, note: "החזרת ברק לצבע שדהה", img: "/images/BETTER/full-painting.png" },
  { make: "טויוטה קורולה", year: 2015, city: "ראשון לציון", days: 3, note: "צביעה בגוון מקורי", img: "/images/BETTER/detailed-painting.png" },
  { make: "יונדאי i30", year: 2019, city: "מודיעין", days: 5, note: "החלפת גוון לפני מכירה", img: "/images/BETTER/caliper-painting.png" },
  { make: "סקודה אוקטביה", year: 2017, city: "אשדוד", days: 4, note: "תיקון נזק שמש מקיף", img: "/images/BETTER/wheel-painting.png" },
  { make: "קיה ספורטאז'", year: 2020, city: "ראשון לציון", days: 4, note: "צביעה מלאה + פוליש פנסים", img: "/images/BETTER/local-painting.png" },
  { make: "סובארו XV", year: 2016, city: "מודיעין", days: 5, note: "החלפת גוון משחור לאפור", img: "/images/BETTER/full-painting.png" },
];

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
      <SubSection
        kicker="לפני ואחרי"
        title="רכבים שצבענו לאחרונה."
        intro={'כל רכב כאן הוא לקוח אמיתי, באזור השירות שלנו, במחיר ₪3,490 + מע"מ. אין כאן stock photos.'}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 80,
        }}
      >
        {PROJECTS.map((p, i) => (
          <article
            key={i}
            style={{
              background: "var(--bg-card)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 0 20px rgba(57,101,200,0.10), 0 4px 12px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                aspectRatio: "4 / 3",
                background:
                  "linear-gradient(135deg, rgba(57,101,200,0.12), rgba(99,102,241,0.06))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={p.img}
                alt={`${p.make} ${p.year}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: "scaleX(-1)",
                }}
              />
            </div>
            <div style={{ padding: 22 }}>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 6 }}>
                {p.make} · {p.year}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12 }}>
                {p.city} · {p.days} ימי עבודה
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>
                {p.note}
              </p>
            </div>
          </article>
        ))}
      </div>

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
