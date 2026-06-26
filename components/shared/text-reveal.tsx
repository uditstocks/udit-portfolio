"use client";

import { motion } from "framer-motion";
import { createElement, type ElementType } from "react";
import { wordReveal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  /** Animate on mount instead of on scroll into view. */
  animateOnMount?: boolean;
  delayOffset?: number;
}

/**
 * Per-word mask reveal — each word rises from behind a clip mask.
 * The outer tag is a plain element; only the words are motion components.
 */
export function TextReveal({
  text,
  className,
  as = "h2",
  animateOnMount = false,
  delayOffset = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  const animateProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return createElement(
    as,
    { className: cn("flex flex-wrap", className), "aria-label": text },
    words.map((word, i) => (
      <span
        key={`${word}-${i}`}
        aria-hidden="true"
        className="mr-[0.25em] inline-flex overflow-hidden pb-[0.12em]"
      >
        <motion.span
          className="inline-block"
          custom={i + delayOffset}
          variants={wordReveal}
          {...animateProps}
        >
          {word}
        </motion.span>
      </span>
    )),
  );
}
