"use client";

import { Award, X } from "lucide-react";
import type { Certificate } from "@/types";

export default function CertLightbox({ cert, onClose }: { cert: Certificate | null; onClose: () => void }) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[9996] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 grid place-items-center rounded-full glass"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="max-w-lg w-full glass-strong rounded-2xl p-8">
        <div className="h-48 rounded-xl bg-gradient-to-br from-brand-blue/40 to-brand-cyan/30 grid place-items-center mb-5">
          <Award className="w-12 h-12 text-brand-cyan" />
        </div>
        <h3 className="font-display font-bold text-xl">{cert.title}</h3>
        <p className="text-white/50 text-sm mt-2 font-mono">
          {cert.org} · {cert.year}
        </p>
      </div>
    </div>
  );
}
