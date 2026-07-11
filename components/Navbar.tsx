"use client";

import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { NAV_LINKS } from "@/constants/data";

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled && "glass-strong"
      )}
    >
      <nav className="max-shell flex items-center justify-between px-5 lg:px-8 py-4">
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          M<span className="text-brand-cyan">.</span>Ali
        </a>

        <div className="hidden lg:flex items-center gap-8 text-sm text-white/70 font-mono">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link hover:text-white">
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 border border-white/10 rounded-lg px-3 py-1.5 hover:border-brand-cyan/40 hover:text-white transition"
          >
            <Search className="w-3.5 h-3.5" /> <span>⌘K</span>
          </button>
          <a
            href="#contact"
            className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-cyan rounded-lg px-4 py-2 neon-shadow transition"
          >
            Let&apos;s talk
          </a>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden flex flex-col gap-1 px-5 pb-5 font-mono text-sm text-white/80">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-white/5"
            >
              {link.label.toLowerCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
