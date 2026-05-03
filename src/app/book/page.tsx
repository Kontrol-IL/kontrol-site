import type { Metadata } from "next";
import { SubPageLayout, SubSection } from "@/components/ui/sub-page-layout";
import { BookingQuiz } from "@/components/ui/booking-quiz";

export const metadata: Metadata = {
  title: "הזמנת צביעת רכב",
  description:
    "ענו על 6 שאלות קצרות ונחזור אליכם בוואטסאפ עם זמינות מדויקת לאזור שלכם בכל הארץ. ₪3,490 + מע\"מ.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <SubPageLayout
      hideFooter
      breadcrumb={[
        { name: "צביעת רכב", href: "/" },
        { name: "קביעת תור" },
      ]}
    >
      <SubSection
        kicker="שאלון התאמה"
        title="6 שאלות, שתי דקות, תשובה בוואטסאפ."
        intro="השאלון בודק שהרכב שלכם מתאים לשירות (רכב פרטי, בתחום השירות שלנו), ואז פותח שיחה איתנו עם כל הפרטים מוכנים."
      />
      <BookingQuiz />
    </SubPageLayout>
  );
}
