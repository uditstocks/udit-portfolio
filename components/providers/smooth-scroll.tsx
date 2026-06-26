"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type PropsWithChildren } from "react";

/**
 * Lenis smooth-scroll provider.
 * Easing + duration ported from the reference site
 * (duration 1.2, exponential ease 1.001 - 2^(-10t)).
 * Disabled when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: PropsWithChildren) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: reduced ? 0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !reduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
