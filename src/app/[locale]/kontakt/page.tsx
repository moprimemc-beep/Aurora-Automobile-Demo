import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MapLink } from "@/components/ui/MapLink";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { company, getCompanyText } from "@/lib/content/company";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "de" ? "Kontakt" : "Contact";
  const description =
    locale === "de"
      ? `Kontaktieren Sie ${company.shortName} in ${company.address.city} — telefonisch, per E-Mail oder über das Kontaktformular.`
      : `Get in touch with ${company.shortName} in ${company.address.city} — by phone, email or the contact form.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/kontakt"),
  };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
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

            <Reveal delay={0.18} className="border-line-500/60 mt-10 space-y-6 border-t pt-8">
              <div className="flex items-start gap-3.5">
                <MapPin className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <address className="text-ink-200 text-sm leading-relaxed not-italic">
                  {company.name}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </address>
              </div>
              <div className="flex items-center gap-3.5">
                <Phone className="text-accent-500 h-5 w-5 shrink-0" aria-hidden="true" />
                <a
                  href={company.contact.phone.href}
                  className="text-ink-200 hover:text-accent-400 text-sm"
                >
                  {company.contact.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-3.5">
                <Mail className="text-accent-500 h-5 w-5 shrink-0" aria-hidden="true" />
                <a
                  href={company.contact.email.href}
                  className="text-ink-200 hover:text-accent-400 text-sm"
                >
                  {company.contact.email.display}
                </a>
              </div>
              <div className="flex items-start gap-3.5">
                <Clock className="text-accent-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <ul className="text-ink-200 space-y-1 text-sm">
                  {text.hoursSales.map((h) => (
                    <li key={h.day} className="flex gap-4">
                      <span className="text-ink-600 w-24 shrink-0">{h.day}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <MapLink />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
