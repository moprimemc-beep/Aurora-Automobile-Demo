/**
 * Nur Struktur/Hrefs — Labels kommen aus den Übersetzungsdateien
 * (messages/en.json, messages/de.json, Namespace "nav"/"footer").
 */

export const primaryNav = [
  { key: "vehicles", href: "/fahrzeuge" },
  { key: "services", href: "/leistungen" },
  { key: "showroom", href: "/showroom" },
  { key: "contact", href: "/kontakt" },
] as const;

export const footerNav = {
  company: [
    { key: "showroom", href: "/showroom" },
    { key: "services", href: "/leistungen" },
    { key: "vehicles", href: "/fahrzeuge" },
    { key: "testDrive", href: "/probefahrt" },
  ],
  service: [
    { key: "contact", href: "/kontakt" },
    { key: "financing", href: "/leistungen#ankauf-finanzierung" },
    { key: "workshop", href: "/leistungen#werkstatt" },
    { key: "buyback", href: "/leistungen#ankauf-finanzierung" },
  ],
  legal: [
    { key: "imprint", href: "/impressum" },
    { key: "privacy", href: "/datenschutz" },
  ],
} as const;

export const primaryCtaHref = "/kontakt";
export const secondaryCtaHref = "/probefahrt";
