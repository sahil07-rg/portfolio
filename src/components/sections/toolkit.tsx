import { Marquee } from "@/components/ui/marquee";
import { toolkit } from "@/content/profile";

// The page's only marquee: the toolkit is breadth, not something to read item by item.
export function Toolkit() {
  return (
    <section aria-label="Toolkit" className="pt-28 md:pt-36">
      <Marquee pauseOnHover className="[--duration:55s] [--gap:0.75rem]">
        {toolkit.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm whitespace-nowrap text-muted"
          >
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
