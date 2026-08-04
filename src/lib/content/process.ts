import type { ImageSlotKey } from "@/lib/content/images";

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
  image: ImageSlotKey;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Anfrage",
    text: "Sie kontaktieren uns telefonisch, per E-Mail oder über das Kontaktformular — mit Ihren Vorstellungen zum passenden Fahrzeug.",
    image: "vehicleDelivery",
  },
  {
    number: "02",
    title: "Beratung",
    text: "Im persönlichen Gespräch klären wir Anforderungen, Budget und mögliche Finanzierungs- oder Leasingoptionen.",
    image: "consultingLounge",
  },
  {
    number: "03",
    title: "Probefahrt",
    text: "Nach Terminvereinbarung erleben Sie das ausgewählte Fahrzeug bei einer Probefahrt.",
    image: "frontViewShowroom",
  },
  {
    number: "04",
    title: "Angebot",
    text: "Sie erhalten ein transparentes Angebot inklusive möglicher Inzahlungnahme und Finanzierung.",
    image: "serviceLounge",
  },
  {
    number: "05",
    title: "Übergabe",
    text: "Zulassung, letzte Aufbereitung und die persönliche Fahrzeugübergabe im Showroom.",
    image: "handoverKeys",
  },
];
