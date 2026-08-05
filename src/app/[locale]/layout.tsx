import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company, getCompanyText, siteUrl } from "@/lib/content/company";
import { getOrganizationSchema } from "@/lib/schema";
import { buildAlternates } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const text = getCompanyText(locale as Locale);
  const title = `${company.shortName} — ${
    locale === "de" ? "Premium-Autohaus" : "Premium Dealership"
  } in ${company.address.city}`;
  const alternates = buildAlternates(locale, "");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${company.shortName}`,
    },
    description: text.description,
    keywords:
      locale === "de"
        ? [
            "Autohaus Düsseldorf",
            "Premium Gebrauchtwagen Düsseldorf",
            "Fahrzeuge Düsseldorf",
            "Probefahrt Düsseldorf",
            "Fahrzeugankauf Düsseldorf",
            "Finanzierung Fahrzeug Düsseldorf",
          ]
        : [
            "Car dealership Düsseldorf",
            "Premium used cars Düsseldorf",
            "Vehicles Düsseldorf",
            "Test drive Düsseldorf",
            "Vehicle buy-back Düsseldorf",
            "Car financing Düsseldorf",
          ],
    alternates,
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      siteName: company.shortName,
      title,
      description: text.description,
      url: alternates.canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: text.description,
    },
    robots: { index: true, follow: true },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#07080a",
  colorScheme: "dark",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const organizationSchema = getOrganizationSchema(locale as Locale);
  const t = await getTranslations({ locale, namespace: "common" });
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="dark">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <a href="#main-content" className="skip-link">
            {t("skipToContent")}
          </a>
          <Navbar />
          <main id="main-content" className="pt-[72px]">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
