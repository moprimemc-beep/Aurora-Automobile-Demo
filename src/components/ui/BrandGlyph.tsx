import { cn } from "@/lib/cn";

/**
 * Eigenständig gezeichnetes Vektor-Symbol (Bogen über zulaufender Straße) —
 * dient als Wortmarken-Fallback, solange das reale Logo (public/images/logo)
 * noch nicht hochgeladen wurde, sowie als wiederkehrendes Bildmotiv in
 * Platzhaltern und Favicon.
 */
export function BrandGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <path
        d="M6 20C6 10.6 15.6 3 32 3C48.4 3 58 10.6 58 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M20 36L30 15H35L46 13.5L34 16.5L27 36H20Z" fill="currentColor" />
    </svg>
  );
}
