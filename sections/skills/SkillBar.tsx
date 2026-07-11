"use client";

import { useEffect, useRef, useState } from "react";
import type { SkillItem } from "@/types";

export default function SkillBar({ skill }: { skill: SkillItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(skill.level);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div ref={ref} className="tilt-card">
      <div className="flex justify-between text-sm mb-1.5">
        <span>{skill.name}</span>
        <span className="text-white/40 font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
