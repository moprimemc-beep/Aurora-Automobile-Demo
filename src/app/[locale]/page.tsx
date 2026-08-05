import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { SegmentsOverview } from "@/components/sections/SegmentsOverview";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { ShowroomTrust } from "@/components/sections/ShowroomTrust";
import { WhyAurora } from "@/components/sections/WhyAurora";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ContactCta } from "@/components/sections/ContactCta";
import { company, getCompanyText } from "@/lib/content/company";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const text = getCompanyText(locale as Locale);
  const title = `${company.shortName} — ${
    locale === "de" ? "Premium-Autohaus" : "Premium Dealership"
  } in ${company.address.city}`;

  return {
    title,
    description: text.description,
    alternates: buildAlternates(locale, ""),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BrandStatement />
      <SegmentsOverview />
      <ServicesTeaser />
      <ShowroomTrust />
      <WhyAurora />
      <ProcessSection />
      <AboutTeaser />
      <ContactCta />
    </>
  );
}
