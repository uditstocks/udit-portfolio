"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { getIcon } from "@/lib/icons";
import { openSource, sections } from "@/lib/data";
import { cardReveal, itemReveal, staggerContainer, viewportSoft } from "@/lib/motion";

const stats = [
  { value: String(openSource.length).padStart(2, "0"), label: "Merged PRs" },
  { value: "1000s", label: "Developers reached" },
  { value: "1", label: "CI outage fixed" },
];

export function OpenSource() {
  return (
    <section id="open-source" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="contributions"
          title={sections.openSource}
          className="mb-4"
        />
        <p className="mb-10 max-w-2xl text-lg text-muted">
          Merged pull requests to{" "}
          <a
            href="https://github.com/langchain-ai/docs"
            target="_blank"
            rel="noreferrer"
            className="text-soft underline decoration-border underline-offset-4 transition-colors hover:text-text"
            data-cursor="hover"
          >
            langchain-ai/docs
          </a>{" "}
          - the official LangChain documentation, used by thousands of developers.
        </p>

        {/* metrics band */}
        <motion.div
          className="os-stats"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemReveal} className="os-stat">
              <span className="os-stat-value">{stat.value}</span>
              <span className="os-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* contribution cards */}
        <motion.div
          className="os-grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {openSource.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                variants={cardReveal}
                className="os-card group"
                data-cursor="hover"
              >
                <span className="os-card-accent" aria-hidden />

                <div className="flex items-center justify-between">
                  <span className="os-card-icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-xs text-muted">{item.meta}</span>
                </div>

                <h3 className="mt-6 text-lg font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {item.description}
                </p>

                <span className="card-link mt-6 group-hover:text-text">
                  view pull request
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
