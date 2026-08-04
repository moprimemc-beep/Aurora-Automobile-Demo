import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { DesktopNavLinks } from "@/components/layout/DesktopNavLinks";
import { MobileMenuController } from "@/components/layout/MobileMenuController";
import { primaryCta } from "@/lib/content/nav";

export function Navbar() {
  return (
    <header className="border-line-500/50 bg-base-950/75 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Logo />

        <DesktopNavLinks />

        <div className="hidden lg:block">
          <Button href={primaryCta.href} size="sm">
            {primaryCta.label}
          </Button>
        </div>

        <MobileMenuController />
      </div>
    </header>
  );
}
