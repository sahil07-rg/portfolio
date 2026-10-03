"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

// ThreeUI's orbital sphere, lazy-loaded so three.js stays out of the first paint.
const OrbitalSphereBackground = dynamic(
  () =>
    import("@designcodeio/threeui/components/OrbitalSphereBackground").then(
      (m) => m.OrbitalSphereBackground,
    ),
  { ssr: false, loading: () => <div className="h-full w-full bg-[#030304]" /> },
);

export function OrbitalScene() {
  const reduce = useReducedMotion();
  return (
    <OrbitalSphereBackground
      // Default palette is violet; rotate it toward the page's saffron accent.
      hue={118}
      speed={reduce ? 0.08 : 0.6}
      scale={1.15}
      particleSize={0.022}
      particleOpacity={1}
      orbitOpacity={0.4}
      haloOpacity={0.3}
    />
  );
}
