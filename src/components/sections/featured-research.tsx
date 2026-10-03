import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { featuredResearch as r } from "@/content/profile";

export function FeaturedResearch() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-4 pt-28 md:px-8 md:pt-36">
      <Reveal>
        <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tighter md:text-5xl">{r.title}</h2>
      </Reveal>

      {/* Overlap layout: the satellite image is the stage, the text panel sits over its lower edge. */}
      <div className="relative mt-12 md:mt-16">
        <Reveal>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[16/8]">
              <Image
                src={r.image}
                alt={r.imageAlt}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover object-[60%_62%]"
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted">{r.caption}</figcaption>
          </figure>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-6 rounded-2xl border border-line bg-surface p-6 md:absolute md:right-8 md:-bottom-16 md:mt-0 md:w-[min(560px,48%)] md:p-8"
        >
          <p className="text-sm font-medium text-accent">{r.org}</p>
          <p className="mt-3 text-lg leading-relaxed">{r.body}</p>
          <p className="mt-3 leading-relaxed text-muted">{r.detail}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {r.models.map((m) => (
              <li key={m} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
            {r.status}. {r.mentors}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
