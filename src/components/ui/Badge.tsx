import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "tracking-label border-line-500 text-ink-400 inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase",
        tone === "accent" && "border-accent-500/40 text-accent-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
