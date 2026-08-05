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
    title: locale === "de" ? "Impressum" : "Imprint",
    robots: { index: false, follow: true },
    alternates: buildAlternates(locale, "/impressum"),
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("impressum");

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} />
      <Section tone="base" border={false}>
        <Container>
          <div className="max-w-2xl">
            <div className="border-accent-500/30 bg-base-900 mb-12 rounded-sm border px-5 py-4">
              <p className="text-ink-400 text-sm leading-relaxed">{t("notice")}</p>
            </div>

            <div className="prose-legal space-y-10">
              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section1Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {company.name}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section2Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {t("section2Text", { management: company.management.join(", ") })}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section3Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {t("section3Phone")}: {company.contact.phone.display}
                  <br />
                  {t("section3Email")}: {company.contact.email.display}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section4Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {t("section4Text1")}
                  <br />
                  {t("section4Court")}: {company.legal.registerCourt}
                  <br />
                  {t("section4Number")}: {company.legal.commercialRegister}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section5Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {t("section5Text")}
                  <br />
                  {company.legal.vatId}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section6Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {company.management[0]}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section7Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {t.rich("section7Text", {
                    link: (chunks) => (
                      <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-400 hover:underline"
                      >
                        {chunks}
                      </a>
                    ),
                  })}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section8Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section8Text")}</p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">{t("section9Title")}</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">{t("section9Text")}</p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
