import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityPage } from "@/components/ui/city-page";
import { CITIES, getCityBySlug } from "@/data/cities";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const c = getCityBySlug(params.slug);
  if (!c) return { title: "לא נמצא" };
  return {
    title: `צביעת רכב ב${c.city}`,
    description: `צביעת רכב מלאה ב${c.city} במחיר סיטונאי. ₪3,490 + מע"מ, איסוף ומשלוח חינם, פוליש פנסים וניקוי כלולים.`,
    alternates: { canonical: `/branches/${c.slug}` },
  };
}

export default async function BranchCityPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const c = getCityBySlug(params.slug);
  if (!c) notFound();

  return (
    <CityPage
      city={c.city}
      slug={c.slug}
      monthlyCount={c.monthlyCount}
      blurb={c.blurb}
    />
  );
}
