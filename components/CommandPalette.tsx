"use client";

import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { TerminalSquare } from "lucide-react";
import { COMMAND_ITEMS } from "@/constants/data";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onOpenEvent = () => setOpen(true);
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("open-command-palette", onOpenEvent);
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("open-command-palette", onOpenEvent);
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  const filtered = COMMAND_ITEMS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997] flex items-start justify-center pt-[12vh]"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="glass-strong rounded-2xl w-[92%] max-w-lg p-2 neon-shadow">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <TerminalSquare className="w-4 h-4 text-brand-cyan" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section… (try 'projects', 'contact')"
            className="bg-transparent flex-1 text-sm py-1 placeholder:text-white/30"
          />
          <span className="font-mono text-[10px] text-white/30 border border-white/10 rounded px-1.5 py-0.5">
            ESC
          </span>
        </div>
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.map((item) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[toPascalCase(item.icon)] ?? Icons.Circle;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white rounded-lg mx-1 transition"
              >
                <Icon className="w-4 h-4 text-brand-cyan" /> {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function toPascalCase(kebab: string) {
  return kebab
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
