import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { housing, moreProjects } from "@/content/profile";

function LinkOut({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors hover:text-accent"
    >
      {children}
      <ArrowUpRight size={14} weight="bold" />
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 pt-28 md:px-8 md:pt-36">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">Built and shipped</h2>
      </Reveal>

      {/* Housing Intelligence: stacked screenshots on the left, write-up on the right. */}
      <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-7">
          <div className="relative pb-[18%]">
            <div className="relative aspect-[2804/1514] overflow-hidden rounded-2xl border border-line">
              <Image src={housing.images[0].src} alt={housing.images[0].alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 w-[58%] translate-x-2 md:translate-x-6">
              <div className="relative aspect-[2804/1618] overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/30">
                <Image src={housing.images[1].src} alt={housing.images[1].alt} fill sizes="(min-width: 768px) 32vw, 58vw" className="object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:pl-6">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{housing.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{housing.body}</p>
          <p className="mt-5 font-mono text-xs text-muted">{housing.stack.join(" / ")}</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <LinkOut href={housing.live}>Live site</LinkOut>
            <LinkOut href={housing.api}>API docs</LinkOut>
            <LinkOut href={housing.code}>Code</LinkOut>
          </div>
        </Reveal>
      </div>

      {/* Smaller work: a two-column index, no cards. */}
      <ul className="mt-24 grid gap-x-12 md:grid-cols-2">
        {moreProjects.map((p, i) => (
          <li key={p.title} className="border-t border-line py-7">
            <Reveal delay={(i % 2) * 0.06}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                {p.href && p.linkLabel ? <LinkOut href={p.href}>{p.linkLabel}</LinkOut> : null}
              </div>
              <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{p.body}</p>
              <p className="mt-3 font-mono text-xs text-muted">{p.stack}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
