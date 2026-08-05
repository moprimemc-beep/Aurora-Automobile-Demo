import type { MetadataRoute } from "next";
import { company, getCompanyText } from "@/lib/content/company";
import { routing } from "@/i18n/routing";

export default function manifest(): MetadataRoute.Manifest {
  const text = getCompanyText(routing.defaultLocale);

  return {
    name: company.name,
    short_name: company.shortName,
    description: text.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07080a",
    theme_color: "#07080a",
    lang: routing.defaultLocale,
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
