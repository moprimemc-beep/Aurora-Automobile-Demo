import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { company, getCompanyText } from "@/lib/content/company";
import { IMAGE_SLOTS, imageAlt } from "@/lib/content/images";
import { primaryCtaHref, secondaryCtaHref } from "@/lib/content/nav";
import type { Locale } from "@/i18n/routing";

export async function Hero() {
  const locale = (await getLocale()) as Locale;
  const text = getCompanyText(locale);
  const t = await getTranslations("hero");
  const tCta = await getTranslations("cta");

  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden lg:min-h-[92vh]">
      <ImageReveal onLoad className="absolute inset-0">
        <MediaFrame
          src={IMAGE_SLOTS.heroSpotlight.path}
          alt={imageAlt("heroSpotlight", locale)}
          priority
          className="absolute inset-0 h-full w-full"
          devLabel="Hero — vehicle spotlight (dark, night showroom)"
        />
      </ImageReveal>

      <div
        className="from-base-950 via-base-950/55 absolute inset-0 bg-gradient-to-t to-transparent"
        aria-hidden="true"
      />
      <div
        className="from-base-950/80 absolute inset-0 bg-gradient-to-r via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full pt-32 pb-14 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <Reveal className="text-ink-200 tracking-label mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase">
            <span>{company.shortName}</span>
            <span className="text-ink-600" aria-hidden="true">
              ·
            </span>
            <span>{company.address.city}</span>
            <span className="text-ink-600" aria-hidden="true">
              ·
            </span>
            <span>{t("metaTag")}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-ink-50 text-balance max-w-4xl text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              {t("headline1")}
              <br />
              {t("headline2")}
              <br />
              <span className="text-accent-400">{t("headline3")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-ink-200 mt-7 max-w-xl text-base leading-relaxed sm:text-lg">
              {t("subtext", { city: company.address.city })}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCtaHref}>{tCta("requestVehicle")}</Button>
            <Button href={secondaryCtaHref} variant="secondary">
              {tCta("bookTestDrive")}
            </Button>
          </Reveal>

          <Reveal
            delay={0.32}
            className="border-line-500/50 text-ink-400 mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 font-mono text-xs sm:text-sm"
          >
            <span>
              <span className="text-ink-50">{company.vehicleStockCount}+</span> {t("stockLabel")}
            </span>
            <span>
              <span className="text-ink-50">{text.hoursSales[0]?.hours}</span> {t("hoursShortLabel")}
            </span>
            <span>
              {t("sinceLabel")} <span className="text-ink-50">{company.foundingYear}</span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
