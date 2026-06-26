"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { CatSticker } from "@/components/shared/cat-sticker";
import { getIcon } from "@/lib/icons";
import { projects, sections } from "@/lib/data";
import { cardReveal, staggerContainer, viewportSoft } from "@/lib/motion";

export function Projects() {
  return (
    <section id="work" className="section relative">
      <CatSticker
        src="/cats/work.jpg"
        position="right-[5vw] bottom-[5vh]"
        size={156}
        rotate={-5}
        floatDelay={1.2}
        framed
        visibilityClass="hidden lg:block"
      />
      <div className="container-x">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="projects" title={sections.work} />
          <span className="work-counter">
            {String(projects.length).padStart(2, "0")} shipped
          </span>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => {
            const Icon = getIcon(project.icon);
            return (
              <motion.article
                key={project.id}
                className="project-block"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSoft}
                variants={staggerContainer(0.08)}
              >
                {/* ---- left rail: identity + meta ---- */}
                <motion.div variants={cardReveal} className="project-rail">
                  <div className="flex items-center justify-between">
                    <span
                      className="project-index"
                      style={{ color: project.accent }}
                    >
                      {project.index}
                    </span>
                    <span className="text-sm tabular-nums text-muted">
                      {project.year}
                    </span>
                  </div>

                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border"
                    style={{ color: project.accent }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-[0.15em] text-muted">
                      {project.subtitle}
                    </span>
                    <h3 className="work-title font-medium leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} data-cursor="hover">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="pill pill-filled"
                      >
                        <Github size={18} /> github
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="pill"
                      >
                        live demo <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* ---- right: narrative + highlights ---- */}
                <motion.div variants={cardReveal} className="project-body">
                  <p className="work-desc">{project.description}</p>

                  <ul className="project-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="project-highlight">
                        <span
                          className="project-highlight-bullet"
                          style={{ backgroundColor: project.accent }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
