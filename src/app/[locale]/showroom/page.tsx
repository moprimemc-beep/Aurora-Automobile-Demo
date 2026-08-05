import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { StoryChapter } from "@/components/sections/StoryChapter";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapLink } from "@/components/ui/MapLink";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { company, getCompanyText } from "@/lib/content/company";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Showroom & Über uns" : "Showroom & About Us";
  const description =
    locale === "de"
      ? `Der Anspruch hinter ${company.shortName}: Auswahl, Beratung, Team und Standort in ${company.address.city}.`
      : `The ambition behind ${company.shortName}: selection, advice, team and location in ${company.address.city}.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/showroom"),
  };
}

export default async function ShowroomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("showroomPage");
  const activeLocale = (await getLocale()) as Locale;
  const text = getCompanyText(activeLocale);
  const management = new Intl.ListFormat(activeLocale, { style: "long", type: "conjunction" }).format(
    company.management,
  );
  const otherSpecializations = text.specializations.slice(0, -1).join(", ");
  const lastSpecialization = text.specializations[text.specializations.length - 1] ?? "";

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro", {
          foundingYear: company.foundingYear,
          shortName: company.shortName,
          city: company.address.city,
        })}
      />

      <StoryChapter
        number="01"
        eyebrow={t("chapter1Eyebrow")}
        title={t("chapter1Title")}
        image="exteriorNight"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">{t("chapter1Text")}</p>
        <p className="text-ink-600 text-sm leading-relaxed">{text.values.join(" · ")}</p>
      </StoryChapter>

      <StoryChapter
        number="02"
        eyebrow={t("chapter2Eyebrow")}
        title={t("chapter2Title")}
        image="vehicleDelivery"
        reverse
        tone="raised"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          {t("chapter2Text", {
            count: company.vehicleStockCount,
            specializations: otherSpecializations,
            lastSpecialization,
          })}
        </p>
      </StoryChapter>

      <StoryChapter number="03" eyebrow={t("chapter3Eyebrow")} title={t("chapter3Title")} image="consultingLounge">
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">{t("chapter3Text")}</p>
      </StoryChapter>

      <StoryChapter
        number="04"
        eyebrow={t("chapter4Eyebrow")}
        title={t("chapter4Title")}
        image="workshopHandover"
        reverse
        tone="raised"
      >
        <p className="text-ink-400 text-base leading-relaxed sm:text-lg">
          {t("chapter4Text", { management, employeeCount: company.employeeCount })}
        </p>
      </StoryChapter>

      <Section tone="base" border={false}>
        <Container>
          <Reveal>
            <SectionLabel number="05">{t("locationEyebrow")}</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-ink-50 mt-6 max-w-lg text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              {t("locationTitle")}
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <Reveal delay={0.1}>
              <p className="tracking-label text-ink-600 mb-3 font-mono text-xs uppercase">
                {t("addressLabel")}
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
                {t("salesHoursLabel")}
              </p>
              <ul className="text-ink-200 space-y-1.5 text-sm">
                {text.hoursSales.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-ink-400">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="tracking-label text-ink-600 mb-3 font-mono text-xs uppercase">
                {t("workshopHoursLabel")}
              </p>
              <ul className="text-ink-200 space-y-1.5 text-sm">
                {text.hoursWorkshop.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-ink-400">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.26} className="mt-14">
            <Button href="/kontakt">{t("contactCta")}</Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
