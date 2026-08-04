import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCategoryBlock } from "@/components/sections/ServiceCategoryBlock";
import { serviceCategories } from "@/lib/content/services";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: `Leistungen — ${company.shortName}`,
  description:
    "Fahrzeugverkauf, Ankauf, Finanzierung und Meisterwerkstatt: das vollständige Leistungsspektrum von Aurora Automobile in Düsseldorf.",
  alternates: { canonical: "/leistungen" },
};

const categoryImages = [
  "frontViewShowroom",
  "handoverHandshake",
  "workshopService",
  "serviceLounge",
] as const;

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Für Ihre Mobilität. Von Anfang an."
        intro="Vom ersten Beratungsgespräch über Finanzierung und Ankauf bis zur laufenden Wartung in unserer Meisterwerkstatt — ein Ansprechpartner für den gesamten Fahrzeugkreislauf."
      />

      {serviceCategories.map((category, index) => (
        <ServiceCategoryBlock
          key={category.id}
          category={category}
          number={String(index + 1).padStart(2, "0")}
          image={categoryImages[index] ?? "frontViewShowroom"}
          reverse={index % 2 === 1}
          tone={index % 2 === 0 ? "base" : "raised"}
        />
      ))}
    </>
  );
}
