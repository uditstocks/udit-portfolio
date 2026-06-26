"use client";

import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/shared/magnetic";
import { CatSticker } from "@/components/shared/cat-sticker";
import { getIcon } from "@/lib/icons";
import { contactLinks, personal, quote, sections } from "@/lib/data";
import {
  easeOutExpo,
  itemReveal,
  lineReveal,
  staggerContainer,
  viewportSoft,
} from "@/lib/motion";

export function Contact() {
  const lenis = useLenis();
  const year = 2026;

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="section !pb-0 relative">
      {/* playful closing — grab and fling the cats; they spring back */}
      <CatSticker
        src="/cats/contact.gif"
        position="right-[5vw] top-[4vh]"
        size={188}
        rotate={6}
        floatDelay={0}
        draggable
        visibilityClass="hidden lg:block"
      />
      <CatSticker
        src="/cats/skills.png"
        position="right-[11vw] top-[34vh]"
        size={132}
        rotate={-12}
        floatDelay={0.6}
        draggable
        visibilityClass="hidden lg:block"
      />
      <CatSticker
        src="/cats/about.png"
        position="right-[3vw] top-[54vh]"
        size={120}
        rotate={14}
        floatDelay={1.1}
        draggable
        visibilityClass="hidden lg:block"
      />
      <div className="container-x">
        <motion.span
          className="eyebrow mb-8 block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSoft}
          transition={{ duration: 0.6 }}
        >
          {sections.contact}
        </motion.span>

        <div className="overflow-hidden">
          <motion.h2
            className="max-w-4xl text-[clamp(2.2rem,6vw,5rem)] font-medium lowercase leading-[1.05] tracking-tightest"
            variants={lineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSoft}
          >
            let's build something intelligent.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSoft}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
          className="mt-8"
        >
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-3 text-xl text-soft transition-colors hover:text-text sm:text-2xl"
            >
              <span className="border-b border-border pb-1 transition-colors group-hover:border-text">
                {personal.email}
              </span>
              <ArrowUpRight
                size={26}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-wrap gap-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {contactLinks.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                variants={itemReveal}
                className="contact-link"
                aria-label={link.label}
              >
                <Icon className="h-6 w-6" />
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.figure
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSoft}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <blockquote className="quote-text">
            <span className="quote-mark" aria-hidden>
              &ldquo;
            </span>
            {quote.text}
          </blockquote>
          <figcaption className="quote-author">— {quote.author}</figcaption>
        </motion.figure>
      </div>

      {/* closing bar (merged footer — single source of identity + credits) */}
      <div className="mt-24 border-t border-border">
        <div className="container-x flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium lowercase">
              {personal.name.toLowerCase()}
            </span>
            <span className="text-sm text-muted">
              {personal.role} · {personal.location}
            </span>
          </div>

          <div className="flex items-end gap-7">
            <div className="flex flex-col gap-1.5 text-xs text-muted md:items-end md:text-right">
              <span>
                © {year} {personal.name}. all rights reserved.
              </span>
              <span>designed &amp; built with Next.js, Tailwind &amp; Framer Motion.</span>
            </div>
            <button
              type="button"
              onClick={toTop}
              className="theme-toggle shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
