import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/content/process";
import { IMAGE_SLOTS } from "@/lib/content/images";

export function ProcessSection() {
  return (
    <Section tone="base">
      <Container>
        <Reveal>
          <SectionLabel number="06">Ablauf</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-ink-50 mt-6 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Vom ersten Gespräch bis zur Übergabe.
          </h2>
        </Reveal>

        <ol className="border-line-500/60 mt-14 border-t">
          {processSteps.map((step, index) => {
            const image = IMAGE_SLOTS[step.image];
            return (
              <Reveal as="li" key={step.number} delay={index * 0.05}>
                <div className="border-line-500/60 grid grid-cols-[auto_1fr] items-center gap-6 border-b py-8 sm:grid-cols-[64px_88px_1fr] sm:gap-10">
                  <span className="text-accent-500 self-start font-mono text-sm sm:self-center">
                    {step.number}
                  </span>
                  <div className="relative hidden aspect-square w-[88px] sm:block">
                    <MediaFrame
                      src={image.path}
                      alt={image.alt}
                      className="h-full rounded-md"
                      devLabel={`Prozessschritt ${step.number}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-ink-50 text-xl font-medium tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-ink-400 mt-2 max-w-xl text-sm leading-relaxed sm:text-base">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
