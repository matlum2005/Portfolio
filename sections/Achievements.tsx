import * as Icons from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { ACHIEVEMENTS } from "@/constants/data";

function toPascalCase(kebab: string) {
  return kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">recognitions</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Proof over promises.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((a) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[toPascalCase(a.icon)] ?? Icons.Star;
            return (
              <Reveal key={a.title}>
                <GlassCard tilt className="p-7 text-center neon-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan grid place-items-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold">{a.title}</h3>
                  <p className="text-white/50 text-xs mt-2">{a.desc}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
