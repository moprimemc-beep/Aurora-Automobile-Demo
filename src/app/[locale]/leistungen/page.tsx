import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCategoryBlock } from "@/components/sections/ServiceCategoryBlock";
import { getServiceCategories } from "@/lib/content/services";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Leistungen" : "Services";
  const description =
    locale === "de"
      ? "Fahrzeugverkauf, Ankauf, Finanzierung und Meisterwerkstatt: das vollständige Leistungsspektrum von Aurora Automobile in Düsseldorf."
      : "Vehicle sales, buy-back, financing and a master workshop: the full range of services from Aurora Automobile in Düsseldorf.";

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/leistungen"),
  };
}

const categoryImages = [
  "frontViewShowroom",
  "handoverHandshake",
  "workshopService",
  "serviceLounge",
] as const;

export default async function LeistungenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");
  const activeLocale = (await getLocale()) as Locale;
  const serviceCategories = getServiceCategories(activeLocale);

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />

      {serviceCategories.map((category, index) => (
        <ServiceCategoryBlock
          key={category.id}
          category={category}
          number={String(index + 1).padStart(2, "0")}
          image={categoryImages[index] ?? "frontViewShowroom"}
          reverse={index % 2 === 1}
          tone={index % 2 === 0 ? "base" : "raised"}
        />
      ))}
    </>
  );
}
