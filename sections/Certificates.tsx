"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import CertLightbox from "@/sections/certificates/CertLightbox";
import { CERTIFICATES } from "@/constants/data";
import type { Certificate } from "@/types";

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section-pad relative bg-deep/60">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">certificates</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-12">
            Formalized learning.
          </h2>
        </Reveal>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {CERTIFICATES.map((cert) => (
            <Reveal key={cert.title} className="snap-start shrink-0 w-72">
              <GlassCard
                tilt
                onClick={() => setActive(cert)}
                className="p-6 cursor-pointer"
              >
                <div className="h-32 rounded-xl bg-gradient-to-br from-brand-blue/40 to-brand-cyan/30 grid place-items-center mb-4">
                  <Award className="w-8 h-8 text-brand-cyan" />
                </div>
                <h3 className="font-display font-semibold text-sm">{cert.title}</h3>
                <p className="text-white/40 text-xs mt-1 font-mono">
                  {cert.org} · {cert.year}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      <CertLightbox cert={active} onClose={() => setActive(null)} />
    </section>
  );
}
