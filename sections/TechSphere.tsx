"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";

const SphereScene = dynamic(() => import("@/sections/tech-sphere/SphereScene"), { ssr: false });

export default function TechSphere() {
  return (
    <section id="tech-sphere" className="section-pad relative overflow-hidden">
      <div className="max-shell text-center mb-6">
        <Reveal>
          <p className="eyebrow">technology, in orbit</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            Everything I ship with, in one place.
          </h2>
        </Reveal>
      </div>
      <div className="relative h-[420px] lg:h-[520px]">
        <SphereScene />
      </div>
      <p className="text-center text-white/30 text-xs font-mono mt-2">
        drag to rotate · hover a node
      </p>
    </section>
  );
}
