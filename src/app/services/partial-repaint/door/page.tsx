import type { Metadata } from "next";
import { ServicePageShell } from "@/components/services/service-page-shell";

export const metadata: Metadata = {
  title: "צביעת דלת רכב — מחיר ושיטה",
  description:
    "צביעת דלת רכב יחידה — ₪900-₪1,400. מחיר, תהליך, ומתי כדאי לצבוע דלת בלבד מול לצבוע את כל הרכב.",
  alternates: { canonical: "/services/partial-repaint/door" },
};

export default function DoorRepaint() {
  return (
    <ServicePageShell
      pageUrl="/services/partial-repaint/door"
      kicker="צביעה פרטנית"
      h1="צביעת דלת רכב — מחיר ושיטה."
      intro={`דלת רכב פגועה — סגירה לא מסונכרנת, צבע דהוי מצד הנהג, או שריטה ארוכה. תיקון של דלת בודדה הוא ₪900-₪1,400, בכלל זה התאמת גוון מדויקת לפנלים השכנים.`}
      breadcrumb={[
        { name: "שירותים", href: "/services" },
        { name: "צביעה פרטנית", href: "/services/partial-repaint" },
        { name: "צביעת דלת" },
      ]}
      highlights={[
        { title: "פירוק זהיר", text: 'מסירים את הדלת מהמקום, מנקים אותה לחלוטין, ועובדים עליה במנוחה במקום במוסך מורכב.' },
        { title: "התאמת גוון לסביבה", text: 'הספקטרומטר קורא את הצבע של הפנלים השכנים (לא הקטלוג). תיקון בלתי-נראה.' },
        { title: "Blend לפגושים", text: 'אנחנו צובעים גם 5 ס"מ מהפגושים השכנים בשכבה דקה כדי שהגבול לא יבלוט.' },
        { title: "₪900-₪1,400", text: 'דלת רגילה. דלת אחורית של רכב 4 דלתות = אותו מחיר. הזזה (slide door) של ואן = יותר.' },
      ]}
      faq={[
        { q: 'כמה זמן זה לוקח?', a: 'יום עד יומיים — פירוק, שיוף, פריימר, צבע, לק, תנור, הרכבה.' },
        { q: 'אם יש 2 דלתות פגועות?', a: '2 דלתות = ₪1,500-₪2,400. אם יש יותר — שווה לשקול צביעה מלאה (₪3,490).' },
      ]}
      related={[
        { href: "/services/partial-repaint", label: "צביעה פרטנית" },
        { href: "/services/full-repaint", label: "צביעה מלאה" },
        { href: "/services/scratch-repair", label: "תיקון שריטות נקודתי" },
      ]}
    />
  );
}
