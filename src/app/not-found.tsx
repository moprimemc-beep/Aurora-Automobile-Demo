import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandGlyph } from "@/components/ui/BrandGlyph";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-24">
      <Container>
        <BrandGlyph className="text-ink-600 w-14 opacity-40" />
        <div className="mt-8">
          <SectionLabel number="404">Seite nicht gefunden</SectionLabel>
        </div>
        <h1 className="text-ink-50 mt-6 max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Diese Straße führt ins Leere.
        </h1>
        <p className="text-ink-400 mt-6 max-w-md text-base leading-relaxed">
          Die aufgerufene Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite
          zurück oder entdecken Sie unseren Fahrzeugbestand.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Zur Startseite</Button>
          <Button href="/fahrzeuge" variant="secondary">
            Fahrzeuge entdecken
          </Button>
        </div>
      </Container>
    </div>
  );
}
