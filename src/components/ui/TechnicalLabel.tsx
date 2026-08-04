import { cn } from "@/lib/cn";

export function TechnicalLabel({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="tracking-label text-ink-600 font-mono text-[11px] uppercase">{label}</span>
      <span className="text-ink-50 font-mono text-sm">{value}</span>
    </div>
  );
}
