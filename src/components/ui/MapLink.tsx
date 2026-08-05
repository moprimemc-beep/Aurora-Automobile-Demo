import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { company } from "@/lib/content/company";

/**
 * Datenschutzbewusst: kein eingebettetes Kartenskript/iframe ohne Consent-
 * Management, stattdessen ein klar beschrifteter externer Link. Nutzt nur
 * die bestätigte Adresse — keine erfundenen Koordinaten.
 */
export async function MapLink({ className }: { className?: string }) {
  const t = await getTranslations("mapLink");
  const query = encodeURIComponent(
    `${company.name}, ${company.address.street}, ${company.address.zip} ${company.address.city}`,
  );
  const href = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`border-line-400 text-ink-50 hover:border-accent-500 hover:text-accent-400 inline-flex items-center gap-2.5 rounded-sm border px-5 py-3 text-sm font-medium transition-colors ${className ?? ""}`}
    >
      <MapPin className="h-4 w-4" aria-hidden="true" />
      {t("label")}
    </a>
  );
}
