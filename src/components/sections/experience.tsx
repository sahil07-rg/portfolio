import { Reveal } from "@/components/reveal";
import { experience } from "@/content/profile";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 pt-28 md:px-8 md:pt-36">
      <div className="grid gap-10 md:grid-cols-12">
        {/* Heading pins while the roles scroll past on wide screens. */}
        <div className="md:col-span-4">
          <h2 className="text-3xl font-semibold tracking-tighter md:sticky md:top-28 md:text-5xl">Experience</h2>
        </div>
        <ol className="space-y-14 md:col-span-8">
          {experience.map((e, i) => (
            <li key={e.org}>
              <Reveal delay={i * 0.06} className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8">
                <div className="font-mono text-xs leading-6 text-muted">
                  <p>{e.when}</p>
                  <p>{e.where}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                  <p className="mt-1 text-accent">{e.org}</p>
                  <ul className="mt-4 space-y-2 leading-relaxed text-muted">
                    {e.points.map((pt) => (
                      <li key={pt} className="pl-4 [text-indent:-1rem] before:mr-2 before:content-['-']">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
