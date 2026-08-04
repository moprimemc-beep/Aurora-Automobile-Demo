import { cn } from "@/lib/cn";

type Tone = "base" | "raised" | "warm" | "black";

const toneClasses: Record<Tone, string> = {
  base: "bg-base-950",
  raised: "bg-base-900",
  warm: "bg-warm-100 text-warm-ink",
  black: "bg-black",
};

export function Section({
  id,
  tone = "base",
  className,
  children,
  border = true,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28 lg:py-32",
        toneClasses[tone],
        border && "border-line-500/60 border-t",
        tone === "warm" && "border-warm-200/60",
        className,
      )}
    >
      {children}
    </section>
  );
}
