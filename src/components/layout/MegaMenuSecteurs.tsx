"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { domaines } from "@/data/domaines";
import { marques, type MarqueSlug } from "@/data/marques";

function marqueBySlug(slug: MarqueSlug) {
  return marques.find((m) => m.slug === slug)!;
}

export function MegaMenuSecteurs({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="custom-scrollbar w-full max-w-[min(64rem,calc(100vw-1rem))] max-h-[min(32rem,calc(100vh-var(--header-height)-1.5rem))] overflow-y-auto rounded-card border border-black/5 bg-white p-4 shadow-hero sm:p-6"
      role="menu"
    >
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-text/80">
        4 domaines — orientez-vous vers la bonne expertise
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {domaines.map((d) => (
          <li key={d.slug} className="flex min-w-0 flex-col">
            <Link
              href={`/domaines/${d.slug}`}
              onClick={onNavigate}
              className="group flex h-full flex-col rounded-card-sm border border-transparent bg-bg-light/60 p-3 transition-colors hover:border-primary/15 hover:bg-white hover:shadow-card sm:p-4"
            >
              <span
                className="mb-2 h-1 w-full rounded-pill sm:mb-3"
                style={{ backgroundColor: d.couleur }}
                aria-hidden
              />
              <span className="flex items-start justify-between gap-2 font-heading text-sm font-semibold text-dark group-hover:text-primary sm:text-base">
                {d.nom}
                <ArrowRight
                  className="mt-0.5 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </span>
              <span className="mt-2 line-clamp-3 text-xs leading-snug text-text/90 sm:text-sm">
                {d.description}
              </span>
              <ul className="mt-auto flex flex-wrap gap-1 pt-3 sm:gap-1.5 sm:pt-4">
                {d.marques.map((slug) => {
                  const m = marqueBySlug(slug);
                  return (
                    <li key={slug}>
                      <span
                        className="inline-block max-w-full truncate rounded-pill px-2 py-0.5 text-[9px] font-semibold text-white font-heading sm:text-[10px] sm:px-2.5"
                        style={{ backgroundColor: m.couleur }}
                        title={m.nom}
                      >
                        {m.nom}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
