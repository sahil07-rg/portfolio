"use client";

import { useEffect } from "react";

// Kage parks the active chapter's foreground (branches, lanterns) above the page.
// That framing works for big headlines but covers dense text, so fade it while
// any element matching `selector` is substantially on screen.
export function ForegroundDimmer({ selector }: { selector: string }) {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        document.body.classList.toggle("fg-dim", visible.size > 0);
      },
      { threshold: 0.25 },
    );
    targets.forEach((t) => io.observe(t));
    return () => {
      io.disconnect();
      document.body.classList.remove("fg-dim");
    };
  }, [selector]);

  return null;
}
