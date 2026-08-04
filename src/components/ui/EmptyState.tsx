import { cn } from "@/lib/cn";
import { BrandGlyph } from "@/components/ui/BrandGlyph";

export function EmptyState({
  title,
  text,
  children,
  className,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-line-500 flex flex-col items-center rounded-lg border border-dashed px-8 py-20 text-center",
        className,
      )}
    >
      <BrandGlyph className="text-ink-600 w-10 opacity-50" />
      <h3 className="text-ink-50 mt-6 text-xl font-medium">{title}</h3>
      <p className="text-ink-400 mt-3 max-w-md text-sm leading-relaxed">{text}</p>
      {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
    </div>
  );
}
