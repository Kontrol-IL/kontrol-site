import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { CITIES } from "@/data/cities";
import { INSURANCES } from "@/data/insurance";
import { BLOG_INDEX } from "@/data/blog";

const STATIC_PATHS = [
  // Core
  "/",
  "/how-it-works",
  "/wholesale-pricing",
  "/book",
  "/gallery",
  "/about",
  "/contact",
  "/faq",
  "/warranty",
  "/customer-guide",
  "/refund-policy",
  // Services hub-and-spoke
  "/services",
  "/services/full-repaint",
  "/services/full-repaint/price",
  "/services/full-repaint/oven",
  "/services/full-repaint/included",
  "/services/full-repaint/by-brand/toyota",
  "/services/full-repaint/by-brand/tesla",
  "/services/full-repaint/by-brand/hyundai",
  "/services/full-repaint/by-brand/mazda",
  "/services/body-shop",
  "/services/body-shop/price",
  "/services/body-shop/bumper-repair",
  "/services/body-shop/post-accident",
  "/services/polish",
  "/services/polish/price",
  "/services/polish/at-home",
  "/services/polish/diy-vs-pro",
  "/services/polish/types",
  "/services/polish/stains-and-scratches",
  "/services/headlight-restoration",
  "/services/headlight-restoration/price",
  "/services/headlight-restoration/diy-vs-pro",
  "/services/headlight-restoration/cleaning",
  "/services/headlight-restoration/why-haze",
  "/services/scratch-repair",
  "/services/scratch-repair/price",
  "/services/scratch-repair/deep-scratches",
  "/services/scratch-repair/scuffs",
  "/services/scratch-repair/white-cars",
  "/services/scratch-repair/plastic",
  "/services/scratch-repair/diy-products",
  "/services/caliper-painting",
  "/services/caliper-painting/price",
  "/services/wheel-painting",
  "/services/wheel-painting/price",
  "/services/color-change",
  "/services/color-change/price",
  "/services/color-change/spot-touchup",
  "/services/color-change/matte-black",
  "/services/color-change/white",
  "/services/color-change/concrete-grey",
  "/services/color-change/carbon",
  "/services/partial-repaint",
  "/services/partial-repaint/door",
  "/services/partial-repaint/roof",
  "/services/pickup-delivery",
  // Branches index + HQ (other cities come from CITIES below)
  "/branches",
  "/branches/ashdod",
  // Insurance hub (partners come from INSURANCES below)
  "/insurance",
  // Blog hub (articles come from BLOG_INDEX below)
  "/blog",
  // B2B
  "/b2b/fleets",
  "/b2b/insurance",
  "/b2b/dealerships",
  "/partners/body-shops",
  // Legal & misc
  "/privacy",
  "/terms",
  "/accessibility",
  "/security",
  "/sitemap.html",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));

  // Dynamic — branches (45 cities, excluding Ashdod which is in static)
  const branchEntries: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE_URL}/branches/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.wave === 1 ? 0.85 : c.wave === 2 ? 0.7 : 0.55,
  }));

  // Dynamic — insurance (10 partners)
  const insuranceEntries: MetadataRoute.Sitemap = INSURANCES.map((i) => ({
    url: `${SITE_URL}/insurance/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic — blog (6 articles for launch)
  const blogEntries: MetadataRoute.Sitemap = BLOG_INDEX.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: a.dateModified ? new Date(a.dateModified) : new Date(a.datePublished),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticEntries, ...branchEntries, ...insuranceEntries, ...blogEntries];
}
