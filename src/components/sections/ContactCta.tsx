import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS } from "@/lib/content/images";
import { company } from "@/lib/content/company";
import { primaryCta } from "@/lib/content/nav";

export function ContactCta() {
  return (
    <section className="border-line-500/60 relative overflow-hidden border-t">
      <MediaFrame
        src={IMAGE_SLOTS.handoverKeys.path}
        alt={IMAGE_SLOTS.handoverKeys.alt}
        className="absolute inset-0 h-full w-full"
        devLabel="Fahrzeugübergabe — Kontakt-CTA Hintergrund"
      />
      <div className="bg-base-950/88 absolute inset-0" aria-hidden="true" />

      <Container className="relative py-24 sm:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-ink-50 text-balance text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Bereit für die nächste Fahrt?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-ink-200 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Vereinbaren Sie eine persönliche Beratung oder stellen Sie uns Ihre Frage — unser
              Team in {company.address.city} meldet sich zeitnah zurück.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <a
              href={company.contact.phone.href}
              className="text-ink-200 hover:text-accent-400 inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.contact.phone.display}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
