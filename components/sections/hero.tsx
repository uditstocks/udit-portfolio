"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "@/components/shared/magnetic";
import { useReady } from "@/components/providers";
import { hero, personal } from "@/lib/data";
import {
  easeOutExpo,
  itemReveal,
  repelSpring,
  staggerContainer,
  wordReveal,
} from "@/lib/motion";

const REPEL_RADIUS = 280; // px: cursor influence radius
const REPEL_MAX = 200; // px: max distance the cat darts away

export function Hero() {
  const { ready } = useReady();
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  // Offset applied to the cat; springs give it a darting recoil.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, repelSpring);
  const sy = useSpring(y, repelSpring);
  // Lean in the direction it darts — a touch of character.
  const lean = useTransform(sx, [-REPEL_MAX, REPEL_MAX], [12, -12]);

  // Push the cat AWAY from the cursor. Distance is measured from the
  // untransformed anchor (stable home) so the applied offset never feeds back.
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = anchorRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = cx - e.clientX;
    const dy = cy - e.clientY;
    const d = Math.hypot(dx, dy);
    if (d >= REPEL_RADIUS || d === 0) {
      x.set(0);
      y.set(0);
      return;
    }
    const push = (1 - d / REPEL_RADIUS) * REPEL_MAX;
    x.set((dx / d) * push);
    y.set((dy / d) * push);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const words = hero.headline.split(" ");
  const animateState = ready ? "visible" : "hidden";

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative flex min-h-[100svh] items-center overflow-hidden py-[12vh]"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--text-color), transparent 70%)" }}
      />

      {/* hero cat — sits at rest on the right and darts away from the cursor.
          The anchor is untransformed (stable home); only the inner layers move:
          the wrapper carries the repel offset + lean, the image idle-floats. */}
      <div
        ref={anchorRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-[6vw] top-1/2 z-[5] hidden h-[200px] w-[200px] -translate-y-1/2 md:block lg:right-[9vw] lg:h-[240px] lg:w-[240px]"
      >
        <motion.div
          className="h-full w-full"
          style={reduce ? undefined : { x: sx, y: sy, rotate: lean }}
        >
          <motion.img
            src="/cats/hero.png"
            alt=""
            draggable={false}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="h-full w-full select-none object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              ready
                ? { opacity: 1, scale: 1, y: reduce ? 0 : [0, -14, 0] }
                : { opacity: 0, scale: 0.85 }
            }
            transition={{
              opacity: { duration: 0.7, ease: easeOutExpo, delay: 0.2 },
              scale: { duration: 0.7, ease: easeOutExpo, delay: 0.2 },
              y: reduce
                ? { duration: 0 }
                : { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </div>

      <div className="container-x">
        <div className="flex flex-col gap-10">
          {/* eyebrow */}
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {personal.role} · {personal.location}
          </motion.div>

          {/* headline */}
          <h1 className="hero-headline flex flex-wrap" aria-label={hero.headline}>
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                aria-hidden="true"
                className="mr-[0.22em] inline-flex overflow-hidden pb-[0.08em]"
              >
                <motion.span
                  className="inline-block"
                  variants={wordReveal}
                  custom={i}
                  initial="hidden"
                  animate={animateState}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* content */}
          <motion.div
            className="flex max-w-[640px] flex-col gap-8"
            variants={staggerContainer(0.12, 0.5)}
            initial="hidden"
            animate={animateState}
          >
            <motion.p className="sub-headline" variants={itemReveal}>
              {hero.subHeadline}
            </motion.p>

            <motion.div className="flex flex-col gap-2" variants={itemReveal}>
              <h2 className="currently-title">{hero.currentlyLabel}</h2>
              <ul className="flex flex-col gap-1 text-[1.05rem]">
                {hero.currently.map((item) => (
                  <li key={item} className="text-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="mt-2 flex flex-wrap gap-4" variants={itemReveal}>
              <Magnetic>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pill pill-filled"
                  aria-label="GitHub profile"
                >
                  <Github size={18} /> view github
                </a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="pill pill-icon"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.5}>
                <a
                  href={`mailto:${personal.email}`}
                  className="pill pill-icon"
                  aria-label="Send an email"
                >
                  <Mail size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                  aria-label="View résumé"
                >
                  résumé <ArrowUpRight size={18} />
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
