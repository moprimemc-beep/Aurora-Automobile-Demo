import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { BrandGlyph } from "@/components/ui/BrandGlyph";
import { IMAGE_SLOTS } from "@/lib/content/images";

function fileExists(publicPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

/**
 * Wortmarke. Sobald public/images/logo/aurora-logo-dark.png hochgeladen
 * wurde, wird automatisch das reale Logo verwendet — bis dahin eine
 * originale, code-basierte Wortmarke im gleichen Aufbau (Bogen-Symbol +
 * "AURORA AUTOMOBILE").
 */
export function Logo({
  className,
  href = "/",
  size = "md",
}: {
  className?: string;
  href?: string;
  size?: "sm" | "md";
}) {
  const logoExists = fileExists(IMAGE_SLOTS.logoDark.path);

  return (
    <Link
      href={href}
      className={cn(
        "text-ink-50 hover:text-accent-400 inline-flex items-center gap-2.5 transition-colors",
        className,
      )}
      aria-label="Aurora Automobile — Startseite"
    >
      {logoExists ? (
        <Image
          src={IMAGE_SLOTS.logoDark.path}
          alt={IMAGE_SLOTS.logoDark.alt}
          width={180}
          height={60}
          priority
          className={cn("w-auto", size === "sm" ? "h-8" : "h-10")}
        />
      ) : (
        <>
          <BrandGlyph className={cn("text-accent-500", size === "sm" ? "w-6" : "w-7")} />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-semibold tracking-[0.14em] uppercase",
                size === "sm" ? "text-sm" : "text-base",
              )}
            >
              Aurora
            </span>
            <span className="text-ink-400 mt-0.5 text-[9px] tracking-[0.28em] uppercase">
              Automobile
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
