"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

const piliers = [
  {
    titre: "Spécialisation métier",
    texte: "Filières dédiées, experts terrain.",
  },
  {
    titre: "Exigence qualité",
    texte: "Process, suivi, sécurité.",
  },
  {
    titre: "Réactivité",
    texte: "Organisation claire, circuits courts.",
  },
  {
    titre: "Engagement sociétal",
    texte: "Insertion transversale via Passerelle.",
  },
];

export function PourquoiSection() {
  return (
    <AnimatedSection className="border-b border-black/5 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-dark sm:text-4xl">
          Pourquoi Recrutop ?
        </h2>
        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {piliers.map((p) => (
            <motion.li key={p.titre} variants={fadeUpItem}>
              <div className="h-full rounded-card border border-black/5 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover">
                <span className="block h-1 w-full rounded-pill bg-primary" aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold text-dark">{p.titre}</h3>
                <p className="mt-2 text-sm text-text">{p.texte}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
