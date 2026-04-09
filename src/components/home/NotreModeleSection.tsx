"use client";

import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { staggerContainer, fadeUpItem } from "@/lib/motion";

const piliers = [
  {
    titre: "Pertinence",
    texte: "Profils adaptés aux réalités du terrain et aux environnements d'intervention.",
    icone: Target,
  },
  {
    titre: "Réactivité",
    texte: "Équipes dédiées par filière et circuits courts pour répondre vite, sans perdre en exigence.",
    icone: Zap,
  },
  {
    titre: "Exigence",
    texte: "Sécurité, savoir-faire et savoir-être : des critères non négociables à chaque étape.",
    icone: ShieldCheck,
  },
];

export function NotreModeleSection() {
  return (
    <AnimatedSection className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl text-balance">
            Notre modèle : la spécialisation métier
          </h2>
          <p className="mt-4 text-text-muted text-balance">
            Nous structurons l&apos;agence en filières autonomes pour garantir une lecture fine du
            besoin, une évaluation technique solide et un accompagnement cohérent avec votre univers.
          </p>
        </div>
        <motion.ul
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {piliers.map((p) => {
            const Icon = p.icone;
            return (
              <motion.li key={p.titre} variants={fadeUpItem}>
                <Card className="h-full p-6 transition-shadow hover:shadow-card-hover">
                  <Icon className="h-9 w-9 text-accent" strokeWidth={1.25} aria-hidden />
                  <h3 className="mt-4 font-display text-xl text-primary">{p.titre}</h3>
                  <p className="mt-2 text-sm text-text-muted">{p.texte}</p>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </AnimatedSection>
  );
}
