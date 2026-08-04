export const primaryNav = [
  { label: "Fahrzeuge", href: "/fahrzeuge" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Showroom", href: "/showroom" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerNav = {
  unternehmen: [
    { label: "Showroom", href: "/showroom" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Fahrzeuge", href: "/fahrzeuge" },
    { label: "Probefahrt", href: "/probefahrt" },
  ],
  service: [
    { label: "Kontakt", href: "/kontakt" },
    { label: "Finanzierung", href: "/leistungen#ankauf-finanzierung" },
    { label: "Werkstatt", href: "/leistungen#werkstatt" },
    { label: "Fahrzeugankauf", href: "/leistungen#ankauf-finanzierung" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export const primaryCta = { label: "Fahrzeug anfragen", href: "/kontakt" } as const;
export const secondaryCta = { label: "Probefahrt vereinbaren", href: "/probefahrt" } as const;
