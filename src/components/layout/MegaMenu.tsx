"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { filieresHome } from "@/data/filieres";
import { getFiliereLucideIcon } from "@/lib/filiere-icons";

export function MegaMenuPanel({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 top-full z-50 mt-0 w-[min(52rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-border bg-surface p-6 shadow-card-hover"
      role="menu"
    >
      <p className="label-caps mb-4 text-center">6 filières — 6 équipes — 1 exigence métier</p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filieresHome.map((f) => {
          const Icon = getFiliereLucideIcon(f.slug);
          return (
            <li key={f.slug}>
              <Link
                href={`/filieres/${f.slug}`}
                onClick={onNavigate}
                className="group flex gap-3 rounded-md border border-transparent p-3 transition-colors hover:border-border hover:bg-bg"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border"
                  style={{
                    borderColor: `var(${f.couleurVar})`,
                    color: `var(${f.couleurVar})`,
                    backgroundColor: "var(--color-bg)",
                  }}
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1 font-display text-base font-semibold text-primary group-hover:text-accent-dark">
                    {f.nom}
                    <ArrowRight
                      className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-1 line-clamp-2 text-sm text-text-muted">
                    {f.promesse}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
