import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company, siteUrl } from "@/lib/content/company";
import { getOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} — Premium-Autohaus in ${company.address.city}`,
    template: `%s — ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "Autohaus Düsseldorf",
    "Premium Gebrauchtwagen Düsseldorf",
    "Fahrzeuge Düsseldorf",
    "Probefahrt Düsseldorf",
    "Fahrzeugankauf Düsseldorf",
    "Finanzierung Fahrzeug Düsseldorf",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.shortName,
    title: `${company.shortName} — Premium-Autohaus in ${company.address.city}`,
    description: company.description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} — Premium-Autohaus in ${company.address.city}`,
    description: company.description,
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#07080a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="de" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="main-content" className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
