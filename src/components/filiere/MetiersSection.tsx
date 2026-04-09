"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CategorieMetiers } from "@/data/filieres";
import { clsx } from "clsx";

export function MetiersSection({ metiers }: { metiers: CategorieMetiers[] }) {
  const [tab, setTab] = useState(0);
  const categories = metiers;

  return (
    <section className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-primary sm:text-4xl">
          Les métiers que nous recrutons
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Des familles de postes couvertes par des consultants qui maîtrisent le vocabulaire et les
          prérequis de votre filière.
        </p>
        <div
          className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4"
          role="tablist"
          aria-label="Catégories de métiers"
        >
          {categories.map((c, i) => (
            <button
              key={c.categorie}
              type="button"
              role="tab"
              aria-selected={tab === i}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                tab === i
                  ? "bg-primary text-white"
                  : "bg-bg text-text-muted hover:text-primary"
              )}
              onClick={() => setTab(i)}
            >
              {c.categorie}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-8"
            role="tabpanel"
          >
            <ul className="grid gap-4 md:grid-cols-2">
              {categories[tab]?.items.map((m) => (
                <li
                  key={m.nom}
                  className="rounded-md border border-border bg-bg px-4 py-3"
                >
                  <p className="font-semibold text-primary">{m.nom}</p>
                  <p className="mt-1 text-sm text-text-muted">{m.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
