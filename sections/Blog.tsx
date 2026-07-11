import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { BLOG_POSTS } from "@/constants/data";

export default function Blog() {
  return (
    <section id="blog" className="section-pad relative">
      <div className="max-shell">
        <Reveal>
          <p className="eyebrow">writing</p>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 mb-14">
            Notes from the build process.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Reveal key={post.title}>
              <GlassCard className="overflow-hidden hover:-translate-y-1 transition-transform p-0">
                <div className="h-36 bg-gradient-to-br from-brand-blue/50 to-brand-cyan/30" />
                <div className="p-6">
                  <span className="text-xs font-mono text-brand-cyan">{post.tag}</span>
                  <h3 className="font-display font-semibold mt-2">{post.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{post.excerpt}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
