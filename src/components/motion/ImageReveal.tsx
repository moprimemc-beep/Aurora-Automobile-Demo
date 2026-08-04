"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealMask } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function ImageReveal({
  children,
  className,
  delay = 0,
  onLoad = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** true = beim Mount animieren (Hero), false = beim Scrollen ins Viewport */
  onLoad?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const viewportProps = onLoad ? {} : { whileInView: "visible", viewport: { once: true } };

  return (
    <motion.div
      initial="hidden"
      animate={onLoad ? "visible" : undefined}
      variants={revealMask}
      transition={{ delay }}
      className={cn("will-change-[clip-path]", className)}
      {...viewportProps}
    >
      {children}
    </motion.div>
  );
}
