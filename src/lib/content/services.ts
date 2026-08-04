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

export const serviceCategories: ServiceCategory[] = [
  {
    id: "verkauf",
    title: "Fahrzeugverkauf & Beratung",
    intro: "Von der ersten Auswahl bis zur fundierten Kaufentscheidung.",
    services: [
      {
        slug: "premium-gebrauchtwagen",
        title: "Premium Gebrauchtwagen",
        text: "Ausgewählte, geprüfte Fahrzeuge aus dem Premiumsegment — von jungen Gebrauchten bis zu gepflegten Einzelstücken.",
        benefit: "Sie erhalten ein Fahrzeug mit nachvollziehbarem Zustand statt anonymer Kleinanzeige.",
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

export const allServices: Service[] = serviceCategories.flatMap((c) => c.services);

export const featuredServiceSlugs = [
  "premium-gebrauchtwagen",
  "finanzierung",
  "inzahlungnahme",
  "werkstattservice",
  "fahrzeugaufbereitung",
];
