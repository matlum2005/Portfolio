"use client";

import { useEffect, useRef } from "react";

/** Custom cursor: a dot that tracks instantly + a ring that eases behind it. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => ringRef.current?.classList.add("scale-[1.7]", "bg-brand-blue/15", "border-brand-blue");
    const onLeave = () => ringRef.current?.classList.remove("scale-[1.7]", "bg-brand-blue/15", "border-brand-blue");

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const interactiveEls = document.querySelectorAll("a, button, input, textarea, .tilt-card");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-cyan pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-9 h-9 rounded-full border border-brand-cyan/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
      />
    </>
  );
}
