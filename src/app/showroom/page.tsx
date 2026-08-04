import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { StoryChapter } from "@/components/sections/StoryChapter";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapLink } from "@/components/ui/MapLink";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: `Showroom & Über uns — ${company.shortName}`,
  description: `Der Anspruch hinter ${company.shortName}: Auswahl, Beratung, Team und Standort in ${company.address.city}.`,
  alternates: { canonical: "/showroom" },
};

export default function ShowroomPage() {
  return (
    <>
      <PageHeader
        eyebrow="Showroom"
        title="Der Anspruch hinter dem Showroom."
        intro={`Seit ${company.foundingYear} verbindet ${company.shortName} Fahrzeugkauf mit persönlicher Beratung — in einem modernen Showroom mit eigener Meisterwerkstatt in ${company.address.city}.`}
      />

      <StoryChapter number="01" eyebrow="Haltung" title="Wofür Aurora Automobile steht." image="exteriorNight">
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          Vertrauen, Qualität und Transparenz sind bei uns keine Schlagworte, sondern der Maßstab
          für jedes Gespräch. Als Premium-Autohaus verstehen wir uns als Ansprechpartner für den
          gesamten Weg vom ersten Interesse bis zur laufenden Wartung.
        </p>
        <p className="text-ink-600 text-sm leading-relaxed">
          {company.values.join(" · ")}
        </p>
      </StoryChapter>

      <StoryChapter
        number="02"
        eyebrow="Auswahl"
        title="Wie Fahrzeuge ausgewählt werden."
        image="vehicleDelivery"
        reverse
        tone="raised"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          Unser Bestand von über {company.vehicleStockCount} Fahrzeugen wird laufend geprüft,
          aufbereitet und ergänzt — von jungen Gebrauchtwagen bis zu Premiummodellen aus den
          Bereichen {company.specializations.slice(0, -1).join(", ")} und{" "}
          {company.specializations[company.specializations.length - 1]}.
        </p>
      </StoryChapter>

      <StoryChapter
        number="03"
        eyebrow="Beratung"
        title="Wie Beratung bei uns funktioniert."
        image="consultingLounge"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          Beratung beginnt vor der ersten Probefahrt: Wir hören zu, erklären Fahrzeughistorie und
          Ausstattung nachvollziehbar und finden gemeinsam eine passende Finanzierungs- oder
          Leasinglösung — ohne Zeitdruck.
        </p>
      </StoryChapter>

      <StoryChapter
        number="04"
        eyebrow="Team"
        title="Wer hinter Aurora Automobile steht."
        image="workshopHandover"
        reverse
        tone="raised"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          Geführt von {company.management.join(" und ")}, arbeitet ein{" "}
          {company.employeeCount}-köpfiges Team aus Verkauf, Beratung und Werkstatt unter einem
          Dach — für kurze Wege und einen durchgängigen Ansprechpartner.
        </p>
      </StoryChapter>

      <Section tone="base" border={false}>
        <Container>
          <Reveal>
            <SectionLabel number="05">Standort</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Wo Sie uns finden.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal delay={0.1}>
              <p className="tracking-label text-ink-600 mb-3 font-mono text-xs uppercase">
                Adresse
              </p>
              <address className="text-ink-200 not-italic">
                <p>{company.name}</p>
                <p>{company.address.street}</p>
                <p>
                  {company.address.zip} {company.address.city}
                </p>
              </address>
              <div className="mt-6">
                <MapLink />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="tracking-label text-ink-600 mb-3 font-mono text-xs uppercase">
                Öffnungszeiten Verkauf
              </p>
              <ul className="text-ink-200 space-y-1.5 text-sm">
                {company.hoursSales.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-ink-400">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="tracking-label text-ink-600 mb-3 font-mono text-xs uppercase">
                Öffnungszeiten Werkstatt
              </p>
              <ul className="text-ink-200 space-y-1.5 text-sm">
                {company.hoursWorkshop.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-ink-400">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.26} className="mt-14">
            <Button href="/kontakt">Kontakt aufnehmen</Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
