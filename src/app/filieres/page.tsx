import type { Metadata } from "next";
import Link from "next/link";
import { filieresHome } from "@/data/filieres";
import { getFiliereLucideIcon } from "@/lib/filiere-icons";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos filières métiers",
  description:
    "Six filières spécialisées : travaux publics, patrimoine, événementiel, hôtellerie, paysage, maintenance.",
};

export default function FilieresIndexPage() {
  return (
    <div className="border-b border-border bg-bg">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="label-caps text-accent">Nos filières</p>
        <h1 className="mt-4 font-display text-4xl text-primary sm:text-5xl text-balance">
          6 filières. 6 équipes. 1 exigence métier.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">
          Choisissez l&apos;univers qui correspond à votre besoin : vous serez mis en relation avec
          des consultants qui maîtrisent le terrain.
        </p>
        <ul className="mt-12 space-y-4">
          {filieresHome.map((f) => {
            const Icon = getFiliereLucideIcon(f.slug);
            const color = `var(${f.couleurVar})`;
            return (
              <li key={f.slug}>
                <Link
                  href={`/filieres/${f.slug}`}
                  className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-shadow hover:shadow-card-hover"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border bg-bg"
                    style={{ borderColor: color, color }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2 font-display text-xl text-primary group-hover:text-accent-dark">
                      {f.nom}
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-sm text-text-muted">{f.promesse}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
