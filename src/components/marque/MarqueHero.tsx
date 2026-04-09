import Link from "next/link";
import type { MarqueData } from "@/data/marques";

export function MarqueHero({ marque }: { marque: MarqueData }) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: marque.couleur }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Fil d'Ariane" className="text-xs font-medium text-white/85">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Groupe
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/domaines/${marque.domaineSlug}`} className="hover:underline">
                {marque.domaineLabel}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-white">{marque.nom}</li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-balance">
          {marque.nom}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">{marque.tagline}</p>
      </div>
    </section>
  );
}
