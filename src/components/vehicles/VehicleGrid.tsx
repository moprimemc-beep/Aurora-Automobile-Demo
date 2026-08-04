import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { company } from "@/lib/content/company";
import type { Vehicle } from "@/lib/content/vehicles";

export function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    return (
      <EmptyState
        title="Bestand aktuell nicht digital einsehbar"
        text={`Unser vollständiger Bestand von über ${company.vehicleStockCount} Fahrzeugen ist derzeit noch nicht online durchsuchbar. Unser Verkaufsteam berät Sie gerne persönlich zu aktuell verfügbaren Modellen aus Ihrer gewünschten Kategorie.`}
      >
        <Button href="/kontakt">Fahrzeug anfragen</Button>
        <Button href={company.contact.phone.href} variant="secondary">
          {company.contact.phone.display}
        </Button>
      </EmptyState>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.slug} vehicle={vehicle} />
      ))}
    </div>
  );
}
