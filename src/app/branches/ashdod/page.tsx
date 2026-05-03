import type { Metadata } from "next";
import { CityPage } from "@/components/ui/city-page";

export const metadata: Metadata = {
  title: "צביעת רכב באשדוד",
  description: 'צביעת רכב מלאה באשדוד במחיר סיטונאי. ₪3,490 + מע"מ, איסוף ומשלוח חינם. HQ של Kontrol — מוסכים שותפים בעיר.',
  alternates: { canonical: "/branches/ashdod" },
};

export default function AshdodPage() {
  return (
    <CityPage
      city="אשדוד"
      slug="ashdod"
      monthlyCount="{{ASHDOD_MONTHLY_COUNT}}"
      blurb="באשדוד אנחנו עובדים עם מוסכי צבע ותיקים בעלי שם. במקום לבקש מהם הנחה — אנחנו ממלאים את שעות התנור הפנויות שלהם, וזה מה שמאפשר לנו לתת לכם מחיר שאחרים לא יכולים."
      isHQ
    />
  );
}
