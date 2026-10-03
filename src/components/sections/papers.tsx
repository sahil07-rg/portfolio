import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Reveal } from "@/components/reveal";
import { papers } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Papers() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-8 md:pt-48">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">Published and presented</h2>
      </Reveal>

      {/* Asymmetric two-cell bento: wide spectrogram, narrower bar chart. */}
      <div className="mt-12 grid gap-6 md:grid-cols-12">
        {papers.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className={cn(i === 0 ? "md:col-span-7" : "md:col-span-5")}>
            <article className="relative h-full rounded-2xl border border-line p-2">
              <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
              <div className="relative flex h-full flex-col rounded-xl bg-surface p-5 md:p-6">
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-figure">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-muted">{p.caption}</figcaption>
                </figure>
                <h3 className="mt-6 text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm font-medium text-accent">{p.status}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                <a
                  href={p.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold transition-colors hover:text-accent"
                >
                  Read the code
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
