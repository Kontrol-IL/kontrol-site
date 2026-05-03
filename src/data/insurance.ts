/**
 * Insurance partner pages — content data.
 * Used by /insurance/[slug]/page.tsx + /insurance hub.
 * High commercial-intent SEO targets ($0.80–$1.45 CPC, 60–800 vol/mo).
 */

export interface InsuranceEntry {
  /** URL slug (English, kebab-case) */
  slug: string;
  /** Hebrew display name */
  name: string;
  /** Short tagline / how Kontrol relates */
  tagline: string;
  /** Long-form intro */
  intro: string;
  /** Primary keywords this page targets */
  keywords: string[];
  /** Estimated total monthly search volume captured */
  searchVolume: string;
}

export const INSURANCES: InsuranceEntry[] = [
  {
    slug: "migdal",
    name: "מגדל",
    tagline: "תיקוני צבע במחיר מוסכם — כולל לקוחות מגדל",
    intro: "ביטוח מגדל הוא מהמובילים בישראל בביטוח רכב. ל־Kontrol יש מודל שמתחבר לתביעות ביטוח: אנחנו עובדים עם אותם מוסכי צבע שמטפלים בתביעות מגדל, רק שאנחנו מציעים גם ללקוחות פרטיים את אותם מחירים סיטונאיים.",
    keywords: ["מוסכי הסדר מגדל", "מגדל מוסכי הסדר", "מוסך הסדר מגדל"],
    searchVolume: "900/mo",
  },
  {
    slug: "phoenix",
    name: "הפניקס",
    tagline: "תיקוני צבע ופחחות — לקוחות הפניקס",
    intro: "הפניקס היא מקבוצות הביטוח הגדולות ביותר בארץ. אם ביטוח הפניקס שלכם מקיף, ייתכן שהוא מכסה תיקוני צבע אחרי תאונה. אנחנו עובדים עם מוסכים שמטפלים בתביעות הפניקס.",
    keywords: ["מוסך הסדר הפניקס", "הפניקס מוסכי הסדר"],
    searchVolume: "1,300/mo",
  },
  {
    slug: "harel",
    name: "הראל",
    tagline: "פחחות וצבע במחיר מוסכם — הראל",
    intro: "הראל היא מקבוצת הביטוח הגדולה ביותר בישראל. רשת מוסכי ההסדר שלהם רחבה. ב־Kontrol אנחנו לא מוסך הסדר רשמי — אבל אנחנו עובדים עם אותם מוסכי צבע, ומציעים מחיר סיטונאי גם ללקוחות פרטיים.",
    keywords: ["מוסכי הסדר הראל", "מוסך הסדר הראל"],
    searchVolume: "1,000/mo",
  },
  {
    slug: "menora",
    name: "מנורה",
    tagline: "תיקוני צבע — לקוחות מנורה מבטחים",
    intro: "מנורה מבטחים פעילה בישראל מעל 80 שנה. הרבה מהלקוחות שלנו מבוטחים במנורה ובחרו אצלנו במקום במוסך הסדר רשמי, כי המחיר שלנו (גם בלי החזר ביטוח) משתלם יותר מההשתתפות העצמית במוסך הסדר.",
    keywords: ["מוסכי הסדר מנורה"],
    searchVolume: "350/mo",
  },
  {
    slug: "ayalon",
    name: "איילון",
    tagline: "פחחות וצבע — לקוחות איילון",
    intro: "איילון ביטוח פעילה בעיקר באזור המרכז. ל־Kontrol יש שותפויות עם מוסכים שמטפלים בתביעות איילון, ואנחנו מציעים גם ללקוחות פרטיים של איילון את אותם מחירים סיטונאיים.",
    keywords: ["מוסכי הסדר איילון"],
    searchVolume: "60/mo",
  },
  {
    slug: "clal",
    name: "כלל",
    tagline: "תיקוני צבע במחיר מוסכם — לקוחות כלל",
    intro: "כלל ביטוח היא חברת ביטוח גדולה בישראל. אנחנו עובדים עם מוסכים שמטפלים בתביעות כלל, ומציעים גם ללקוחות פרטיים של כלל את אותו מחיר B2B שמוסכי ההסדר מקבלים.",
    keywords: ["מוסכי הסדר כלל"],
    searchVolume: "research pending",
  },
  {
    slug: "shirbit",
    name: "שירביט",
    tagline: "פחחות וצבע במחיר סיטונאי — שירביט",
    intro: "שירביט פועלת כחברת ביטוח דיגיטלית בישראל. אנחנו לא מוסך הסדר של שירביט, אבל אנחנו מציעים תמחור שווה מסכומי הסדר — וללא ההמתנה הביורוקרטית.",
    keywords: ["מוסכי הסדר שירביט"],
    searchVolume: "research pending",
  },
  {
    slug: "aig",
    name: "AIG",
    tagline: "תיקוני רכב — לקוחות AIG ישראל",
    intro: "AIG היא חברת ביטוח אמריקאית עם פעילות מקומית בישראל. הביטוחים שלהם הם בעיקר מקיפים ויש להם רשת מוסכי הסדר. אנחנו מציעים אלטרנטיבה במחיר סיטונאי.",
    keywords: ["מוסכי הסדר AIG"],
    searchVolume: "research pending",
  },
  {
    slug: "shomera",
    name: "שומרה",
    tagline: "פחחות וצבע — לקוחות שומרה",
    intro: "שומרה היא חברת ביטוח ישראלית. ל־Kontrol יש שיתופי פעולה עם מוסכי צבע ברחבי הארץ, ואנחנו מציעים תמחור שמתאים גם ללקוחות שומרה שמעדיפים שירות ישיר על תהליך תביעה ארוך.",
    keywords: ["מוסכי הסדר שומרה"],
    searchVolume: "research pending",
  },
  {
    slug: "government-employees",
    name: "ביטוח עובדי מדינה",
    tagline: "תיקוני צבע לעובדי מדינה — מחיר סיטונאי",
    intro: "עובדי מדינה לעיתים זכאים לביטוח רכב משופר עם הסדרים ייחודיים. אנחנו עובדים עם הרבה לקוחות שעובדי מדינה ומציעים את אותם מחירים סיטונאיים גם להם, גם אם הביטוח לא מכסה.",
    keywords: ["עובדי מדינה ביטוח רכב"],
    searchVolume: "150/mo",
  },
];

export function getInsuranceBySlug(slug: string): InsuranceEntry | undefined {
  return INSURANCES.find((i) => i.slug === slug);
}
