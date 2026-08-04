/**
 * FAHRZEUGBESTAND
 * ------------------------------------------------------------------------
 * Es liegen aktuell keine strukturierten Einzelfahrzeugdaten (Modell,
 * Baujahr, Laufleistung, Preis) vor — nur die bestätigte Gesamtzahl
 * "über 180 sofort verfügbare Fahrzeuge" sowie die Spezialisierungen.
 *
 * Gemäß Vorgabe werden hier keine Fahrzeuge, Preise oder Verfügbarkeiten
 * erfunden. Die Typstruktur ist vollständig vorbereitet: Sobald ein
 * Bestands-Feed oder eine Datenquelle bereitsteht, füllt sich diese Datei
 * (oder ein Fetch gegen ein DMS/CRM) und VehicleGrid/VehicleFilter/
 * Detailseiten funktionieren ohne weitere Anpassung.
 * ------------------------------------------------------------------------
 */

export type FuelType = "Benzin" | "Diesel" | "Elektro" | "Hybrid";

export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  category: string;
  year?: number;
  mileageKm?: number;
  powerKw?: number;
  fuelType?: FuelType;
  transmission?: string;
  priceEur?: number;
  color?: string;
  imagePath: string;
  gallery?: string[];
  description?: string;
  features?: string[];
};

export const vehicles: Vehicle[] = [];

export const vehicleFilterOptions = {
  categories: [] as string[],
  fuelTypes: [] as FuelType[],
};
