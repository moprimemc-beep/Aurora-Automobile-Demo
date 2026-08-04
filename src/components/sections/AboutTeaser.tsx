import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS } from "@/lib/content/images";
import { company } from "@/lib/content/company";

export function AboutTeaser() {
  return (
    <Section tone="raised">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative aspect-[4/5] lg:order-1 lg:h-full">
            <MediaFrame
              src={IMAGE_SLOTS.exteriorNight.path}
              alt={IMAGE_SLOTS.exteriorNight.alt}
              className="h-full min-h-[360px] rounded-lg"
              devLabel="Showroom-Gebäude bei Nacht"
            />
          </Reveal>

          <div className="lg:order-2 lg:flex lg:flex-col lg:justify-center">
            <Reveal>
              <SectionLabel number="07">Über uns</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Der Anspruch hinter dem Showroom.
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-lg space-y-4">
              <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
                Seit {company.foundingYear} steht {company.shortName} in {company.address.city}{" "}
                für Fahrzeugkauf mit persönlicher Note. Geführt von{" "}
                {company.management.join(" und ")}, arbeitet ein {company.employeeCount}-köpfiges
                Team aus Verkauf, Beratung und Werkstatt unter einem Dach.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <TextLink href="/showroom">Mehr über uns</TextLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
