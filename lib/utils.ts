import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Animate a number from 0 to target over a duration (ms), calling onUpdate each frame. */
export function animateNumber(
  target: number,
  duration: number,
  onUpdate: (value: number) => void,
  onDone?: () => void
) {
  const start = performance.now();
  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    onUpdate(Math.floor(progress * target));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  }
  requestAnimationFrame(step);
}
