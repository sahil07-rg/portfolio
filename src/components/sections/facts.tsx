import { facts } from "@/content/profile";

export function Facts() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-7xl px-4 md:px-8">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="sr-only">{f.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{f.value}</dd>
            <dd className="mt-1 text-sm text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
