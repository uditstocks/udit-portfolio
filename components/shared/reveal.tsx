"use client";

import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";
import { sectionReveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends PropsWithChildren {
  className?: string;
  variants?: Variants;
  amount?: number;
  once?: boolean;
  id?: string;
}

/** Scroll-triggered reveal wrapper (defaults to the generic section rise). */
export function Reveal({
  children,
  className,
  variants = sectionReveal,
  amount = 0.3,
  once = true,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends PropsWithChildren {
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
  id?: string;
}

/** Container that staggers child <StaggerItem/> reveals as it enters view. */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.2,
  once = true,
  id,
}: StaggerProps) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends PropsWithChildren {
  className?: string;
  variants?: Variants;
}

export function StaggerItem({
  children,
  className,
  variants = sectionReveal,
}: StaggerItemProps) {
  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
