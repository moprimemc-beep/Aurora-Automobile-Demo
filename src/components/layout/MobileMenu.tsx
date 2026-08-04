"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Button } from "@/components/ui/Button";
import { primaryNav, primaryCta } from "@/lib/content/nav";
import { company } from "@/lib/content/company";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";

const MotionLink = motion.create(Link);

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const containerRef = useFocusTrap(isOpen, onClose);
  useScrollLock(isOpen);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-base-950 fixed inset-0 z-50 flex flex-col lg:hidden"
        >
          <div className="flex items-center justify-end px-6 py-5 sm:px-8">
            <IconButton label="Menü schließen" onClick={onClose}>
              <X className="h-5 w-5" aria-hidden="true" />
            </IconButton>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobil">
            {primaryNav.map((item, i) => (
              <MotionLink
                key={item.href}
                href={item.href}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.05 * i, duration: 0.3 }}
                className="text-ink-50 hover:text-accent-400 border-line-500/60 border-b py-4 text-3xl font-medium tracking-tight transition-colors sm:text-4xl"
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <Button href={primaryCta.href} className="w-full" size="md">
              {primaryCta.label}
            </Button>
            <div className="mt-6 flex flex-col gap-1 text-sm">
              <a href={company.contact.phone.href} className="text-ink-200 hover:text-accent-400">
                {company.contact.phone.display}
              </a>
              <a href={company.contact.email.href} className="text-ink-400 hover:text-accent-400">
                {company.contact.email.display}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
