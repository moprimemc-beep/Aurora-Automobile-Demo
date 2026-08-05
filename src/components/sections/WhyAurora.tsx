import { Check } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion/Reveal";
import { getCompanyText } from "@/lib/content/company";
import type { Locale } from "@/i18n/routing";

export async function WhyAurora() {
  const t = await getTranslations("whyAurora");
  const locale = (await getLocale()) as Locale;
  const text = getCompanyText(locale);

  return (
    <Section tone="raised">
      <Container>
        <Reveal>
          <SectionLabel number="05">{t("eyebrow")}</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-ink-50 mt-6 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {text.reasons.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={(index % 3) * 0.06} className="flex gap-4">
              <span className="border-accent-500/50 text-accent-500 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-ink-50 text-base font-medium">{reason.title}</h3>
                <p className="text-ink-400 mt-1.5 text-sm leading-relaxed">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
