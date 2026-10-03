"use client";

import { useEffect, useRef } from "react";

/*
  A firelit holographic ID card. Inspired by ThreeUI's Pro "Dark Souls Holo Card",
  written from scratch: CSS foil and glare layers driven by pointer position.
  Pointer values are written straight to CSS variables, never to React state.
*/
export function HoloCard() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const set = (px: number, py: number, active: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${px * 100}%`);
        el.style.setProperty("--py", `${py * 100}%`);
        el.style.setProperty("--rx", `${(0.5 - py) * 18}deg`);
        el.style.setProperty("--ry", `${(px - 0.5) * 22}deg`);
        el.style.setProperty("--hyp", `${Math.hypot(px - 0.5, py - 0.5) * 2}`);
        el.style.setProperty("--on", `${active}`);
      });
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      set((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, 1);
    };
    const leave = () => set(0.5, 0.5, 0);

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="holo" ref={ref}>
      <div className="holo-card">
        <div className="holo-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar.jpg" alt="Portrait of Sahil Kumar" width={460} height={460} />
        </div>
        <div className="holo-head">
          <b>Sahil Kumar</b>
          <span className="jp">साहिल</span>
        </div>
        <div className="holo-type">AI/ML Engineer, ISRO IIRS</div>
        <dl className="holo-stats">
          <div>
            <dt>Award</dt>
            <dd>Best Paper</dd>
          </div>
          <div>
            <dt>Papers</dt>
            <dd>2</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd>8.40</dd>
          </div>
        </dl>
        <p className="holo-flavor">B.E. Robotics and AI, SMVIT Bengaluru.</p>
        <i className="holo-foil" aria-hidden="true" />
        <i className="holo-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
