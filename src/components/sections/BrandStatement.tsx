import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS } from "@/lib/content/images";
import { company } from "@/lib/content/company";

export function BrandStatement() {
  return (
    <Section tone="raised">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel number="01">Markenhaltung</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 text-balance mt-6 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Ein Fahrzeug ist mehr als Mobilität.
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-8 max-w-lg space-y-5">
              <p className="text-ink-200 text-base leading-relaxed sm:text-lg">
                {company.shortName} steht für eine klare Haltung: Fahrzeuge werden sorgfältig
                ausgewählt, geprüft und erklärt — nicht einfach verkauft. Persönliche Beratung
                beginnt vor der ersten Probefahrt und endet nicht mit der Übergabe.
              </p>
              <p className="text-ink-400 text-base leading-relaxed">
                Vertrauen, Qualität und Transparenz prägen jedes Gespräch in unserem Showroom in{" "}
                {company.address.city} — von der Fahrzeugauswahl bis zur Finanzierung.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative aspect-[4/5] lg:aspect-auto lg:h-full">
            <MediaFrame
              src={IMAGE_SLOTS.interiorDetail.path}
              alt={IMAGE_SLOTS.interiorDetail.alt}
              className="h-full min-h-[320px] rounded-lg"
              devLabel="Materialdetail — Interieur"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
