import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsurancePageShell } from "@/components/insurance/insurance-page-shell";
import { INSURANCES, getInsuranceBySlug } from "@/data/insurance";

export function generateStaticParams() {
  return INSURANCES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const e = getInsuranceBySlug(params.slug);
  if (!e) return { title: "לא נמצא" };
  return {
    title: `מוסך הסדר ${e.name} — תיקוני צבע ופחחות`,
    description: `שירותי צביעה ופחחות במחיר סיטונאי, גם ללקוחות ${e.name}. ${e.tagline}.`,
    alternates: { canonical: `/insurance/${e.slug}` },
  };
}

export default async function InsurancePartnerPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const entry = getInsuranceBySlug(params.slug);
  if (!entry) notFound();
  return <InsurancePageShell entry={entry} />;
}
