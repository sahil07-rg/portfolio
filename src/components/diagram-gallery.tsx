"use client";

import { useRef, useState } from "react";
import { DiagramSvg } from "@/components/diagrams";
import type { Diagram } from "@/content/profile";

function Visual({ d }: { d: Diagram }) {
  if ("svg" in d) return <DiagramSvg id={d.svg} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={d.src} alt={d.alt} loading="lazy" decoding="async" />;
}

// Thumbnails for one project's diagrams; clicking one opens it full size in a native <dialog>.
export function DiagramGallery({ project, diagrams }: { project: string; diagrams: Diagram[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + diagrams.length) % diagrams.length));
  const current = open === null ? null : diagrams[open];

  return (
    <>
      <ul className="diag-thumbs" aria-label={`${project} diagrams`}>
        {diagrams.map((d, i) => (
          <li key={d.title}>
            <button type="button" className={`diag-thumb${"src" in d ? " is-figure" : ""}`} onClick={() => show(i)} data-cursor>
              <span className="diag-frame">
                <Visual d={d} />
              </span>
              <span className="diag-cap">{d.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="diag-dialog"
        aria-label={current ? `${project}: ${current.title}` : project}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {current ? (
          <figure>
            <div className={`diag-big${"src" in current ? " is-figure" : ""}`}>
              <Visual d={current} />
            </div>
            <figcaption>
              <span>
                <b>{project}</b> {current.title}
              </span>
              <i>{current.source}</i>
            </figcaption>
          </figure>
        ) : null}
        <div className="diag-nav">
          {diagrams.length > 1 ? (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous diagram">
                Prev
              </button>
              <span>
                {(open ?? 0) + 1} of {diagrams.length}
              </span>
              <button type="button" onClick={() => step(1)} aria-label="Next diagram">
                Next
              </button>
            </>
          ) : null}
          <button type="button" className="diag-close" onClick={() => dialog.current?.close()}>
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
