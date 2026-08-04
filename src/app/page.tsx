import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { SegmentsOverview } from "@/components/sections/SegmentsOverview";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { ShowroomTrust } from "@/components/sections/ShowroomTrust";
import { WhyAurora } from "@/components/sections/WhyAurora";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ContactCta } from "@/components/sections/ContactCta";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: `${company.shortName} — Premium-Autohaus in ${company.address.city}`,
  description: company.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
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
