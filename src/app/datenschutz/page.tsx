import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { company } from "@/lib/content/company";

export const metadata: Metadata = {
  title: `Datenschutz — ${company.shortName}`,
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section tone="base" border={false}>
        <Container>
          <div className="max-w-2xl space-y-10">
            <div className="border-accent-500/30 bg-base-900 rounded-sm border px-5 py-4">
              <p className="text-ink-400 text-sm leading-relaxed">
                Hinweis: Diese Website ist ein Demo- und Präsentationsprojekt. Unternehmensangaben
                sind fiktiv. Diese Erklärung beschreibt die tatsächliche technische
                Datenverarbeitung dieser Website und dient als Grundlage für eine rechtliche
                Prüfung vor einem echten Launch (siehe README, Abschnitt „Launch-Checkliste“).
              </p>
            </div>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">1. Verantwortlicher</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                {company.name}
                <br />
                {company.address.street}, {company.address.zip} {company.address.city}
                <br />
                E-Mail: {company.contact.email.display}
                <br />
                Telefon: {company.contact.phone.display}
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">2. Hosting und Server-Logfiles</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter automatisch technische
                Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
                Seite, verwendeter Browser), um den Betrieb der Website technisch bereitzustellen
                und abzusichern (Art. 6 Abs. 1 lit. f DSGVO). Der konkrete Hosting-Anbieter wird
                vor Live-Schaltung an dieser Stelle ergänzt.
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">3. Kontaktformular</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Wenn Sie das Kontakt- oder Probefahrtformular nutzen, verarbeiten wir die von
                Ihnen eingegebenen Daten (u. a. Name, E-Mail-Adresse, Telefonnummer, Nachricht)
                ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Eine
                Weitergabe an Dritte erfolgt nicht, sofern dies nicht zur Bearbeitung Ihrer Anfrage
                erforderlich ist (z. B. Versand über einen technischen E-Mail-Dienstleister).
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">4. Cookies und Tracking</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Diese Website setzt aktuell keine Analyse-, Marketing- oder Tracking-Cookies ein.
                Sollten zu einem späteren Zeitpunkt entsprechende Dienste integriert werden,
                erfolgt dies erst nach vorheriger, informierter Einwilligung über ein
                Consent-Management-Tool sowie einer Aktualisierung dieser Erklärung.
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">5. Externe Links und Karten</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Links zu externen Diensten (z. B. Google Maps, soziale Netzwerke) öffnen die
                jeweilige Plattform in einem neuen Tab. Es werden keine externen Inhalte
                automatisch eingebettet oder Daten an Dritte übertragen, bevor Sie aktiv auf einen
                solchen Link klicken.
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">6. Ihre Rechte</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer
                personenbezogenen Daten. Zudem steht Ihnen ein Beschwerderecht bei einer
                Datenschutzaufsichtsbehörde zu. Wenden Sie sich hierzu an{" "}
                {company.contact.email.display}.
              </p>
            </section>

            <section>
              <h2 className="text-ink-50 text-xl font-medium">7. Speicherdauer</h2>
              <p className="text-ink-200 mt-3 text-sm leading-relaxed">
                Über das Kontaktformular übermittelte Daten werden nur so lange gespeichert, wie
                es zur Bearbeitung Ihrer Anfrage sowie zur Erfüllung gesetzlicher
                Aufbewahrungspflichten erforderlich ist.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
