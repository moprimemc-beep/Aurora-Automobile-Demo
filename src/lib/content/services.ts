import type { Locale } from "@/i18n/routing";

/**
 * Leistungen — ausschließlich die vom Auftraggeber bestätigte Liste.
 * Beschreibungstexte sind allgemeine, branchenübliche Erklärungen der
 * jeweiligen Leistung — keine erfundenen Preise, Fristen oder Zusagen.
 */

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  services: Service[];
};

export type Service = {
  slug: string;
  title: string;
  text: string;
  benefit: string;
};

const de: ServiceCategory[] = [
  {
    id: "verkauf",
    title: "Fahrzeugverkauf & Beratung",
    intro: "Von der ersten Auswahl bis zur fundierten Kaufentscheidung.",
    services: [
      {
        slug: "premium-gebrauchtwagen",
        title: "Premium Gebrauchtwagen",
        text: "Ausgewählte, geprüfte Fahrzeuge aus dem Premiumsegment — von jungen Gebrauchten bis zu gepflegten Einzelstücken.",
        benefit:
          "Sie erhalten ein Fahrzeug mit nachvollziehbarem Zustand statt anonymer Kleinanzeige.",
      },
      {
        slug: "neuwagenvermittlung",
        title: "Neuwagenvermittlung",
        text: "Wir vermitteln Neufahrzeuge passend zu Ihren Anforderungen und begleiten den Bestellprozess.",
        benefit: "Ein Ansprechpartner für Auswahl, Konfiguration und Bestellung.",
      },
      {
        slug: "fahrzeugbewertung",
        title: "Fahrzeugbewertung",
        text: "Digitale und persönliche Einschätzung des aktuellen Marktwerts Ihres Fahrzeugs.",
        benefit: "Eine transparente Grundlage für Verkauf, Inzahlungnahme oder Versicherung.",
      },
    ],
  },
  {
    id: "ankauf-finanzierung",
    title: "Ankauf & Finanzierung",
    intro: "Faire Konditionen für Ihr aktuelles und Ihr nächstes Fahrzeug.",
    services: [
      {
        slug: "fahrzeugankauf",
        title: "Fahrzeugankauf",
        text: "Wir kaufen Fahrzeuge unabhängig von einem Neukauf bei uns an.",
        benefit: "Ein unkomplizierter Weg, sich von einem Fahrzeug zu trennen.",
      },
      {
        slug: "inzahlungnahme",
        title: "Inzahlungnahme",
        text: "Ihr bisheriges Fahrzeug wird transparent bewertet und beim Neukauf angerechnet.",
        benefit: "Ein Termin, ein Ansprechpartner, ein Vorgang.",
      },
      {
        slug: "finanzierung",
        title: "Finanzierung",
        text: "Individuelle Finanzierungslösungen, abgestimmt auf Ihre persönliche Situation.",
        benefit: "Planbare monatliche Raten statt pauschaler Standardangebote.",
      },
      {
        slug: "leasing",
        title: "Leasing",
        text: "Flexible Leasingmodelle für privat und gewerblich genutzte Fahrzeuge.",
        benefit: "Mobilität ohne langfristige Kapitalbindung.",
      },
      {
        slug: "garantiepakete",
        title: "Garantiepakete",
        text: "Zusätzliche Garantieoptionen für mehr Planungssicherheit nach dem Kauf.",
        benefit: "Weniger finanzielles Risiko bei unerwarteten Reparaturen.",
      },
    ],
  },
  {
    id: "werkstatt",
    title: "Werkstatt & Service",
    intro: "Meisterwerkstatt für Wartung, Prüfung und Instandsetzung.",
    services: [
      {
        slug: "werkstattservice",
        title: "Werkstattservice",
        text: "Allgemeine Wartungs- und Reparaturarbeiten durch unser Werkstattteam.",
        benefit: "Ein vertrauter Betrieb für alle wiederkehrenden Arbeiten am Fahrzeug.",
      },
      {
        slug: "inspektionen",
        title: "Inspektionen",
        text: "Regelmäßige Inspektionen nach Herstellervorgaben.",
        benefit: "Werterhalt und Zuverlässigkeit über die gesamte Nutzungsdauer.",
      },
      {
        slug: "hu-au",
        title: "HU / AU",
        text: "Organisation und Vorbereitung von Hauptuntersuchung und Abgasuntersuchung.",
        benefit: "Ein Termin für Prüfung und notwendige Vorarbeiten.",
      },
      {
        slug: "reifenservice",
        title: "Reifenservice",
        text: "Reifenwechsel, Einlagerung und Beratung zur passenden Bereifung.",
        benefit: "Saisonaler Wechsel ohne eigenen Lageraufwand.",
      },
      {
        slug: "klimaservice",
        title: "Klimaservice",
        text: "Prüfung, Wartung und Befüllung der Fahrzeugklimaanlage.",
        benefit: "Zuverlässige Klimatisierung zu jeder Jahreszeit.",
      },
      {
        slug: "smart-repair",
        title: "Smart Repair",
        text: "Punktuelle Reparatur kleinerer Lack- und Karosserieschäden.",
        benefit: "Schnelle, gezielte Instandsetzung ohne vollständige Neulackierung.",
      },
      {
        slug: "unfallinstandsetzung",
        title: "Unfallinstandsetzung",
        text: "Fachgerechte Instandsetzung nach einem Unfallschaden.",
        benefit: "Ein Ansprechpartner von der Schadensaufnahme bis zur Übergabe.",
      },
    ],
  },
  {
    id: "pflege-zulassung",
    title: "Pflege & Zulassung",
    intro: "Der letzte Feinschliff — und der administrative Weg zum eigenen Kennzeichen.",
    services: [
      {
        slug: "fahrzeugaufbereitung",
        title: "Fahrzeugaufbereitung",
        text: "Professionelle Innen- und Außenaufbereitung vor Übergabe oder Verkauf.",
        benefit: "Ein Fahrzeug im bestmöglichen optischen Zustand.",
      },
      {
        slug: "fahrzeugpflege",
        title: "Fahrzeugpflege",
        text: "Regelmäßige Pflegeleistungen zum Werterhalt Ihres Fahrzeugs.",
        benefit: "Weniger Aufwand, langfristig gepflegter Zustand.",
      },
      {
        slug: "hol-und-bringservice",
        title: "Hol- und Bringservice",
        text: "Abholung und Rückgabe Ihres Fahrzeugs zu Werkstatt- oder Serviceterminen.",
        benefit: "Weniger Zeitaufwand für Termine rund um Ihr Fahrzeug.",
      },
      {
        slug: "zulassungsservice",
        title: "Zulassungsservice",
        text: "Übernahme der Zulassung Ihres neuen Fahrzeugs.",
        benefit: "Ein Behördengang weniger für Sie.",
      },
    ],
  },
];

