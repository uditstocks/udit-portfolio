import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants — ported from the reference site's
 * GSAP ScrollTrigger reveals (y/opacity rises with power-curve easing).
 * Eases below approximate GSAP's power2/power3 "out" curves.
 */

type Bezier = [number, number, number, number];

export const easeOutExpo: Bezier = [0.16, 1, 0.3, 1];
export const easeOutPower3: Bezier = [0.215, 0.61, 0.355, 1];
export const easeOutPower2: Bezier = [0.25, 0.46, 0.45, 0.94];

/** Generic section rise — matches `y:60, opacity:0 -> dur 1, power3.out`. */
export const sectionReveal: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easeOutPower3 },
  },
};

/** Container that staggers its children into view. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** About-line rise — `y:30, opacity:0 -> dur 1.2, stagger .2, power3.out`. */
export const lineReveal: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: easeOutPower3 },
  },
};

/** Card rise — `y:50, opacity:0 -> dur .8, stagger .2, power2.out`. */
export const cardReveal: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easeOutPower2 },
  },
};

/** Small element rise — used for pills / contact links (`y:40 stagger .1`). */
export const itemReveal: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutPower2 },
  },
};

/** Per-character / per-word headline mask reveal. */
export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: easeOutExpo, delay: 0.15 + i * 0.06 },
  }),
};

/** Default viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
export const viewportSoft = { once: true, amount: 0.2 } as const;

/** Spring used for the cursor-following hero portrait (ports quickTo power3). */
export const followSpring = { stiffness: 140, damping: 18, mass: 0.6 } as const;

/** Spring for the hero "repel" cat — softer recoil so it darts then settles. */
export const repelSpring = { stiffness: 120, damping: 16, mass: 0.8 } as const;
