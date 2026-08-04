import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { BrandGlyph } from "@/components/ui/BrandGlyph";

type MediaFrameProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Dev-Hinweis im Platzhalter, welche Datei erwartet wird. */
  devLabel?: string;
};

function fileExists(publicPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

/**
 * Rendert ein optimiertes Next.js-Bild, sobald die Datei unter dem
 * dokumentierten Pfad in public/ liegt. Bis dahin erscheint ein
 * markentypischer, ruhiger Platzhalter statt eines kaputten Bild-Icons —
 * die Website bleibt zu jedem Zeitpunkt produktionsreif und ehrlich.
 */
export function MediaFrame({
  src,
  alt,
  sizes = "100vw",
  priority,
  className,
  imgClassName,
  devLabel,
}: MediaFrameProps) {
  const exists = fileExists(src);

  return (
    <div className={cn("relative overflow-hidden bg-base-800", className)}>
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <div className="from-base-800 via-base-900 to-base-950 absolute inset-0 flex items-center justify-center bg-gradient-to-br">
          <div className="bg-grain absolute inset-0 opacity-40" />
          <BrandGlyph className="text-ink-600 relative w-16 opacity-30 sm:w-20" />
          {process.env.NODE_ENV === "development" && (
            <span className="text-ink-600 border-line-500 absolute bottom-3 left-3 rounded-sm border bg-black/40 px-2 py-1 font-mono text-[10px] tracking-wide">
              {devLabel ?? src}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
