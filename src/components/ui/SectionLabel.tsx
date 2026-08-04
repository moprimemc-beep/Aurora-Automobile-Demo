import { cn } from "@/lib/cn";

export function SectionLabel({
  number,
  children,
  className,
  tone = "default",
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "warm";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {number && (
        <span
          className={cn(
            "font-mono text-xs",
            tone === "warm" ? "text-warm-ink/50" : "text-accent-500",
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "h-px w-8",
          tone === "warm" ? "bg-warm-ink/30" : "bg-accent-500/60",
        )}
      />
      <span
        className={cn(
          "tracking-label font-mono text-xs uppercase",
          tone === "warm" ? "text-warm-ink/70" : "text-ink-400",
        )}
      >
        {children}
      </span>
    </div>
  );
}
