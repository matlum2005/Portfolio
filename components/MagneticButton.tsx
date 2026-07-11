"use client";

import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

/** An anchor that gently pulls toward the cursor on hover. */
export default function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-flex transition-transform duration-200 will-change-transform", className)}
      {...props}
    >
      {children}
    </a>
  );
}
