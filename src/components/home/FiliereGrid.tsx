"use client";

import { motion } from "framer-motion";
import { filieresHome } from "@/data/filieres";
import { FiliereCard } from "./FiliereCard";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

export function FiliereGrid() {
  return (
    <section id="filiere-grid" className="scroll-mt-24 border-b border-border bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl text-balance">
            Nos filières métiers spécialisées
          </h2>
          <p className="mt-4 text-lg text-text-muted text-balance">
            Choisissez votre filière : vous êtes orienté vers les bons experts, dès le premier
            contact.
          </p>
        </div>
        <motion.ul
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {filieresHome.map((f) => (
            <motion.li key={f.slug} variants={fadeUpItem}>
              <FiliereCard filiere={f} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
