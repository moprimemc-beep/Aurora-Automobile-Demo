import { cn } from "@/lib/cn";

export function IconButton({
  className,
  children,
  label,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button
      aria-label={label}
      className={cn(
        "border-line-400 text-ink-50 hover:border-accent-500 hover:text-accent-400 inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors active:scale-[0.96]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
