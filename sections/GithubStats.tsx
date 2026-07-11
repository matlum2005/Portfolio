import { FolderGit2, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import ContributionGraph from "@/sections/github/ContributionGraph";
import GithubCounter from "@/sections/github/GithubCounter";
import { LANGUAGES, REPOS, GITHUB_STATS } from "@/constants/data";

export default function GithubStats() {
  return (
    <section id="github" className="section-pad relative">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">open source activity</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Consistency, visualized.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <Reveal>
            <GlassCard glow={false} className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-white/50">contribution activity</span>
                <span className="font-mono text-xs text-white/30">last 12 months</span>
              </div>
              <ContributionGraph />
              <div className="flex items-center gap-2 mt-4 text-xs text-white/30 font-mono justify-end">
                <span>less</span>
                <span className="contrib-cell" style={{ background: "rgba(56,189,248,0.15)" }} />
                <span className="contrib-cell" style={{ background: "rgba(56,189,248,0.4)" }} />
                <span className="contrib-cell" style={{ background: "rgba(56,189,248,0.7)" }} />
                <span className="contrib-cell" style={{ background: "#38BDF8" }} />
                <span>more</span>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid grid-rows-2 gap-6">
            <Reveal>
              <GlassCard className="p-6">
                <p className="font-mono text-xs text-white/40 mb-3">most used languages</p>
                <div className="space-y-3">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span>{lang.name}</span>
                        <span className="text-white/40">{lang.pct}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${lang.pct}%`, background: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal>
              <GlassCard className="p-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <GithubCounter target={GITHUB_STATS.repos} />
                  <p className="text-xs text-white/40 font-mono">repositories</p>
                </div>
                <div>
                  <GithubCounter target={GITHUB_STATS.stars} />
                  <p className="text-xs text-white/40 font-mono">stars</p>
                </div>
                <div>
                  <GithubCounter target={GITHUB_STATS.commits} suffix="+" />
                  <p className="text-xs text-white/40 font-mono">commits</p>
                </div>
                <div>
                  <GithubCounter target={GITHUB_STATS.followers} />
                  <p className="text-xs text-white/40 font-mono">followers</p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <p className="eyebrow mt-10 mb-4">pinned</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REPOS.map((repo) => (
            <Reveal key={repo.name}>
              <a href="#" className="block">
                <GlassCard className="p-5 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <FolderGit2 className="w-4 h-4 text-brand-cyan" /> {repo.name}
                  </div>
                  <p className="text-white/50 text-xs mt-2">{repo.desc}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan inline-block" />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {repo.stars}
                    </span>
                  </div>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
