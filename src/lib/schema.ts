import { company, siteUrl } from "@/lib/content/company";

const GERMAN_TO_ENGLISH_DAY: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

function toOpeningHoursSpecification(hours: readonly { day: string; hours: string }[]) {
  return hours
    .filter((h) => h.hours !== "Geschlossen")
    .map((h) => {
      const [open = "", close = ""] = h.hours.replace(" Uhr", "").split(" – ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: GERMAN_TO_ENGLISH_DAY[h.day] ?? h.day,
        opens: open,
        closes: close,
      };
    });
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: company.name,
    slogan: company.slogan,
    description: company.description,
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
    openingHoursSpecification: toOpeningHoursSpecification(company.hoursSales),
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
