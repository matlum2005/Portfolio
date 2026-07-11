"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/constants/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideCount = Math.max(1, TESTIMONIALS.length - 2);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), 4500);
    return () => clearInterval(id);
  }, [slideCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const slideWidth = (track.children[0] as HTMLElement).offsetWidth + 24;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }, [index]);

  return (
    <section id="testimonials" className="section-pad relative bg-deep/60 overflow-hidden">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">what collaborators say</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Working notes from teammates.
          </h2>
        </Reveal>
      </div>

      <div className="relative max-shell">
        <div ref={trackRef} className="flex gap-6 transition-transform duration-700 ease-out">
          {TESTIMONIALS.map((t) => (
            <GlassCard
              key={t.name}
              className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8"
            >
              <Quote className="w-6 h-6 text-brand-cyan mb-4" />
              <p className="text-white/70 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-white/40 font-mono">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-brand-cyan" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