const en: ServiceCategory[] = [
  {
    id: "verkauf",
    title: "Sales & Advice",
    intro: "From the first selection to a well-informed purchase decision.",
    services: [
      {
        slug: "premium-gebrauchtwagen",
        title: "Premium Used Cars",
        text: "Selected, inspected vehicles from the premium segment — from young used cars to well-kept individual pieces.",
        benefit: "You get a vehicle with a traceable condition, not an anonymous listing.",
      },
      {
        slug: "neuwagenvermittlung",
        title: "New Car Brokerage",
        text: "We source new vehicles that match your requirements and support you through the ordering process.",
        benefit: "One point of contact for selection, configuration and ordering.",
      },
      {
        slug: "fahrzeugbewertung",
        title: "Vehicle Valuation",
        text: "A digital and personal assessment of your vehicle's current market value.",
        benefit: "A transparent basis for sale, trade-in or insurance.",
      },
    ],
  },
  {
    id: "ankauf-finanzierung",
    title: "Buy-Back & Financing",
    intro: "Fair terms for your current vehicle and your next one.",
    services: [
      {
        slug: "fahrzeugankauf",
        title: "Vehicle Buy-Back",
        text: "We buy vehicles independent of any purchase you make with us.",
        benefit: "An uncomplicated way to part with a vehicle.",
      },
      {
        slug: "inzahlungnahme",
        title: "Trade-In",
        text: "Your current vehicle is assessed transparently and credited toward your new purchase.",
        benefit: "One appointment, one contact, one process.",
      },
      {
        slug: "finanzierung",
        title: "Financing",
        text: "Tailored financing solutions matched to your personal situation.",
        benefit: "Predictable monthly instalments instead of generic standard offers.",
      },
      {
        slug: "leasing",
        title: "Leasing",
        text: "Flexible leasing models for privately and commercially used vehicles.",
        benefit: "Mobility without long-term capital commitment.",
      },
      {
        slug: "garantiepakete",
        title: "Warranty Packages",
        text: "Additional warranty options for more peace of mind after purchase.",
        benefit: "Less financial risk from unexpected repairs.",
      },
    ],
  },
  {
    id: "werkstatt",
    title: "Workshop & Service",
    intro: "A master workshop for maintenance, inspection and repair.",
    services: [
      {
        slug: "werkstattservice",
        title: "Workshop Service",
        text: "General maintenance and repair work carried out by our workshop team.",
        benefit: "One trusted workshop for all recurring work on your vehicle.",
      },
      {
        slug: "inspektionen",
        title: "Inspections",
        text: "Regular inspections carried out to manufacturer specifications.",
        benefit: "Preserved value and reliability throughout the vehicle's life.",
      },
      {
        slug: "hu-au",
        title: "MOT / Emissions Test",
        text: "Organisation and preparation of the periodic roadworthiness (MOT) and emissions inspection.",
        benefit: "One appointment for testing and the necessary preparation.",
      },
      {
        slug: "reifenservice",
        title: "Tyre Service",
        text: "Tyre changes, storage and advice on the right tyres for your vehicle.",
        benefit: "Seasonal changeovers without needing your own storage space.",
      },
      {
        slug: "klimaservice",
        title: "Air Conditioning Service",
        text: "Inspection, maintenance and refilling of your vehicle's air conditioning system.",
        benefit: "Reliable climate control in every season.",
      },
      {
        slug: "smart-repair",
        title: "Smart Repair",
        text: "Targeted repair of minor paint and bodywork damage.",
        benefit: "Fast, precise repair without a full repaint.",
      },
      {
        slug: "unfallinstandsetzung",
        title: "Accident Repair",
        text: "Professional repair following accident damage.",
        benefit: "One point of contact from damage assessment to handover.",
      },
    ],
  },
  {
    id: "pflege-zulassung",
    title: "Detailing & Registration",
    intro: "The final finishing touch — and the administrative path to your own plates.",
    services: [
      {
        slug: "fahrzeugaufbereitung",
        title: "Vehicle Detailing",
        text: "Professional interior and exterior detailing before handover or sale.",
        benefit: "A vehicle in the best possible visual condition.",
      },
      {
        slug: "fahrzeugpflege",
        title: "Vehicle Care",
        text: "Regular care services to preserve your vehicle's value.",
        benefit: "Less effort, a well-kept vehicle over the long term.",
      },
      {
        slug: "hol-und-bringservice",
        title: "Pick-Up & Drop-Off Service",
        text: "Collection and return of your vehicle for workshop or service appointments.",
        benefit: "Less time spent on appointments around your vehicle.",
      },
      {
        slug: "zulassungsservice",
        title: "Registration Service",
        text: "We handle the registration of your new vehicle.",
        benefit: "One less trip to the authorities for you.",
      },
    ],
  },
];

export function getServiceCategories(locale: Locale): ServiceCategory[] {
  return locale === "de" ? de : en;
}

export function getAllServices(locale: Locale): Service[] {
  return getServiceCategories(locale).flatMap((c) => c.services);
}

/** Slugs sind locale-unabhängig — dienen als stabiler Schlüssel. */
export const featuredServiceSlugs = [
  "premium-gebrauchtwagen",
  "finanzierung",
  "inzahlungnahme",
  "werkstattservice",
  "fahrzeugaufbereitung",
];
