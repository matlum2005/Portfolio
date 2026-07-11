"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import { TYPING_PHRASES } from "@/constants/data";

export default function TypingLine() {
  const text = useTypingEffect(TYPING_PHRASES);

  return (
    <div className="flex items-center gap-2 text-lg sm:text-xl text-white/70 font-mono">
      <span>&gt;</span>
      <span>{text}</span>
      <span className="type-caret animate-blink">&nbsp;</span>
    </div>
  );
}
