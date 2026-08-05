import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content/company";
import { buildAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/fahrzeuge", priority: 0.9, changeFrequency: "daily" },
  { path: "/leistungen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/showroom", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.7, changeFrequency: "yearly" },
  { path: "/probefahrt", priority: 0.7, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    routing.locales.map((locale) => {
      const alternates = buildAlternates(locale, route.path);
      return {
        url: `${siteUrl}${alternates.canonical}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternates.languages).map(([key, value]) => [
              key,
              `${siteUrl}${value}`,
            ]),
          ),
        },
      };
    }),
  );
}
