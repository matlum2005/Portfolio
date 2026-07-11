"use client";

import { useEffect, useRef, useState } from "react";
import { animateNumber } from "@/lib/utils";

export default function GithubCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          animateNumber(target, 1400, setValue);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className="font-display font-bold text-2xl text-gradient">
      {value}
      {suffix}
    </p>
  );
}
