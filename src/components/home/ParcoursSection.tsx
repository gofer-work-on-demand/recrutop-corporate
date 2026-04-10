"use client";

import { motion } from "framer-motion";
import { Building2, Check, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";
import { fadeUp, stagger } from "@/lib/motion";

const entreprisePoints = [
  "Profils ciblés, alignés métier",
  "Exigence sécurité et conformité",
  "Réactivité, continuité de service",
  "Suivi opérationnel et qualité",
];

const candidatPoints = [
  "Missions adaptées à votre profil",
  "Accompagnement et montée en compétences",
  "Opportunités dans des filières ciblées",
];

export function ParcoursSection() {
  return (
    <section className="border-b border-black/5 bg-bg-light py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 lg:grid-cols-2 lg:gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-card border border-black/5 bg-white p-8 shadow-card sm:p-10"
          >
            <Building2 className="h-10 w-10 text-primary" aria-hidden />
            <h2 className="mt-5 font-heading text-2xl font-bold text-dark">Vous recrutez ?</h2>
            <p className="mt-4 text-text">
              Nos équipes connaissent vos contraintes avant même de proposer des profils.
            </p>
            <ul className="mt-6 space-y-2">
              {entreprisePoints.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <Button href="/entreprises" className="mt-8">
              Trouver un expert filière →
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-card border border-black/5 bg-white p-8 shadow-card sm:p-10"
          >
            <UserRound className="h-10 w-10 text-primary" aria-hidden />
            <h2 className="mt-5 font-heading text-2xl font-bold text-dark">Vous cherchez un poste ?</h2>
            <p className="mt-4 text-text">
              Accompagné par des consultants spécialisés sur votre univers métier.
            </p>
            <ul className="mt-6 space-y-2">
              {candidatPoints.map((t) => (
                <li key={t} className="flex gap-2 text-sm text-text">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <Button href={CAREER_SITE_URL} external variant="outline" className="mt-8">
              Nos offres →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
