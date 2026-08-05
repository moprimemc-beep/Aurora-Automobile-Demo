import { company, getCompanyText, siteUrl } from "@/lib/content/company";
import type { Locale } from "@/i18n/routing";

const DAY_TO_SCHEMA: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

const CLOSED_LABELS = new Set(["Geschlossen", "Closed"]);

function toOpeningHoursSpecification(hours: readonly { day: string; hours: string }[]) {
  return hours
    .filter((h) => !CLOSED_LABELS.has(h.hours))
    .map((h) => {
      const [open = "", close = ""] = h.hours.replace(" Uhr", "").split(" – ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_TO_SCHEMA[h.day] ?? h.day,
        opens: open,
        closes: close,
      };
    });
}

export function getOrganizationSchema(locale: Locale) {
  const text = getCompanyText(locale);

  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: company.name,
    slogan: text.slogan,
    description: text.description,
    url: siteUrl,
    telephone: company.contact.phone.href.replace("tel:", ""),
    email: company.contact.email.display,
    foundingDate: String(company.foundingYear),
    numberOfEmployees: company.employeeCount,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressCountry: company.address.countryCode,
    },
    openingHoursSpecification: toOpeningHoursSpecification(text.hoursSales),
    sameAs: Object.values(company.socials).map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.googleProfile.rating,
      reviewCount: company.googleProfile.reviewCount,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
