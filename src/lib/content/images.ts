import type { Locale } from "@/i18n/routing";

/**
 * BILD-MANIFEST
 * ------------------------------------------------------------------------
 * Feste, dokumentierte Bild-Slots. Jede Komponente referenziert einen Pfad
 * aus dieser Liste. Solange die reale Datei nicht in public/ liegt, rendert
 * <MediaFrame> automatisch einen hochwertigen, markentypischen Platzhalter
 * statt eines kaputten Bildes (siehe src/components/ui/MediaFrame.tsx).
 *
 * Workflow: Bilddateien werden später per GitHub "Add file" in public/images/
 * hochgeladen. Sobald eine Datei unter dem hier definierten Pfad liegt,
 * wird sie automatisch anstelle des Platzhalters ausgespielt — es ist keine
 * Code-Änderung nötig. Die exakte Zuordnung der bereits gesichteten Motive
 * zu diesen Pfaden ist in der README dokumentiert.
 * ------------------------------------------------------------------------
 */

export const IMAGE_SLOTS = {
  logoDark: {
    path: "/images/logo/aurora-logo-dark.png",
    alt: { en: "Aurora Automobile — logo", de: "Aurora Automobile — Logo" },
  },
  logoLight: {
    path: "/images/logo/aurora-logo-light.png",
    alt: { en: "Aurora Automobile — logo", de: "Aurora Automobile — Logo" },
  },
  heroSpotlight: {
    path: "/images/showroom/vehicle-spotlight.jpg",
    alt: {
      en: "Vehicle staged on a lit platform in the Aurora showroom at night",
      de: "Fahrzeug inszeniert auf beleuchteter Plattform im Aurora Showroom bei Nacht",
    },
  },
  exteriorDay: {
    path: "/images/showroom/exterior-day.jpg",
    alt: {
      en: "Aurora Automobile showroom building in Düsseldorf",
      de: "Aurora Automobile Showroom-Gebäude am Standort Düsseldorf",
    },
  },
  exteriorNight: {
    path: "/images/showroom/exterior-night.jpg",
    alt: {
      en: "Aurora Automobile showroom at night, illuminated facade",
      de: "Aurora Automobile Showroom bei Nacht, beleuchtete Fassade",
    },
  },
  interiorHall: {
    path: "/images/showroom/interior-hall.jpg",
    alt: {
      en: "Showroom floor at Aurora with several vehicles on display",
      de: "Ausstellungsfläche im Aurora Showroom mit mehreren Fahrzeugen",
    },
  },
  frontViewShowroom: {
    path: "/images/vehicles/front-view-showroom.jpg",
    alt: {
      en: "Vehicle front view in the showroom hall",
      de: "Fahrzeug-Frontalansicht in der Ausstellungshalle",
    },
  },
  interiorDetail: {
    path: "/images/vehicles/interior-detail.jpg",
    alt: {
      en: "Close-up of a vehicle interior with steering wheel and controls",
      de: "Detailaufnahme eines Fahrzeuginterieurs mit Lenkrad und Bedienfeld",
    },
  },
  consultingLounge: {
    path: "/images/showroom/consulting-lounge.jpg",
    alt: { en: "Consultation area at the Aurora showroom", de: "Beratungsbereich im Aurora Showroom" },
  },
  receptionLounge: {
    path: "/images/showroom/reception-lounge.jpg",
    alt: {
      en: "Reception and lounge area at the Aurora showroom",
      de: "Empfangs- und Loungebereich im Aurora Showroom",
    },
  },
  vehicleDelivery: {
    path: "/images/showroom/vehicle-delivery.jpg",
    alt: {
      en: "Vehicle delivery at the Aurora showroom",
      de: "Anlieferung eines Fahrzeugs am Aurora Showroom",
    },
  },
  workshopService: {
    path: "/images/showroom/workshop-service.jpg",
    alt: {
      en: "Workshop technicians at work in the Aurora master workshop",
      de: "Werkstattarbeiten in der Aurora Meisterwerkstatt",
    },
  },
  workshopHandover: {
    path: "/images/showroom/workshop-handover.jpg",
    alt: { en: "Key handover in the workshop area", de: "Schlüsselübergabe im Werkstattbereich" },
  },
  serviceLounge: {
    path: "/images/showroom/service-lounge.jpg",
    alt: {
      en: "Customer waiting area with service overview",
      de: "Kunden-Wartebereich mit Service-Übersicht",
    },
  },
  handoverKeys: {
    path: "/images/showroom/handover-keys.jpg",
    alt: { en: "Vehicle handover at the Aurora showroom", de: "Fahrzeugübergabe im Aurora Showroom" },
  },
  handoverHandshake: {
    path: "/images/showroom/handover-handshake.jpg",
    alt: {
      en: "Conclusion of a consultation at the Aurora showroom",
      de: "Abschluss eines Beratungsgesprächs im Aurora Showroom",
    },
  },
} as const;

export type ImageSlotKey = keyof typeof IMAGE_SLOTS;

export function imageAlt(key: ImageSlotKey, locale: Locale): string {
  return IMAGE_SLOTS[key].alt[locale];
}
