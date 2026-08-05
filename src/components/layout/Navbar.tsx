import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { DesktopNavLinks } from "@/components/layout/DesktopNavLinks";
import { MobileMenuController } from "@/components/layout/MobileMenuController";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { primaryCtaHref } from "@/lib/content/nav";

export async function Navbar() {
  const t = await getTranslations("cta");

  return (
    <header className="border-line-500/50 bg-base-950/75 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-3 px-6 sm:px-8 lg:px-12">
        <Logo />

        <DesktopNavLinks />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <div className="hidden lg:block">
            <Button href={primaryCtaHref} size="sm">
              {t("requestVehicle")}
            </Button>
          </div>

          <MobileMenuController />
        </div>
      </div>
    </header>
  );
}
