"use client";

import * as Icons from "lucide-react";
import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[toPascalCase(project.icon)] ?? Icons.Box;

  return (
    <div
      className="fixed inset-0 z-[9996] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-strong rounded-3xl max-w-2xl w-full p-8 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 grid place-items-center rounded-full glass hover:text-brand-cyan"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className={`h-40 rounded-2xl bg-gradient-to-br ${project.gradient} grid place-items-center mb-6`}>
          <Icon className="w-12 h-12 text-white" />
        </div>
        <span className="eyebrow">{project.tag}</span>
        <h3 className="font-display font-bold text-2xl mt-2">{project.title}</h3>
        <p className="text-white/60 mt-4 leading-relaxed text-sm">{project.long}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href={project.demoUrl ?? "#"}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Live Demo <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.githubUrl ?? "#"}
            className="flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium"
          >
            GitHub <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function toPascalCase(kebab: string) {
  return kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}
