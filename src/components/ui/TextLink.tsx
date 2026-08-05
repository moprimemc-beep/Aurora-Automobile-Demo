import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function TextLink({
  href,
  children,
  className,
  external,
  showArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
}) {
  const classes = cn(
    "text-ink-50 hover:text-accent-400 group inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line-400 underline-offset-4 transition-colors hover:decoration-accent-400",
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external || !href.startsWith("/")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
