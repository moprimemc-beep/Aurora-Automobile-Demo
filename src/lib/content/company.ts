/**
 * Bestätigte Unternehmensdaten — Aurora Automobile GmbH.
 * Laut Auftraggeber vollständig fiktiv und ausschließlich für Demo-,
 * Design- und Präsentationszwecke. Vor echtem Launch prüfen (siehe README).
 */

export const company = {
  name: "Aurora Automobile GmbH",
  shortName: "Aurora Automobile",
  slogan: "Premiumfahrzeuge. Persönlich beraten. Vertrauen erfahren.",
  description:
    "Aurora Automobile ist Ihr Premium-Autohaus für hochwertige Neu- und Gebrauchtwagen. Mit persönlicher Beratung, transparenten Finanzierungsangeboten und einem modernen Servicecenter begleiten wir unsere Kunden von der ersten Probefahrt bis weit über den Fahrzeugkauf hinaus.",
  foundingYear: 2016,
  employeeCount: 27,
  vehicleStockCount: 180,

  address: {
    street: "Berliner Allee 128",
    zip: "40212",
    city: "Düsseldorf",
    country: "Deutschland",
    countryCode: "DE",
  },

  contact: {
    phone: { display: "0211 947 58 300", href: "tel:+4921194758300" },
    mobile: { display: "0176 456 82 913", href: "tel:+4917645682913" },
    email: { display: "info@aurora-automobile.de", href: "mailto:info@aurora-automobile.de" },
    salesEmail: {
      display: "verkauf@aurora-automobile.de",
      href: "mailto:verkauf@aurora-automobile.de",
    },
    serviceEmail: {
      display: "service@aurora-automobile.de",
      href: "mailto:service@aurora-automobile.de",
    },
    workshopEmail: {
      display: "werkstatt@aurora-automobile.de",
      href: "mailto:werkstatt@aurora-automobile.de",
    },
    financeEmail: {
      display: "finanzierung@aurora-automobile.de",
      href: "mailto:finanzierung@aurora-automobile.de",
    },
    website: "https://www.aurora-automobile.de",
  },

  management: ["Lukas Berger", "Marie Schneider"],

  legal: {
    commercialRegister: "HRB 98452",
    registerCourt: "Amtsgericht Düsseldorf",
    vatId: "DE327845619",
  },

  hoursSales: [
    { day: "Montag", hours: "09:00 – 18:30 Uhr" },
    { day: "Dienstag", hours: "09:00 – 18:30 Uhr" },
    { day: "Mittwoch", hours: "09:00 – 18:30 Uhr" },
    { day: "Donnerstag", hours: "09:00 – 18:30 Uhr" },
    { day: "Freitag", hours: "09:00 – 18:30 Uhr" },
    { day: "Samstag", hours: "09:00 – 15:00 Uhr" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],

  hoursWorkshop: [
    { day: "Montag", hours: "07:30 – 17:30 Uhr" },
    { day: "Dienstag", hours: "07:30 – 17:30 Uhr" },
    { day: "Mittwoch", hours: "07:30 – 17:30 Uhr" },
    { day: "Donnerstag", hours: "07:30 – 17:30 Uhr" },
    { day: "Freitag", hours: "07:30 – 17:30 Uhr" },
    { day: "Samstag", hours: "08:00 – 12:00 Uhr" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],

  testDriveNote: "Montag bis Samstag nach Terminvereinbarung.",

  paymentMethods: [
    "EC-Karte",
    "Visa",
    "Mastercard",
    "Banküberweisung",
    "Finanzierung",
    "Leasing",
  ],

  specializations: [
    "Premiumfahrzeuge",
    "Junge Gebrauchtwagen",
    "SUV",
    "Limousinen",
    "Kombis",
    "Sportwagen",
    "Elektrofahrzeuge",
    "Hybridfahrzeuge",
  ],

  values: [
    "Vertrauen",
    "Qualität",
    "Transparenz",
    "Nachhaltigkeit",
    "Innovation",
    "Kundennähe",
    "Zuverlässigkeit",
    "Leidenschaft für Automobile",
  ],

  reasons: [
    {
      title: "Qualitätsgeprüfte Fahrzeuge",
      text: "Jedes Fahrzeug durchläuft eine sorgfältige Prüfung, bevor es in unseren Bestand aufgenommen wird.",
    },
    {
      title: "Transparente Fahrzeughistorie",
      text: "Sie erhalten klare, nachvollziehbare Informationen zu jedem Fahrzeug.",
    },
    {
      title: "Persönliche Beratung",
      text: "Unser Team nimmt sich Zeit für Ihre Fragen — von der Auswahl bis zur Übergabe.",
    },
    {
      title: "Faire Inzahlungnahme",
      text: "Wir bewerten Ihr aktuelles Fahrzeug transparent und fair.",
    },
    {
      title: "Individuelle Finanzierung",
      text: "Gemeinsam finden wir eine Finanzierungs- oder Leasinglösung, die zu Ihnen passt.",
    },
    {
      title: "Meisterwerkstatt",
      text: "Wartung, Reparatur und Aufbereitung aus einer Hand — direkt vor Ort.",
    },
    {
      title: "Fahrzeuggarantie",
      text: "Zusätzliche Sicherheit durch unsere Garantiepakete.",
    },
    {
      title: "Digitale Fahrzeugbewertung",
      text: "Erste Einschätzung Ihres Fahrzeugs unkompliziert und digital.",
    },
    {
      title: "Schnelle Zulassung",
      text: "Wir übernehmen den Zulassungsservice für Sie.",
    },
    {
      title: "Premium Kundenservice",
      text: "Betreuung, die über den Fahrzeugkauf hinausgeht.",
    },
  ],

  socials: {
    instagram: { label: "@auroraautomobile", href: "https://instagram.com/auroraautomobile" },
    facebook: { label: "Aurora Automobile", href: "https://facebook.com/auroraautomobile" },
    linkedin: {
      label: "Aurora Automobile GmbH",
      href: "https://linkedin.com/company/aurora-automobile",
    },
    youtube: { label: "Aurora Automobile", href: "https://youtube.com/@auroraautomobile" },
    tiktok: { label: "@auroraautomobile", href: "https://tiktok.com/@auroraautomobile" },
  },

  googleProfile: {
    rating: 4.9,
    reviewCount: 327,
  },
} as const;

export const siteUrl = "https://www.aurora-automobile.de";
