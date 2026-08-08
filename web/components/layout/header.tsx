"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between gap-6 px-6">
        <a href="#top" className="text-[1.38rem] font-extrabold tracking-tight">
          A<span className="grad-text">+</span> Nail Spa
        </a>

        <nav className="hidden flex-1 justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={business.phoneHref} className="hidden shrink-0 md:block">
          <Button variant="primary" size="sm">
            Book Now
          </Button>
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-white/8 p-2 text-foreground md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute left-0 right-0 top-[72px] flex flex-col gap-[18px] border-b border-white/8 bg-background-soft px-6 py-5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
