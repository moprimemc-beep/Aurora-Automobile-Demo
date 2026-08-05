import { siteUrl } from "@/lib/content/company";
import { routing } from "@/i18n/routing";

/**
 * Baut canonical + hreflang-Alternates für eine Seite. `path` ist der
 * locale-unabhängige Pfad (z. B. "/fahrzeuge", "" für die Startseite).
 */
export function buildAlternates(locale: string, path: string) {
  const suffix = path ? path : "";
  const canonical = locale === routing.defaultLocale ? suffix || "/" : `/${locale}${suffix}`;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = l === routing.defaultLocale ? suffix || "/" : `/${l}${suffix}`;
  }
  languages["x-default"] = suffix || "/";

  return {
    canonical,
    languages,
  };
}

export { siteUrl };
