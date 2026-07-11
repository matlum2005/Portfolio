"use client";

import dynamic from "next/dynamic";
import { Download, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import TypingLine from "@/sections/hero/TypingLine";
import { SOCIAL_LINKS } from "@/constants/data";

const HeroScene = dynamic(() => import("@/sections/hero/HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 max-shell w-full px-5 lg:px-8 pt-24">
        <Reveal>
          <p className="eyebrow mb-5">frontend engineer · react · next.js</p>
        </Reveal>

        <Reveal>
          <h1 className="font-display font-extrabold leading-[0.95] text-[15vw] sm:text-7xl lg:text-8xl text-gradient">
            MATLUM
            <br />
            ALI
          </h1>
        </Reveal>

        <Reveal>
          <div className="mt-6">
            <TypingLine />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-xl text-white/60">
            I build fast, cinematic interfaces where React engineering meets real-time 3D — the
            kind of product experience that makes people stop scrolling.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/resume.pdf"
              download
              className="neon-shadow flex items-center gap-2 bg-white text-black font-medium rounded-full px-6 py-3.5"
            >
              <Download className="w-4 h-4" /> Download Résumé
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="flex items-center gap-2 glass rounded-full px-6 py-3.5 font-medium hover:border-brand-cyan/50"
            >
              View Projects <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex items-center gap-5">
            <MagneticButton
              href={SOCIAL_LINKS.github}
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-full glass hover:text-brand-cyan hover:border-brand-cyan/40"
            >
              <Github className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-full glass hover:text-brand-cyan hover:border-brand-cyan/40"
            >
              <Linkedin className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="w-11 h-11 grid place-items-center rounded-full glass hover:text-brand-cyan hover:border-brand-cyan/40"
            >
              <Mail className="w-5 h-5" />
            </MagneticButton>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-mono z-10">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse" />
      </div>
    </section>
  );
}
