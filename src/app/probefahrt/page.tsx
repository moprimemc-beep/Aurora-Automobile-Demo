import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/lib/content/company";
import { IMAGE_SLOTS } from "@/lib/content/images";

export const metadata: Metadata = {
  title: `Probefahrt vereinbaren — ${company.shortName}`,
  description: `Probefahrt bei ${company.shortName} in ${company.address.city} vereinbaren — ${company.testDriveNote}`,
  alternates: { canonical: "/probefahrt" },
};

export default function ProbefahrtPage() {
  return (
    <Section tone="base" border={false} className="pt-16 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Probefahrt</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="text-ink-50 text-balance mt-6 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl">
                Vereinbaren Sie Ihren Showroom-Termin.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-ink-400 mt-6 max-w-md text-base leading-relaxed">
                Teilen Sie uns mit, welches Fahrzeug Sie interessiert — wir melden uns mit
                Terminvorschlägen für eine persönliche Probefahrt in {company.address.city}.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="border-line-500/60 mt-10 flex items-start gap-3.5 border-t pt-8">
              <CalendarClock className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-ink-200 text-sm leading-relaxed">{company.testDriveNote}</p>
            </Reveal>

            <Reveal delay={0.24} className="relative mt-10 aspect-[4/3]">
              <MediaFrame
                src={IMAGE_SLOTS.frontViewShowroom.path}
                alt={IMAGE_SLOTS.frontViewShowroom.alt}
                className="h-full rounded-lg"
                devLabel="Probefahrt-Seite — Fahrzeugansicht"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm variant="probefahrt" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
