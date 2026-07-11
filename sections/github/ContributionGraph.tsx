"use client";

import { useEffect, useState } from "react";

type Weeks = string[][];

function generateWeeks(): Weeks {
  return Array.from({ length: 52 }).map(() =>
    Array.from({ length: 7 }).map(() => {
      const r = Math.random();
      if (r > 0.85) return "#38BDF8";
      if (r > 0.7) return "rgba(56,189,248,0.6)";
      if (r > 0.5) return "rgba(56,189,248,0.3)";
      return "rgba(255,255,255,0.06)";
    })
  );
}

/**
 * Illustrative contribution graph. Swap generateWeeks() for a real
 * GitHub GraphQL API call (contributionsCollection) when wiring up live data.
 *
 * Random values are generated client-side only (after mount) to avoid
 * server/client hydration mismatches — the server renders an empty grid,
 * then this fills in once mounted in the browser.
 */
export default function ContributionGraph() {
  const [weeks, setWeeks] = useState<Weeks | null>(null);

  useEffect(() => {
    setWeeks(generateWeeks());
  }, []);

  if (!weeks) {
    // Placeholder grid while client-side data hasn't generated yet — keeps
    // markup identical between server and first client render.
    return (
      <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto">
        {Array.from({ length: 52 }).map((_, wi) => (
          <div key={wi} className="grid grid-rows-7 gap-[3px]">
            {Array.from({ length: 7 }).map((_, di) => (
              <div key={di} className="contrib-cell" style={{ background: "rgba(255,255,255,0.06)" }} />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-x-auto">
      {weeks.map((week, wi) => (
        <div key={wi} className="grid grid-rows-7 gap-[3px]">
          {week.map((color, di) => (
            <div key={di} className="contrib-cell" style={{ background: color }} />
          ))}
        </div>
      ))}
    </div>
  );
}

