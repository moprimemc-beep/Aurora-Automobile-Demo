import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { company, getCompanyText } from "@/lib/content/company";
import { IMAGE_SLOTS } from "@/lib/content/images";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const text = getCompanyText(locale as Locale);
  const title = locale === "de" ? "Probefahrt vereinbaren" : "Book a Test Drive";
  const description =
    locale === "de"
      ? `Probefahrt bei ${company.shortName} in ${company.address.city} vereinbaren — ${text.testDriveNote}`
      : `Book a test drive with ${company.shortName} in ${company.address.city} — ${text.testDriveNote}`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/probefahrt"),
  };
}

export default async function ProbefahrtPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("testDrivePage");
  const activeLocale = (await getLocale()) as Locale;
  const text = getCompanyText(activeLocale);

  return (
    <Section tone="base" border={false} className="pt-16 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>{t("eyebrow")}</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="text-ink-50 text-balance mt-6 text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl">
                {t("title")}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-ink-400 mt-6 max-w-md text-base leading-relaxed">
                {t("intro", { city: company.address.city })}
              </p>
            </Reveal>

            <Reveal
              delay={0.18}
              className="border-line-500/60 mt-10 flex items-start gap-3.5 border-t pt-8"
            >
              <CalendarClock className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-ink-200 text-sm leading-relaxed">{text.testDriveNote}</p>
            </Reveal>

            <Reveal delay={0.24} className="relative mt-10 aspect-[4/3]">
              <MediaFrame
                src={IMAGE_SLOTS.frontViewShowroom.path}
                alt={t("imageAlt")}
                className="h-full rounded-lg"
                devLabel="Test drive page — vehicle view"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm variant="probefahrt" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
