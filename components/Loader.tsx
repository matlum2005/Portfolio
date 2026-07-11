"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 300);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black z-[10000] flex items-center justify-center flex-col gap-4 transition-all duration-500"
      style={{ opacity: hidden ? 0 : 1, visibility: hidden ? "hidden" : "visible" }}
      aria-hidden={hidden}
    >
      <p className="font-mono text-xs tracking-[0.3em] text-cyan-300/80">
        INITIALIZING — {Math.floor(progress)}%
      </p>
      <div className="w-56 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
