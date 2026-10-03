import { ArrowDown, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { OrbitalScene } from "@/components/orbital-scene";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 md:grid-cols-12 md:items-center md:gap-8 md:px-8 md:pt-16 lg:min-h-[calc(100dvh-4rem)]">
      <Reveal className="md:col-span-7">
        <p className="mb-6 text-sm font-medium text-muted">
          {profile.role}. ML research intern at ISRO (IIRS)
        </p>
        <h1 className="text-4xl leading-[1.05] font-semibold tracking-tighter md:text-[2.6rem] lg:text-5xl xl:text-[3.25rem]">
          Machine learning that works <br className="hidden lg:block" />
          where the sensors <em className="text-accent">don&apos;t</em>.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
          Robotics and AI undergraduate in Bengaluru. I build models from satellite, sensor and genomic
          data, then ship them.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#research"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            See research
            <ArrowDown size={16} weight="bold" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors hover:border-fg/40 active:scale-[0.98]"
          >
            <EnvelopeSimple size={16} weight="bold" />
            Email me
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="md:col-span-5">
        {/* An instrument window: stays dark in both themes because the scene is a night sky. */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-line shadow-[0_30px_80px_-30px_rgb(194_65_12_/_0.35)] md:aspect-[4/5]">
          <OrbitalScene />
        </div>
      </Reveal>
    </section>
  );
}
