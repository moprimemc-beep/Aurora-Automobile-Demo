import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Datenschutz" : "Privacy Policy",
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/datenschutz"),
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("datenschutz");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} />
      <Section tone="base" border={false}>
        <Container>
          <div className="max-w-2xl space-y-10">
            <div className="border-accent-500/30 bg-base-900 rounded-sm border px-5 py-4">
              <p className="text-ink-400 text-sm leading-relaxed">{t("notice")}</p>
            </div>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section1Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                {company.name}
                <br />
                {company.address.street}, {company.address.zip} {company.address.city}
                <br />
                {t("section1Email")}: {company.contact.email.display}
                <br />
                {t("section1Phone")}: {company.contact.phone.display}
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section2Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section2Text")}</p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section3Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section3Text")}</p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section4Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section4Text")}</p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section5Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section5Text")}</p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section6Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                {t("section6Text", { email: company.contact.email.display })}
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">{t("section7Title")}</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section7Text")}</p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
