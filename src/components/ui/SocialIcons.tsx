/**
 * Eigenständig gezeichnete, reduzierte Social-Glyphen im Lucide-Linienstil
 * (lucide-react führt keine Marken-/Plattform-Icons mehr). Abstrahierte
 * Symbole, keine Wiedergabe geschützter Original-Logografiken.
 */

type IconProps = { className?: string };

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.8 20.7v-6.4h2.1l.3-2.5h-2.4V10.2c0-.7.2-1.2 1.2-1.2h1.3V6.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.9H9v2.5h2.2v6.3" />
    </svg>
  );
}

export function LinkedinGlyph({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <line x1="7.8" y1="10.2" x2="7.8" y2="16.2" />
      <circle cx="7.8" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.4 16.2v-3.6c0-1.3.9-2.4 2.2-2.4s2 1.1 2 2.4v3.6" />
      <line x1="11.4" y1="10.2" x2="11.4" y2="16.2" />
    </svg>
  );
}

export function YoutubeGlyph({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M10.5 9.8l4.5 2.2-4.5 2.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokGlyph({ className }: IconProps) {
  return (
    <svg className={className} {...shared} aria-hidden="true">
      <path d="M14 4v10.8a3 3 0 1 1-2.4-2.9" />
      <path d="M14 4c.5 2.3 2.1 3.8 4.3 4.1" />
    </svg>
  );
}
