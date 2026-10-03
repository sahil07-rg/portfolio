import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";

const items = [
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a href="#top" className="font-semibold tracking-tight whitespace-nowrap">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="transition-colors hover:text-fg">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:text-fg"
          >
            <GithubLogo size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium whitespace-nowrap text-bg transition-transform active:scale-[0.98]"
          >
            Email me
          </a>
        </div>
      </nav>
    </header>
  );
}
