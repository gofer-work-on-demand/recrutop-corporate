import { Check } from "lucide-react";
import type { MarqueData } from "@/data/marques";

export function ValeurAjouteeSection({ marque }: { marque: MarqueData }) {
  if (!marque.valeurAjoutee.length) return null;
  return (
    <section className="border-b border-black/5 bg-bg-light py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Valeur ajoutée</h2>
        <ul className="mt-8 space-y-3">
          {marque.valeurAjoutee.map((v) => (
            <li key={v} className="flex gap-3 text-text">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: marque.couleur }}
                aria-hidden
              />
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
