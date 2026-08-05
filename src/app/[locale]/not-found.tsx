import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandGlyph } from "@/components/ui/BrandGlyph";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[70vh] items-center py-24">
      <Container>
        <BrandGlyph className="text-ink-600 w-14 opacity-40" />
        <div className="mt-8">
          <SectionLabel number="404">{t("eyebrow")}</SectionLabel>
        </div>
        <h1 className="text-ink-50 mt-6 max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="text-ink-400 mt-6 max-w-md text-base leading-relaxed">{t("text")}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">{t("ctaHome")}</Button>
          <Button href="/fahrzeuge" variant="secondary">
            {t("ctaVehicles")}
          </Button>
        </div>
      </Container>
    </div>
  );
}
