"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

/** Wraps children in a scroll-triggered fade/slide-up reveal. */
export default function Reveal({ children, className, as = "div" }: RevealProps) {
  const { ref, isVisible } = useReveal();
  const Tag = as as any;

  return (
    <Tag ref={ref} className={cn("reveal", isVisible && "in", className)}>
      {children}
    </Tag>
  );
}
