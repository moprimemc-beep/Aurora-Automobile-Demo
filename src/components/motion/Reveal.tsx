"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes } from "react";
import { fadeUp } from "@/lib/motion";

type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type RevealProps = Omit<HTMLAttributes<HTMLElement>, ConflictingHandlers> & {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "li";
};

export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    if (as === "li") {
      return (
        <li className={className} {...rest}>
          {children}
        </li>
      );
    }
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const viewport = { once: true, margin: "-72px" } as const;

  if (as === "li") {
    return (
      <motion.li
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        transition={{ delay }}
        className={className}
        {...rest}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
