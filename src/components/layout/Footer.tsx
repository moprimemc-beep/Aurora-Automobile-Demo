import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  InstagramGlyph,
  FacebookGlyph,
  LinkedinGlyph,
  YoutubeGlyph,
  TiktokGlyph,
} from "@/components/ui/SocialIcons";
import { company, getCompanyText } from "@/lib/content/company";
import { footerNav } from "@/lib/content/nav";
import type { Locale } from "@/i18n/routing";

const socialIcons = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  linkedin: LinkedinGlyph,
  youtube: YoutubeGlyph,
  tiktok: TiktokGlyph,
} as const;

/** Manche Footer-Links teilen sich Labels mit der Hauptnavigation (nav.*). */
const navSharedKeys = new Set(["vehicles", "services", "showroom", "contact"]);

export async function Footer() {
  const year = new Date().getFullYear();
  const locale = (await getLocale()) as Locale;
  const text = getCompanyText(locale);
  const t = await getTranslations();

  function label(key: string) {
    return navSharedKeys.has(key) ? t(`nav.${key}`) : t(`footer.${key}`);
  }

  return (
    <footer className="bg-black">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="text-ink-200 mt-5 max-w-xs text-sm leading-relaxed">{text.slogan}</p>
            <div className="mt-6 flex gap-3">
              {Object.entries(company.socials).map(([key, social]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.socialAria", { platform: key })}
                    className="border-line-500 text-ink-400 hover:border-accent-500 hover:text-accent-400 flex h-10 w-10 items-center justify-center rounded-sm border transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label={t("footer.companyHeading")}>
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              {t("footer.companyHeading")}
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-200 hover:text-accent-400 text-sm transition-colors"
                  >
                    {label(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.serviceHeading")}>
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              {t("footer.serviceHeading")}
            </h3>
            <ul className="space-y-3">
              {footerNav.service.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-200 hover:text-accent-400 text-sm transition-colors"
                  >
                    {label(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              {t("footer.contactHeading")}
            </h3>
            <address className="text-ink-200 space-y-1.5 text-sm not-italic">
              <p>{company.name}</p>
              <p>{company.address.street}</p>
              <p>
                {company.address.zip} {company.address.city}
              </p>
              <p className="pt-3">
                <a href={company.contact.phone.href} className="hover:text-accent-400">
                  {company.contact.phone.display}
                </a>
              </p>
              <p>
                <a href={company.contact.email.href} className="hover:text-accent-400">
                  {company.contact.email.display}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-line-500/60 mt-14 border-t pt-8">
          <p className="text-ink-600 font-mono text-lg tracking-tight sm:text-xl">
            {t("footer.closingLine", { city: company.address.city })}
          </p>
        </div>

        <div className="border-line-500/60 text-ink-600 mt-8 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights", { year, name: company.name })}</p>
          <nav aria-label={t("footer.legalAria")} className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent-400">
                {label(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
