import type { ImageSlotKey } from "@/lib/content/images";
import type { Locale } from "@/i18n/routing";

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
  image: ImageSlotKey;
};

const de: ProcessStep[] = [
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

const en: ProcessStep[] = [
  {
    number: "01",
    title: "Enquiry",
    text: "You contact us by phone, email or the contact form — with your ideas about the right vehicle.",
    image: "vehicleDelivery",
  },
  {
    number: "02",
    title: "Consultation",
    text: "In a personal conversation, we clarify requirements, budget and possible financing or leasing options.",
    image: "consultingLounge",
  },
  {
    number: "03",
    title: "Test Drive",
    text: "By appointment, you experience the selected vehicle on a test drive.",
    image: "frontViewShowroom",
  },
  {
    number: "04",
    title: "Offer",
    text: "You receive a transparent offer, including any trade-in and financing.",
    image: "serviceLounge",
  },
  {
    number: "05",
    title: "Handover",
    text: "Registration, final detailing and the personal vehicle handover in the showroom.",
    image: "handoverKeys",
  },
];

export function getProcessSteps(locale: Locale): ProcessStep[] {
  return locale === "de" ? de : en;
}
