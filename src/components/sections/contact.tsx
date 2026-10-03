import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pt-32 pb-12 md:px-8 md:pt-44">
      <Reveal>
        <h2 className="max-w-[20ch] text-4xl leading-[1.05] font-semibold tracking-tighter md:text-6xl">
          Have satellite, sensor or agent problems? Let&apos;s talk.
        </h2>
        <p className="mt-6 max-w-[48ch] text-lg text-muted">
          Open to ML internships, research collaborations and applied ML roles.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold whitespace-nowrap text-accent-fg transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <EnvelopeSimple size={18} weight="bold" />
          Email me
        </a>
      </Reveal>

      <div className="mt-24 flex flex-col gap-6 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.email}</p>
        <ul className="flex gap-6">
          <li>
            <a href={profile.links.github} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <GithubLogo size={18} /> GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} className="inline-flex items-center gap-2 transition-colors hover:text-fg">
              <LinkedinLogo size={18} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.huggingface} className="transition-colors hover:text-fg">
              Hugging Face
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
