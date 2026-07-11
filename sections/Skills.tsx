import Reveal from "@/components/Reveal";
import SkillBar from "@/sections/skills/SkillBar";
import { SKILLS } from "@/constants/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-deep/60">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">capabilities</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            The stack behind the shine.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {SKILLS.map((group) => (
            <Reveal key={group.category}>
              <p className="font-mono text-xs text-brand-cyan tracking-widest uppercase mb-5">
                {group.category}
              </p>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <SkillBar key={item.name} skill={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
