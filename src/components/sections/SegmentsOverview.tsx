import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS } from "@/lib/content/images";
import { company } from "@/lib/content/company";

export function SegmentsOverview() {
  return (
    <Section tone="base">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel number="02">Im Showroom</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Ausgewählt für den nächsten Kilometer.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-ink-400 text-sm leading-relaxed sm:text-base">
              Über {company.vehicleStockCount} sofort verfügbare Fahrzeuge — vor Ort und
              tagesaktuell. Unser Team berät Sie zu passenden Modellen aus unserem Bestand.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal className="relative aspect-[16/11] sm:aspect-[4/3]">
            <MediaFrame
              src={IMAGE_SLOTS.interiorHall.path}
              alt={IMAGE_SLOTS.interiorHall.alt}
              className="h-full rounded-lg"
              devLabel="Ausstellungshalle mit mehreren Fahrzeugen"
            />
            <span className="border-line-500 bg-base-950/80 text-ink-200 absolute bottom-4 left-4 rounded-sm border px-3 py-1.5 font-mono text-xs backdrop-blur-sm">
              Ausstellungsfläche
            </span>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[16/11] sm:aspect-[4/3]">
            <MediaFrame
              src={IMAGE_SLOTS.frontViewShowroom.path}
              alt={IMAGE_SLOTS.frontViewShowroom.alt}
              className="h-full rounded-lg"
              devLabel="Fahrzeug-Frontalansicht im Showroom"
            />
            <span className="border-line-500 bg-base-950/80 text-ink-200 absolute bottom-4 left-4 rounded-sm border px-3 py-1.5 font-mono text-xs backdrop-blur-sm">
              Aktuell im Bestand
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12">
          <p className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
            Unsere Spezialisierung
          </p>
          <div className="flex flex-wrap gap-2.5">
            {company.specializations.map((spec) => (
              <Badge key={spec}>{spec}</Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-12">
          <Button href="/fahrzeuge" variant="secondary">
            Fahrzeuge entdecken
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
