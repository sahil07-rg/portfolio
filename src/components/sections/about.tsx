import Image from "next/image";
import { Medal } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { recognition } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 pt-28 md:px-8 md:pt-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <div className="relative aspect-square w-48 overflow-hidden rounded-full md:w-64">
            <Image src="/avatar.jpg" alt="Portrait of Sahil Kumar" fill sizes="256px" className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-8">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">About</h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m in my fifth semester of a B.E. in Robotics and Artificial Intelligence at Sir M.
              Visvesvaraya Institute of Technology, Bengaluru.
            </p>
            <p>
              Most of my work sits where models meet messy, real signals: satellite aerosol data, bearing
              vibrations, gene expression and LLM agents that call tools. I care about validation that
              holds up, like keeping data leakage out and testing on stations the model has never seen.
            </p>
            <p>I speak English, Hindi and Kannada.</p>
          </div>

          <h3 className="mt-12 text-lg font-semibold tracking-tight">Recognition</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {recognition.map((r) => (
              <li key={r} className="flex gap-3 leading-snug text-muted">
                <Medal size={18} className="mt-0.5 shrink-0 text-accent" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
