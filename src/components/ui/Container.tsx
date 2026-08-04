import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  as: As = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <As className={cn("mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </As>
  );
}
