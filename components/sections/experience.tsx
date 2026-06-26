"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience, sections } from "@/lib/data";
import { getBrandLogo } from "@/lib/brand-logos";
import { cardReveal, staggerContainer, viewportSoft } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="career"
          title={sections.experience}
          className="mb-16"
        />

        <motion.div
          className="exp-timeline"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {experience.map((item) => {
            const Logo = getBrandLogo(item.org);
            return (
              <motion.div key={item.id} variants={cardReveal} className="exp-entry">
                <span className="exp-marker" aria-hidden="true" />

                <article className="exp-card">
                  <header className="exp-head">
                    <span className="exp-logo">
                      {Logo ? (
                        <Logo className="exp-logo-mark" />
                      ) : (
                        <span className="text-xl font-semibold text-text">
                          {item.org.charAt(0)}
                        </span>
                      )}
                    </span>

                    <div className="flex flex-1 flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="exp-org">{item.org}</h3>
                        {item.tag && (
                          <span className="exp-tag">
                            <span className="exp-tag-dot" />
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="exp-role">{item.role}</p>
                    </div>

                    <span className="exp-period">{item.period}</span>
                  </header>

                  <p className="exp-desc">{item.description}</p>

                  {item.bullets && (
                    <ul className="exp-bullets">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="exp-bullet">
                          <ArrowUpRight
                            size={17}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-text/45"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
