"use client";

import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function BackToTop() {
  const { scrolled } = useScrollProgress();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 grid place-items-center rounded-full glass-strong neon-shadow transition-all"
      style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
