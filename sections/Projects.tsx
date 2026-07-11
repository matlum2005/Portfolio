"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/sections/projects/ProjectCard";
import ProjectModal from "@/sections/projects/ProjectModal";
import { PROJECTS } from "@/constants/data";
import type { Project } from "@/types";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">selected work</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Two builds, two very different problems.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
