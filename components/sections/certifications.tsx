"use client";

import { motion } from "framer-motion";
import { Award, Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { certifications, sections } from "@/lib/data";
import { getBrandLogo } from "@/lib/brand-logos";
import { cardReveal, staggerContainer, viewportSoft } from "@/lib/motion";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="credentials"
          title={sections.certifications}
          className="mb-12"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSoft}
        >
          {certifications.map((cert) => {
            const Logo = getBrandLogo(cert.issuer);
            return (
              <motion.div
                key={cert.id}
                variants={cardReveal}
                className="cert-card flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <span className="cert-logo">
                    {Logo ? (
                      <Logo className="cert-logo-mark" />
                    ) : (
                      <Award size={22} strokeWidth={1.6} />
                    )}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(cert.items.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-medium">{cert.issuer}</h3>

                <ul className="flex flex-col gap-2.5 border-t border-border pt-4">
                  {cert.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                    >
                      <Check
                        size={15}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-text/45"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
