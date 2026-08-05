import { Star } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGE_SLOTS, imageAlt } from "@/lib/content/images";
import { company } from "@/lib/content/company";
import type { Locale } from "@/i18n/routing";

export async function ShowroomTrust() {
  const t = await getTranslations("showroomTrust");
  const locale = await getLocale();
  const ratingDisplay = new Intl.NumberFormat(locale).format(company.googleProfile.rating);

  return (
    <Section tone="base">
      <Container>
        <Reveal className="relative aspect-[16/9] sm:aspect-[21/9]">
          <MediaFrame
            src={IMAGE_SLOTS.receptionLounge.path}
            alt={imageAlt("receptionLounge", locale as Locale)}
            className="h-full rounded-lg"
            priority={false}
            devLabel="Reception area with logo wall"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <SectionLabel number="04">{t("eyebrow")}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 max-w-lg">
              <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
                {t("text", { city: company.address.city })}
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <Button href="/showroom" variant="secondary">
                {t("cta")}
              </Button>
            </Reveal>
          </div>

          <Reveal
            delay={0.1}
            className="border-line-500/60 flex flex-col justify-center border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
          >
            <div className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="fill-accent-500 text-accent-500 h-4 w-4" />
              ))}
            </div>
            <p className="text-ink-50 mt-3 font-mono text-3xl">{ratingDisplay}</p>
            <p className="text-ink-400 mt-1 text-sm">
              {company.googleProfile.reviewCount} {t("reviewsLabel")}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
