import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  InstagramGlyph,
  FacebookGlyph,
  LinkedinGlyph,
  YoutubeGlyph,
  TiktokGlyph,
} from "@/components/ui/SocialIcons";
import { company } from "@/lib/content/company";
import { footerNav } from "@/lib/content/nav";

const socialIcons = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  linkedin: LinkedinGlyph,
  youtube: YoutubeGlyph,
  tiktok: TiktokGlyph,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="text-ink-200 mt-5 max-w-xs text-sm leading-relaxed">{company.slogan}</p>
            <div className="mt-6 flex gap-3">
              {Object.entries(company.socials).map(([key, social]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                return (
                  <a
                    key={key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Aurora Automobile auf ${key}`}
                    className="border-line-500 text-ink-400 hover:border-accent-500 hover:text-accent-400 flex h-10 w-10 items-center justify-center rounded-sm border transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Unternehmen">
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerNav.unternehmen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-200 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service">
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              Service
            </h3>
            <ul className="space-y-3">
              {footerNav.service.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-200 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="tracking-label text-ink-600 mb-4 font-mono text-xs uppercase">
              Kontakt
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
            {company.address.city}. Für Bewegung mit Anspruch.
          </p>
        </div>

        <div className="border-line-500/60 text-ink-600 mt-8 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent-400">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
