import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { VehicleFilter } from "@/components/vehicles/VehicleFilter";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/lib/content/company";
import { vehicles } from "@/lib/content/vehicles";
import { IMAGE_SLOTS } from "@/lib/content/images";

export const metadata: Metadata = {
  title: `Fahrzeuge — ${company.shortName}`,
  description: `Über ${company.vehicleStockCount} Fahrzeuge im Bestand: ${company.specializations.join(", ")}. Persönliche Beratung im Showroom in ${company.address.city}.`,
  alternates: { canonical: "/fahrzeuge" },
};

export default function FahrzeugePage() {
  return (
    <>
      <PageHeader
        eyebrow="Fahrzeuge"
        title="Fahrzeuge im Überblick."
        intro={`Über ${company.vehicleStockCount} sofort verfügbare Fahrzeuge — sorgfältig ausgewählt und persönlich vorgestellt. Von jungen Gebrauchtwagen bis zu Premium-Modellen.`}
      />

      <Section tone="base">
        <Container>
          <Reveal className="relative mb-14 aspect-[21/9]">
            <MediaFrame
              src={IMAGE_SLOTS.exteriorDay.path}
              alt={IMAGE_SLOTS.exteriorDay.alt}
              priority
              className="h-full rounded-lg"
              devLabel="Showroom-Außenansicht"
            />
          </Reveal>

          <Reveal className="mb-10">
            <p className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              Unsere Spezialisierung
            </p>
            <div className="flex flex-wrap gap-2.5">
              {company.specializations.map((spec) => (
                <Badge key={spec}>{spec}</Badge>
              ))}
            </div>
          </Reveal>

          <VehicleFilter />
          <div className="mt-10">
            <VehicleGrid vehicles={vehicles} />
          </div>
        </Container>
      </Section>
    </>
  );
}
