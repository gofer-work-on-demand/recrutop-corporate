"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";

export function ContactRapideHome() {
  return (
    <AnimatedSection className="bg-[color-mix(in_srgb,var(--color-accent)_12%,var(--color-bg))] py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl text-primary sm:text-4xl text-balance">
          Vous cherchez le bon point d&apos;entrée ?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="p-6 transition-shadow hover:shadow-card-hover">
            <p className="label-caps text-accent">Entreprise</p>
            <p className="mt-3 font-display text-xl text-primary">
              Être orienté vers la bonne filière
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Un interlocuteur expert comprend vos enjeux avant de vous proposer des profils.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:text-accent-dark"
            >
              Nous contacter →
            </Link>
          </Card>
          <Card className="p-6 transition-shadow hover:shadow-card-hover">
            <p className="label-caps text-accent">Candidat</p>
            <p className="mt-3 font-display text-xl text-primary">
              Trouver des missions dans mon métier
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Identifiez la filière qui correspond à votre geste métier et à vos prérequis.
            </p>
            <Link
              href="/candidats"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:text-accent-dark"
            >
              Déposer mon CV →
            </Link>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
