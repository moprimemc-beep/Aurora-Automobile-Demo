import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS, imageAlt } from "@/lib/content/images";
import { company } from "@/lib/content/company";
import type { Locale } from "@/i18n/routing";

export async function AboutTeaser() {
  const t = await getTranslations("aboutTeaser");
  const locale = await getLocale();
  const management = new Intl.ListFormat(locale, { style: "long", type: "conjunction" }).format(
    company.management,
  );

  return (
    <Section tone="raised">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative aspect-[4/5] lg:order-1 lg:h-full">
            <MediaFrame
              src={IMAGE_SLOTS.exteriorNight.path}
              alt={imageAlt("exteriorNight", locale as Locale)}
              className="h-full min-h-[360px] rounded-lg"
              devLabel="Showroom building at night"
            />
          </Reveal>

          <div className="lg:order-2 lg:flex lg:flex-col lg:justify-center">
            <Reveal>
              <SectionLabel number="07">{t("eyebrow")}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-lg space-y-4">
              <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
                {t("paragraph", {
                  foundingYear: company.foundingYear,
                  shortName: company.shortName,
                  city: company.address.city,
                  management,
                  employeeCount: company.employeeCount,
                })}
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <TextLink href="/showroom">{t("cta")}</TextLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
