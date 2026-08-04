"use client";

import { vehicleFilterOptions } from "@/lib/content/vehicles";

/**
 * Wird erst aktiv, sobald echte, strukturierte Bestandsdaten vorliegen
 * (vehicleFilterOptions.categories / .fuelTypes). Ohne Daten wird bewusst
 * kein Filter gerendert — keine Fake-Filter ohne Wirkung.
 */
export function VehicleFilter() {
  const hasOptions =
    vehicleFilterOptions.categories.length > 0 || vehicleFilterOptions.fuelTypes.length > 0;

  if (!hasOptions) return null;

  return (
    <div className="border-line-500 flex flex-wrap gap-4 border-b pb-6" role="group" aria-label="Fahrzeugfilter">
      {vehicleFilterOptions.categories.length > 0 && (
        <select
          className="border-line-400 bg-base-900 text-ink-200 rounded-sm border px-4 py-2.5 text-sm"
          aria-label="Fahrzeugtyp filtern"
          defaultValue=""
        >
          <option value="">Fahrzeugtyp</option>
          {vehicleFilterOptions.categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      )}
      {vehicleFilterOptions.fuelTypes.length > 0 && (
        <select
          className="border-line-400 bg-base-900 text-ink-200 rounded-sm border px-4 py-2.5 text-sm"
          aria-label="Antriebsart filtern"
          defaultValue=""
        >
          <option value="">Antriebsart</option>
          {vehicleFilterOptions.fuelTypes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
