"use client";

import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[toPascalCase(project.icon)] ?? Icons.Box;

  return (
    <GlassCard
      onClick={onOpen}
      className="overflow-hidden neon-shadow group cursor-pointer p-0"
    >
      <div className={`h-56 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 45%)" }}
        />
        <div className="relative glass rounded-xl p-5 group-hover:-translate-y-1 transition-transform duration-300">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <span className="absolute top-4 left-4 text-xs font-mono bg-black/40 px-2 py-1 rounded">
          {project.tag}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-display font-bold text-xl">{project.title}</h3>
        <p className="text-white/50 text-sm mt-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-5 text-sm">
          <span className="flex items-center gap-1.5 text-brand-cyan">
            View details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </GlassCard>
  );
}

function toPascalCase(kebab: string) {
  return kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}
