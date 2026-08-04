"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function MobileMenuController() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        label="Menü öffnen"
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </IconButton>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
