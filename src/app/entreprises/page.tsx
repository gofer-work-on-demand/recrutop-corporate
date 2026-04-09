import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Entreprises",
  description:
    "Profils ciblés par domaine et marque, exigence sécurité et réactivité terrain pour vos recrutements intérim et CDI.",
};

const points = [
  "Orientation vers le domaine et l'expert qui comprend votre chantier ou votre site",
  "Évaluation technique, habilitations et références systématiques",
  "Réactivité et continuité de service sans sacrifier la qualification",
  "Culture sécurité partagée avec vos équipes HSE et opérationnelles",
];

export default function EntreprisesPage() {
  return (
    <div className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Entreprises</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-dark sm:text-5xl text-balance">
          Des experts métiers pour vos enjeux terrain
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-text">
          Nos équipes sont structurées par domaine et marque : chaque besoin est qualifié par un
          consultant qui connaît vos contraintes opérationnelles, vos habilitations et votre rythme.
          Vous gagnez en pertinence, pas en volume de CV inconsistant.
        </p>
        <ul className="mt-10 max-w-2xl space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex gap-3 rounded-card border border-black/5 bg-bg-light px-4 py-3 text-text"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Être rappelé par un expert filière →</Button>
          <Button href="/#domaines" variant="outline">
            Explorer nos domaines →
          </Button>
        </div>
      </div>
    </div>
  );
}
