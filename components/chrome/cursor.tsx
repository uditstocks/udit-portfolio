"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Custom cursor: a single dot that follows the pointer and scales up over
 * interactive elements. Hidden on touch / coarse-pointer devices.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest('a, button, [data-cursor="hover"], input, textarea'),
      );
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-dot"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 2.6 : 1 }}
      transition={{ duration: 0.18 }}
    />
  );
}
