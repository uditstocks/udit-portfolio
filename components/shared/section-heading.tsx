"use client";

import { motion } from "framer-motion";
import { lineReveal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  className?: string;
  id?: string;
}

/** Section title with an optional eyebrow label and a clip-mask reveal. */
export function SectionHeading({
  title,
  eyebrow,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {eyebrow && (
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <div className="overflow-hidden">
        <motion.h2
          id={id}
          className="section-title !mb-0"
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
