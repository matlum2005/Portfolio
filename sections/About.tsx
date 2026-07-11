import { MapPin, GraduationCap, Briefcase, FolderGit2, Cpu, Trophy, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const QUICK_CARDS = [
  {
    icon: FolderGit2,
    title: "Projects",
    desc: "Landing pages, storefronts, and 3D product tours shipped end to end.",
  },
  {
    icon: Cpu,
    title: "Skills",
    desc: "React, Next.js, TypeScript, and the animation layer on top of them.",
  },
  {
    icon: Trophy,
    title: "Achievements",
    desc: "Smart India Hackathon participant, building under real time pressure.",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Computer Science fundamentals — DSA, SQL, and systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="absolute w-96 h-96 bg-brand-blue rounded-full -left-20 top-1/3 opacity-30 blur-[80px] pointer-events-none" />

      <div className="max-shell relative grid lg:grid-cols-[380px_1fr] gap-16 items-start">
        <Reveal>
          <div className="relative w-64 h-64 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-3xl glow-border" />
            <div className="absolute inset-2 rounded-[1.3rem] glass overflow-hidden grid place-items-center">
              <span className="font-display font-extrabold text-6xl text-gradient">
                <img src="/matlum.png" alt="Matlum Ali" className="w-full h-full object-cover" />
              </span>
            </div>
          </div>
          <div className="mt-8 space-y-2 text-sm font-mono text-white/50">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-cyan" /> India
            </p>
            <p className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-cyan" /> B.Tech, Computer Science
            </p>
            <p className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-brand-cyan" /> Open to internships
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">about</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
              Frontend craft, backed by systems thinking.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-white/60 leading-relaxed max-w-2xl">
              I&apos;m a frontend developer who treats interfaces like products — obsessing over
              the 200ms between a click and a response, and the difference between an animation
              that decorates and one that explains. My stack centers on React and Next.js,
              extended with Three.js and GSAP whenever a story needs a third dimension. Recent
              focus: building conversion-first landing experiences and e-commerce storefronts
              that stay fast under real content, not just design-mockup content.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {QUICK_CARDS.map((card) => (
              <Reveal key={card.title}>
                <GlassCard tilt className="p-6">
                  <card.icon className="w-5 h-5 text-brand-cyan mb-3" />
                  <p className="font-display font-semibold text-lg">{card.title}</p>
                  <p className="text-white/50 text-sm mt-1">{card.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
