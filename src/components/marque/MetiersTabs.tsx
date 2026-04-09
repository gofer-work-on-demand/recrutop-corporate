"use client";

import { useState } from "react";
import type { MarqueData } from "@/data/marques";
import { clsx } from "clsx";

export function MetiersTabs({ marque }: { marque: MarqueData }) {
  const [active, setActive] = useState(0);
  if (!marque.metiers.length) return null;
  const current = marque.metiers[active];

  return (
    <section className="border-b border-black/5 bg-bg-light py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Métiers recrutés</h2>
        <div className="mt-8 flex flex-wrap gap-2 border-b border-black/10 pb-4">
          {marque.metiers.map((cat, i) => (
            <button
              key={cat.categorie}
              type="button"
              onClick={() => setActive(i)}
              className={clsx(
                "rounded-pill px-4 py-2 text-sm font-semibold transition-colors font-heading",
                i === active
                  ? "text-white"
                  : "bg-white text-text ring-1 ring-black/10 hover:ring-black/20"
              )}
              style={
                i === active ? { backgroundColor: marque.couleur } : undefined
              }
            >
              {cat.categorie}
            </button>
          ))}
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item) => (
            <li
              key={item}
              className="rounded-card-sm border border-black/5 bg-white px-3 py-2 text-sm text-text"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
