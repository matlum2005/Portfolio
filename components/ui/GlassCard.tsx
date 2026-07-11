"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps extends React.ComponentPropsWithoutRef<"div"> {
  glow?: boolean;
  tilt?: boolean;
}

/** Base glassmorphism card used across sections, with optional glow border + 3D tilt. */
export default function GlassCard({ glow = true, tilt = false, className, children, ...props }: GlassCardProps) {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    e.currentTarget.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      className={cn("glass rounded-2xl", glow && "glow-border", tilt && "tilt-card", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}
