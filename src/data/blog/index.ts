/**
 * Blog data registry.
 * Each entry maps to a slug under /blog/[slug]/page.tsx.
 *
 * Once Sanity is provisioned (operator [H.7]), this file becomes the bridge:
 * we'll fetch articles from Sanity and merge with hardcoded entries during
 * the migration window. For launch, the 6 mechanism articles are hardcoded
 * here — they are the content moat per brief 6.7.
 */

import type { ComponentType } from "react";

export interface BlogArticleMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 publish date */
  datePublished: string;
  dateModified?: string;
  /** Author display name (real name or persona) */
  authorName: string;
  authorTitle?: string;
  authorUrl?: string;
  /** Category for filtering / breadcrumb */
  category: "מנגנון" | "מחירים" | "תהליך" | "DIY" | "מדריך";
  /** Hero image slug (placeholder slug, see docs/IMAGE_ASSETS.md) */
  heroImageSlug: string;
  heroImageAlt: string;
  /** Reading-time minutes estimate */
  readingMinutes: number;
}

export const BLOG_INDEX: BlogArticleMeta[] = [
  {
    slug: "why-car-painting-is-expensive",
    title: "למה צביעת רכב כל כך יקרה? האמת על מחירי המוסכים",
    description:
      "פירוק מלא של מחיר צביעת רכב במוסכים הסטנדרטיים: שכר דירה, פחת תנור, חומרי גלם, רווח. ההסבר המלא למה זה ₪10,000 שם ולמה אנחנו מצליחים ב־₪3,490.",
    datePublished: "2026-04-15",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-why-painting-expensive-cover",
    heroImageAlt: "תנור צבע במוסך גדול עם רכב מוכן לצביעה",
    readingMinutes: 8,
  },
  {
    slug: "inside-paint-shop-economics",
    title: "מאחורי הקלעים: כמה באמת עולה למוסך לצבוע רכב?",
    description:
      "ביקרנו אצל מוסך צבע בארץ וקיבלנו את הספרים. הוצאות חודשיות, ניצול תנור בפועל, מבנה רווח. ההסבר הסודי שמוסכים לא רוצים שתדעו.",
    datePublished: "2026-04-22",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-inside-economics-cover",
    heroImageAlt: "מוסך צבע פנימי עם תנור צבע פעיל",
    readingMinutes: 11,
  },
  {
    slug: "wholesale-car-painting-real-or-not",
    title: "מחיר סיטונאי לצביעת רכב — האם זה אמיתי? בדקנו",
    description:
      "צוללים לעומק במודל: איך מתאפשר מחיר סיטונאי לצרכן הפרטי, למה זה לא הנחה, ואיך אנחנו מבטיחים שאיכות העבודה זהה למוסך פרימיום.",
    datePublished: "2026-04-29",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-wholesale-real-cover",
    heroImageAlt: "תנור צבע פעיל מאחורה ורכב במוקד מקדמי",
    readingMinutes: 7,
  },
  {
    slug: "empty-time-paint-ovens",
    title: 'זמן ריק במוסכי צבע — ההזדמנות שאף אחד לא ניצל',
    description:
      "סקר שעשינו על 40 מוסכי צבע: כמה זמן ביום התנור עובד באמת? התשובה הפתיעה אותנו. וזה מה שאיפשר את כל המודל של Kontrol.",
    datePublished: "2026-05-06",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-empty-time-cover",
    heroImageAlt: "תנור צבע ריק עם תאורה דועכת",
    readingMinutes: 9,
  },
  {
    slug: "insurance-vs-private-paint-pricing",
    title: "ביטוח מול תשלום פרטי — איך זה משפיע על מחיר הצביעה",
    description:
      "מוסך הסדר של חברת ביטוח לוקח ₪10,000 על אותה עבודה שלקוח פרטי משלם בה ₪7,500. למה ההבדל? התשובה היא במבנה התמחור של מוסכים שותפים בביטוח.",
    datePublished: "2026-05-13",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-insurance-vs-private-cover",
    heroImageAlt: "מסמך הצעת מחיר מודפס על שולחן",
    readingMinutes: 6,
  },
  {
    slug: "save-thousands-on-car-painting",
    title: "איך לחסוך אלפי שקלים בצביעת רכב",
    description:
      "5 דרכים פרקטיות לחסוך כסף בצביעת רכב: השוואת מחירים, תזמון נכון, שאילת השאלות הנכונות, בדיקת איכות, ניצול מודלים אלטרנטיביים כמו שלנו.",
    datePublished: "2026-05-20",
    authorName: "{{KAEL_FULL_NAME}}",
    authorTitle: "מייסד שותף, Kontrol",
    category: "מנגנון",
    heroImageSlug: "blog-save-thousands-cover",
    heroImageAlt: "מחירון השוואתי מודפס עם הדגשות בעט",
    readingMinutes: 8,
  },
];

export function getArticleBySlug(slug: string): BlogArticleMeta | undefined {
  return BLOG_INDEX.find((a) => a.slug === slug);
}

/**
 * Map of slug → React component that renders the article body.
 * Each article body is a client component imported lazily.
 */
export const ARTICLE_BODIES: Record<string, () => Promise<{ default: ComponentType }>> = {
  "why-car-painting-is-expensive": () => import("./articles/why-car-painting-is-expensive"),
  "inside-paint-shop-economics": () => import("./articles/inside-paint-shop-economics"),
  "wholesale-car-painting-real-or-not": () => import("./articles/wholesale-car-painting-real-or-not"),
  "empty-time-paint-ovens": () => import("./articles/empty-time-paint-ovens"),
  "insurance-vs-private-paint-pricing": () => import("./articles/insurance-vs-private-paint-pricing"),
  "save-thousands-on-car-painting": () => import("./articles/save-thousands-on-car-painting"),
};
