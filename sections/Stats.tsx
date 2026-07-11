"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { animateNumber } from "@/lib/utils";
import { STATS } from "@/constants/data";

function StatCounter({ target, label }: { target: number; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          animateNumber(target, 1600, setValue);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <p className="font-display font-extrabold text-5xl text-gradient">
        {value}
        {target > 100 ? "+" : ""}
      </p>
      <p className="text-white/40 font-mono text-xs mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="section-pad relative bg-gradient-to-r from-surface via-deep to-surface">
      <div className="max-shell grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <Reveal key={stat.label}>
            <StatCounter target={stat.target} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
