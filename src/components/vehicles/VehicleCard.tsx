import { MediaFrame } from "@/components/ui/MediaFrame";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import type { Vehicle } from "@/lib/content/vehicles";

const fuelLabel: Record<string, string> = {
  Benzin: "Benzin",
  Diesel: "Diesel",
  Elektro: "Elektro",
  Hybrid: "Hybrid",
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const priceFormatted =
    vehicle.priceEur !== undefined
      ? new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
          vehicle.priceEur,
        )
      : undefined;

  return (
    <article className="group border-line-500/60 hover:border-accent-500/50 flex flex-col overflow-hidden rounded-lg border transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden">
        <MediaFrame
          src={vehicle.imagePath}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <Badge className="bg-base-950/80 absolute top-3 left-3 backdrop-blur-sm">
          {vehicle.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-ink-400 font-mono text-xs uppercase">{vehicle.make}</p>
        <h3 className="text-ink-50 mt-1 text-lg font-medium tracking-tight">{vehicle.model}</h3>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {vehicle.year && <TechnicalLabel label="Baujahr" value={String(vehicle.year)} />}
          {vehicle.mileageKm !== undefined && (
            <TechnicalLabel
              label="Laufleistung"
              value={`${new Intl.NumberFormat("de-DE").format(vehicle.mileageKm)} km`}
            />
          )}
          {vehicle.fuelType && (
            <TechnicalLabel label="Antrieb" value={fuelLabel[vehicle.fuelType] ?? vehicle.fuelType} />
          )}
          {vehicle.powerKw !== undefined && (
            <TechnicalLabel label="Leistung" value={`${vehicle.powerKw} kW`} />
          )}
        </div>

        <div className="border-line-500/60 mt-5 flex items-center justify-between border-t pt-4">
          {priceFormatted ? (
            <span className="text-ink-50 font-mono text-lg">{priceFormatted}</span>
          ) : (
            <span className="text-ink-600 font-mono text-sm">Preis auf Anfrage</span>
          )}
          <TextLink href={`/fahrzeuge/${vehicle.slug}`}>Details ansehen</TextLink>
        </div>
      </div>
    </article>
  );
}
