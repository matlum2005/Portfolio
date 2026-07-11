import * as Icons from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { TIMELINE } from "@/constants/data";

function toPascalCase(kebab: string) {
  return kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-deep/60">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">journey</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-16">How I got here.</h2>
        </Reveal>

        <div className="relative pl-8 lg:pl-0">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-transparent -translate-x-1/2 hidden lg:block" />

          {TIMELINE.map((item, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[toPascalCase(item.icon)] ?? Icons.Circle;
            const isEven = i % 2 === 0;
            return (
              <Reveal key={item.title} className="relative mb-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                  <div className={isEven ? "lg:text-right lg:order-1" : "lg:order-2"}>
                    <GlassCard className="inline-block text-left p-6">
                      <span className="font-mono text-xs text-brand-cyan">{item.year}</span>
                      <h3 className="font-display font-semibold text-lg mt-1 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-brand-cyan" /> {item.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                    </GlassCard>
                  </div>
                  <div className={`hidden lg:block ${isEven ? "lg:order-2" : "lg:order-1"}`} />
                </div>
                <div className="absolute left-8 lg:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_16px_rgba(56,189,248,0.8)]" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
