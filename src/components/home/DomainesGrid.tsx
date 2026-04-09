"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { domaines } from "@/data/domaines";
import { marques } from "@/data/marques";
import { stagger, fadeUp, cardHover } from "@/lib/motion";

function chipForSlug(slug: (typeof domaines)[0]["marques"][number]) {
  const m = marques.find((x) => x.slug === slug)!;
  return m;
}

export function DomainesGrid() {
  return (
    <section id="domaines" className="scroll-mt-24 border-b border-black/5 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-dark sm:text-4xl">
          4 domaines d&apos;expertise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-text">
          Choisissez votre domaine pour être orienté vers la bonne marque et les bons experts.
        </p>
        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {domaines.map((d) => (
            <motion.li key={d.slug} variants={fadeUp}>
              <motion.div whileHover={cardHover}>
                <Link
                  href={`/domaines/${d.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-black/5 bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span
                    className="h-1 w-full shrink-0"
                    style={{ backgroundColor: d.couleur }}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-heading text-xl font-semibold text-dark group-hover:text-primary">
                      {d.nom}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text">{d.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {d.marques.map((slug) => {
                        const m = chipForSlug(slug);
                        return (
                          <span
                            key={slug}
                            className="rounded-pill px-2.5 py-1 text-[11px] font-semibold text-white font-heading"
                            style={{ backgroundColor: m.couleur }}
                          >
                            {m.nom}
                          </span>
                        );
                      })}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary font-heading">
                      Explorer ce domaine
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
