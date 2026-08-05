"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { primaryNav } from "@/lib/content/nav";

export function DesktopNavLinks() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className="hidden items-center gap-9 lg:flex" aria-label={t("primaryLabel")}>
      {primaryNav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "hover:text-accent-400 text-sm font-medium tracking-wide transition-colors",
              active ? "text-accent-400" : "text-ink-200",
            )}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}
