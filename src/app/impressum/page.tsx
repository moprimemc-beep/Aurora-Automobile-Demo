import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: `Impressum — ${company.shortName}`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section tone="base" border={false}>
        <Container>
          <div className="max-w-2xl">
            <div className="border-accent-500/30 bg-base-900 mb-12 rounded-sm border px-5 py-4">
              <p className="text-ink-400 text-sm leading-relaxed">
                Hinweis: Diese Website ist ein Demo- und Präsentationsprojekt. Unternehmensname,
                Kontaktdaten sowie Handelsregister- und Steuerangaben sind fiktiv und dienen
                ausschließlich Darstellungszwecken.
              </p>
            </div>

            <div className="prose-legal space-y-10">
              <section>
                <h2 className="text-ink-50 text-xl font-medium">Angaben gemäß § 5 TMG</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {company.name}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                  <br />
                  {company.address.country}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Vertreten durch</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Geschäftsführung: {company.management.join(", ")}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Kontakt</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Telefon: {company.contact.phone.display}
                  <br />
                  E-Mail: {company.contact.email.display}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Registereintrag</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: {company.legal.registerCourt}
                  <br />
                  Registernummer: {company.legal.commercialRegister}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Umsatzsteuer-ID</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  {company.legal.vatId}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  {company.management[0]}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">EU-Streitschlichtung</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                  (OS) bereit, abrufbar unter{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-400 hover:underline"
                  >
                    ec.europa.eu/consumers/odr
                  </a>
                  . Wir sind nicht verpflichtet und nicht bereit, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Haftung für Inhalte</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                  wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-ink-50 text-xl font-medium">Haftung für Links</h2>
                <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
                  jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
