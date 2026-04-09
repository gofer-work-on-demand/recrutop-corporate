"use client";

import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const preuves = [
  "Profils ciblés, alignés métier",
  "Exigence sécurité et conformité",
  "Réactivité, continuité de service",
  "Suivi opérationnel et qualité",
];

export function EntreprisesBandeau() {
  return (
    <AnimatedSection className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl text-primary sm:text-4xl text-balance">
            Entreprises : des experts métiers pour vos enjeux terrain
          </h2>
          <p className="mt-4 text-text-muted text-balance">
            Vous gagnez en pertinence et en fiabilité : nos équipes connaissent vos contraintes
            avant même de proposer des profils.
          </p>
          <Button href="/contact" className="mt-8">
            Être rappelé par un expert filière →
          </Button>
        </div>
        <ul className="space-y-3 self-center">
          {preuves.map((t) => (
            <li key={t} className="flex gap-3 rounded-md border border-border bg-bg px-4 py-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
              <span className="font-medium text-text">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
