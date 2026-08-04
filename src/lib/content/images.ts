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
    alt: "Aurora Automobile — Logo",
  },
  logoLight: {
    path: "/images/logo/aurora-logo-light.png",
    alt: "Aurora Automobile — Logo",
  },
  heroSpotlight: {
    path: "/images/showroom/vehicle-spotlight.jpg",
    alt: "Fahrzeug inszeniert auf beleuchteter Plattform im Aurora Showroom bei Nacht",
  },
  exteriorDay: {
    path: "/images/showroom/exterior-day.jpg",
    alt: "Aurora Automobile Showroom-Gebäude am Standort Düsseldorf",
  },
  exteriorNight: {
    path: "/images/showroom/exterior-night.jpg",
    alt: "Aurora Automobile Showroom bei Nacht, beleuchtete Fassade",
  },
  interiorHall: {
    path: "/images/showroom/interior-hall.jpg",
    alt: "Ausstellungsfläche im Aurora Showroom mit mehreren Fahrzeugen",
  },
  frontViewShowroom: {
    path: "/images/vehicles/front-view-showroom.jpg",
    alt: "Fahrzeug-Frontalansicht in der Ausstellungshalle",
  },
  interiorDetail: {
    path: "/images/vehicles/interior-detail.jpg",
    alt: "Detailaufnahme eines Fahrzeuginterieurs mit Lenkrad und Bedienfeld",
  },
  consultingLounge: {
    path: "/images/showroom/consulting-lounge.jpg",
    alt: "Beratungsbereich im Aurora Showroom",
  },
  receptionLounge: {
    path: "/images/showroom/reception-lounge.jpg",
    alt: "Empfangs- und Loungebereich im Aurora Showroom",
  },
  vehicleDelivery: {
    path: "/images/showroom/vehicle-delivery.jpg",
    alt: "Anlieferung eines Fahrzeugs am Aurora Showroom",
  },
  workshopService: {
    path: "/images/showroom/workshop-service.jpg",
    alt: "Werkstattarbeiten in der Aurora Meisterwerkstatt",
  },
  workshopHandover: {
    path: "/images/showroom/workshop-handover.jpg",
    alt: "Schlüsselübergabe im Werkstattbereich",
  },
  serviceLounge: {
    path: "/images/showroom/service-lounge.jpg",
    alt: "Kunden-Wartebereich mit Service-Übersicht",
  },
  handoverKeys: {
    path: "/images/showroom/handover-keys.jpg",
    alt: "Fahrzeugübergabe im Aurora Showroom",
  },
  handoverHandshake: {
    path: "/images/showroom/handover-handshake.jpg",
    alt: "Abschluss eines Beratungsgesprächs im Aurora Showroom",
  },
} as const;

export type ImageSlotKey = keyof typeof IMAGE_SLOTS;
