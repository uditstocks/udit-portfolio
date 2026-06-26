"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/data";
import { lineReveal, staggerContainer } from "@/lib/motion";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export function About() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "end 0.6"],
  });

  const paragraphs = about.lines.map((line) => line.split(" "));
  const totalWords = paragraphs.reduce((sum, p) => sum + p.length, 0);
  let cursor = 0;

  return (
    <section id="about" className="section">
      <div className="container-x">
        <span className="eyebrow mb-10 block">{about.label}</span>

        <div ref={container} className="flex max-w-[920px] flex-col gap-6">
          {paragraphs.map((words, pi) => (
            <p key={pi} className="about-line flex flex-wrap">
              {words.map((word, wi) => {
                const start = cursor / totalWords;
                const end = (cursor + 1) / totalWords;
                cursor += 1;
                return (
                  <Word
                    key={`${pi}-${wi}`}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {word}
                  </Word>
                );
              })}
            </p>
          ))}
        </div>

        <motion.dl
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-12 md:grid-cols-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {about.facts.map((fact) => (
            <motion.div key={fact.label} variants={lineReveal} className="flex flex-col gap-2">
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                {fact.label}
              </dt>
              <dd className="text-base text-soft md:text-lg">{fact.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
