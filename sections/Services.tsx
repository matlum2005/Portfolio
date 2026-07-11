import * as Icons from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { SERVICES } from "@/constants/data";

function toPascalCase(kebab: string) {
  return kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">services</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Where I can help.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[toPascalCase(s.icon)] ?? Icons.Sparkles;
            return (
              <Reveal key={s.title}>
                <GlassCard tilt className="p-7 neon-shadow">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan grid place-items-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{s.desc}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
