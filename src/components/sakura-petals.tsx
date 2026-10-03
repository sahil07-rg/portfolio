"use client";

import { useEffect, useRef } from "react";

/*
  Falling sakura petals over the scene, inspired by ThreeUI's Pro "Sylva, sakura sunset".
  A single 2D canvas between the WebGL temple and the page copy. Off under reduced motion.
*/
type Petal = { x: number; y: number; s: number; vy: number; vx: number; rot: number; vr: number; sway: number; ph: number; tone: number };

export function SakuraPetals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let petals: Petal[] = [];
    const tones = ["#f7c6d4", "#f2aabf", "#ffd9e3", "#e88fa8"];

    const spawn = (anywhere: boolean): Petal => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -20 - Math.random() * h * 0.3,
      s: 5 + Math.random() * 7,
      vy: 18 + Math.random() * 28,
      vx: 8 + Math.random() * 18,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 1.6,
      sway: 14 + Math.random() * 26,
      ph: Math.random() * Math.PI * 2,
      tone: Math.floor(Math.random() * tones.length),
    });

    const resize = () => {
      w = innerWidth;
      h = innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 820 ? 18 : 42;
      petals = Array.from({ length: count }, () => spawn(true));
    };

    const draw = (p: Petal, t: number) => {
      const flip = Math.abs(Math.cos(t * 1.3 + p.ph));
      ctx.save();
      ctx.translate(p.x + Math.sin(t + p.ph) * p.sway, p.y);
      ctx.rotate(p.rot);
      ctx.scale(1, 0.35 + flip * 0.65);
      ctx.globalAlpha = 0.55 + flip * 0.4;
      ctx.fillStyle = tones[p.tone];
      // A petal: two curves meeting at a notched tip.
      ctx.beginPath();
      ctx.moveTo(0, -p.s);
      ctx.bezierCurveTo(p.s * 0.9, -p.s * 0.6, p.s * 0.7, p.s * 0.8, 0, p.s);
      ctx.bezierCurveTo(-p.s * 0.7, p.s * 0.8, -p.s * 0.9, -p.s * 0.6, 0, -p.s);
      ctx.fill();
      ctx.restore();
    };

    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.vy * dt;
        p.x += p.vx * dt;
        p.rot += p.vr * dt;
        if (p.y > h + 30 || p.x > w + 60) petals[i] = { ...spawn(false), x: Math.random() * w * 1.1 - w * 0.2 };
        draw(p, t);
      }
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    raf = requestAnimationFrame(tick);
    addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="petals" aria-hidden="true" />;
}
