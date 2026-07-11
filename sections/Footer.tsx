import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="relative pt-10">
      <svg
        className="block w-full h-auto text-surface"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z" />
      </svg>
      <div className="bg-surface px-5 lg:px-8 py-10">
        <div className="max-shell flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-display font-bold text-lg">
            M<span className="text-brand-cyan">.</span>Ali
          </a>
          <div className="flex items-center gap-5">
            <a href={SOCIAL_LINKS.github} className="hover:text-brand-cyan transition">
              <Github className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="hover:text-brand-cyan transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-brand-cyan transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white/30 text-xs font-mono">
            © {new Date().getFullYear()} Matloob Ali. Built with React &amp; a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
