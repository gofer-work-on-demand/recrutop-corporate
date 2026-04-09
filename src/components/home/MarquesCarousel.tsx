"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { marques, marquesOrdreAffichage } from "@/data/marques";
import { fadeUp } from "@/lib/motion";

export function MarquesCarousel() {
  const ordered = marquesOrdreAffichage
    .map((slug) => marques.find((m) => m.slug === slug))
    .filter(Boolean) as typeof marques;

  return (
    <section
      id="marques"
      className="scroll-mt-24 border-b border-black/5 bg-bg-light py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-content px-3 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-center font-heading text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
            9 marques spécialisées
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-1 text-center text-sm text-text sm:mt-4 sm:text-base">
            Un groupe, des expertises distinctes, une même exigence de qualité.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {ordered.map((m) => (
            <motion.div
              key={m.slug}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="h-full"
            >
              <Link
                href={`/marques/${m.slug}`}
                className="group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-card border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:p-7"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ backgroundColor: m.couleur }}
                  aria-hidden
                />
                <span
                  className="w-fit rounded-pill px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white font-heading sm:text-xs"
                  style={{ backgroundColor: m.couleur }}
                >
                  {m.domaineLabel}
                </span>

                <p className="mt-4 font-heading text-xl font-bold text-dark sm:text-2xl">{m.nom}</p>
                <p className="mt-2 text-sm font-semibold text-primary">{m.tagline}</p>
                <p className="mt-4 line-clamp-4 flex-1 text-base leading-relaxed text-text">
                  {m.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary font-heading sm:text-base">
                  Voir la marque
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
