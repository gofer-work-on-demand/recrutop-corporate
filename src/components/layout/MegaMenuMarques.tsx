"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { marques, marquesOrdreAffichage } from "@/data/marques";

export function MegaMenuMarques({ onNavigate }: { onNavigate?: () => void }) {
  const ordered = marquesOrdreAffichage
    .map((slug) => marques.find((m) => m.slug === slug))
    .filter(Boolean) as typeof marques;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="custom-scrollbar w-full max-w-[min(56rem,calc(100vw-1rem))] max-h-[min(36rem,calc(100vh-var(--header-height)-1.5rem))] overflow-y-auto rounded-card border border-black/5 bg-white p-4 shadow-hero sm:p-6"
      role="menu"
    >
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-text/80">
        8 marques — expertises distinctes, une même exigence
      </p>
      <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {ordered.map((m) => (
          <li key={m.slug}>
            <Link
              href={`/marques/${m.slug}`}
              onClick={onNavigate}
              className="group flex gap-2 rounded-card-sm border border-transparent p-2.5 transition-colors hover:border-primary/10 hover:bg-bg-light/80 sm:gap-3 sm:p-3"
            >
              <span
                className="mt-0.5 h-9 w-1.5 shrink-0 rounded-pill sm:mt-1 sm:h-10"
                style={{ backgroundColor: m.couleur }}
                aria-hidden
              />
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-heading text-xs font-semibold text-dark group-hover:text-primary sm:text-sm">
                  <span className="min-w-0 truncate">{m.nom}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
                <span className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-text/90 sm:text-xs">
                  {m.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
