import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { company } from "@/lib/content/company";
import type { Vehicle } from "@/lib/content/vehicles";

export async function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    const t = await getTranslations("emptyState");
    return (
      <EmptyState
        title={t("title")}
        text={t("text", { count: company.vehicleStockCount })}
      >
        <Button href="/kontakt">{t("ctaRequest")}</Button>
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
