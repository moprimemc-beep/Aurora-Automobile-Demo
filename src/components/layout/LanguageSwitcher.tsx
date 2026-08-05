"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations("languageSwitch");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn("flex items-center gap-1 font-mono text-xs", className)}
    >
      {routing.locales.map((locale, index) => {
        const active = activeLocale === locale;
        return (
          <span key={locale} className="flex items-center">
            {index > 0 && (
              <span className="text-ink-600 mx-1" aria-hidden="true">
                /
              </span>
            )}
            <Link
              href={pathname}
              locale={locale}
              aria-current={active ? "true" : undefined}
              aria-label={t("switchTo", { language: t(locale) })}
              className={cn(
                "rounded-xs min-h-8 min-w-8 px-1.5 py-1.5 text-center tracking-wide uppercase transition-colors",
                active
                  ? "text-accent-400 font-semibold"
                  : "text-ink-400 hover:text-ink-50",
              )}
            >
              {locale}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
