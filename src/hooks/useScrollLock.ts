"use client";

import { useEffect } from "react";

/**
 * Sperrt vertikales Scrollen NUR temporär, während `active` true ist
 * (mobiles Menü, Dialog, Lightbox). Stellt beim Schließen zuverlässig
 * wieder her — kein touch-action:none, kein dauerhaftes overflow:hidden.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    document.body.setAttribute("data-scroll-locked", "true");

    return () => {
      document.body.removeAttribute("data-scroll-locked");
    };
  }, [active]);
}
