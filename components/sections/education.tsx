"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { education, sections } from "@/lib/data";
import { cardReveal, staggerContainer, viewportSoft } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="learning"
          title={sections.education}
          className="mb-12"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={cardReveal}
              className="cert-card flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="logo-box !h-12 !w-12 !rounded-xl text-text">
                  <GraduationCap size={20} />
                </span>
                <span className="timeline-year">{item.period}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-medium">{item.degree}</h3>
                <p className="text-soft">{item.institution}</p>
                <p className="text-sm text-muted">{item.location}</p>
              </div>
              {item.detail && (
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {item.detail}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
