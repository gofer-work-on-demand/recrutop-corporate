import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Candidats & intérimaires",
  description:
    "Missions cohérentes avec votre métier : consultants spécialisés par domaine, accompagnement et montée en compétences.",
};

export default function CandidatsPage() {
  return (
    <div className="border-b border-black/5 bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Candidats</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-dark sm:text-5xl text-balance">
          Des missions cohérentes avec votre métier
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-text">
          Vous échangez avec un consultant qui comprend vos conditions terrain, vos prérequis
          (habilitations, autonomie, environnements) et vos objectifs de carrière. L&apos;objectif :
          des propositions alignées sur votre geste métier, pas sur un intitulé générique.
        </p>
        <ul className="mt-8 max-w-2xl list-disc space-y-2 pl-5 text-text">
          <li>Missions cadrées sur votre domaine et votre niveau d&apos;expérience</li>
          <li>Accompagnement et préparation aux exigences des sites</li>
          <li>Accès aux opportunités des marques spécialisées du groupe</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={CAREER_SITE_URL} external>
            Voir les offres (site carrière) →
          </Button>
          <Button href="/contact" variant="outline">
            Déposer ma demande / être recontacté →
          </Button>
        </div>
      </div>
    </div>
  );
}
