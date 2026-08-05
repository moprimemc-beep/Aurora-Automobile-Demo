import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm";

const variants: Record<Variant, string> = {
  primary: "bg-accent-500 text-base-950 hover:bg-accent-400",
  secondary:
    "border border-line-400 text-ink-50 bg-transparent hover:border-accent-500 hover:text-accent-400",
  ghost: "text-ink-200 hover:text-accent-400 underline-offset-4 hover:underline px-0",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm min-h-12",
  sm: "px-5 py-2.5 text-sm min-h-11",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variant !== "ghost" && sizes[size], variants[variant], className);

  if (isLinkButton(props)) {
    const { href, external } = props;
    if (external || !href.startsWith("/")) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const nativeProps: NativeButtonProps = props;
  const buttonAttrs: Omit<NativeButtonProps, keyof BaseProps> = { ...nativeProps };
  for (const key of ["variant", "size", "className", "children"] as const) {
    delete (buttonAttrs as Record<string, unknown>)[key];
  }

  return (
    <button className={classes} {...buttonAttrs}>
      {children}
    </button>
  );
}
