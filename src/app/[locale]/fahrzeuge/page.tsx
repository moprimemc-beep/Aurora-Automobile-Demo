import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { VehicleFilter } from "@/components/vehicles/VehicleFilter";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { Reveal } from "@/components/motion/Reveal";
import { company, getCompanyText } from "@/lib/content/company";
import { vehicles } from "@/lib/content/vehicles";
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
  const title = locale === "de" ? "Fahrzeuge" : "Vehicles";
  const description =
    locale === "de"
      ? `Über ${company.vehicleStockCount} Fahrzeuge im Bestand: ${text.specializations.join(", ")}. Persönliche Beratung im Showroom in ${company.address.city}.`
      : `Over ${company.vehicleStockCount} vehicles in stock: ${text.specializations.join(", ")}. Personal advice at our showroom in ${company.address.city}.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/fahrzeuge"),
  };
}

export default async function FahrzeugePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vehiclesPage");
  const activeLocale = (await getLocale()) as Locale;
  const text = getCompanyText(activeLocale);

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro", { count: company.vehicleStockCount })}
      />

      <Section tone="base">
        <Container>
          <Reveal className="relative mb-14 aspect-[21/9]">
            <MediaFrame
              src={IMAGE_SLOTS.exteriorDay.path}
              alt={t("exteriorAlt")}
              priority
              className="h-full rounded-lg"
              devLabel="Showroom exterior"
            />
          </Reveal>

          <Reveal className="mb-10">
            <p className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              {t("specializationLabel")}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {text.specializations.map((spec) => (
                <Badge key={spec}>{spec}</Badge>
              ))}
            </div>
          </Reveal>

          <VehicleFilter />
          <div className="mt-10">
            <VehicleGrid vehicles={vehicles} />
          </div>
        </Container>
      </Section>
    </>
  );
}
