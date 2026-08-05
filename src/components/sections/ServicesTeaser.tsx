import { ChevronRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/motion/Reveal";
import { getAllServices, featuredServiceSlugs } from "@/lib/content/services";
import type { Locale } from "@/i18n/routing";

export async function ServicesTeaser() {
  const t = await getTranslations("servicesTeaser");
  const locale = (await getLocale()) as Locale;
  const allServices = getAllServices(locale);
  const services = featuredServiceSlugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <Section tone="raised">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel number="03">{t("eyebrow")}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <TextLink href="/leistungen">{t("viewAll")}</TextLink>
          </Reveal>
        </div>

        <ul className="border-line-500/60 mt-14 border-t">
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={index * 0.04}>
              <div className="border-line-500/60 group grid grid-cols-1 gap-4 border-b py-7 transition-colors sm:grid-cols-[80px_1fr_1fr_auto] sm:items-center sm:gap-8">
                <span className="text-accent-500 font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-ink-50 text-xl font-medium tracking-tight sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed sm:text-base">
                  {service.text}
                </p>
                <ChevronRight
                  className="text-ink-600 group-hover:text-accent-400 hidden h-5 w-5 transition-colors sm:block"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
