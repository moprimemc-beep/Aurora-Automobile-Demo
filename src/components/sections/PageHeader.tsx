import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-line-500/60 border-b pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="text-ink-50 text-balance mt-6 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="text-ink-400 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
