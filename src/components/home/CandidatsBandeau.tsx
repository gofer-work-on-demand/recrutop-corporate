"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const points = [
  "Missions adaptées à votre profil",
  "Accompagnement et montée en compétences",
  "Opportunités dans des filières ciblées",
];

export function CandidatsBandeau() {
  return (
    <AnimatedSection className="border-b border-border bg-bg py-16 lg:py-24">
      <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ul className="order-2 space-y-3 lg:order-1 lg:self-center">
          {points.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-text"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl text-primary sm:text-4xl text-balance">
            Candidats & intérimaires : des missions cohérentes avec votre métier
          </h2>
          <p className="mt-4 text-text-muted text-balance">
            Vous êtes accompagné par des consultants spécialisés sur votre univers : compréhension
            des conditions terrain, des attentes et des parcours.
          </p>
          <Button href="/filieres" variant="outline" className="mt-8">
            Trouver ma filière / Déposer mon CV →
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
