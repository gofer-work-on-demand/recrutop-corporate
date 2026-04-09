"use client";

import { HeartHandshake, Network, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PASSERELLE_SITE_URL } from "@/config/site";

const piliers = [
  {
    titre: "Impact Social",
    sous: "Transformer l'engagement en compétence métier",
    Icon: Sparkles,
  },
  {
    titre: "Synergie Groupe",
    sous: "Accès privilégié à nos filières d'experts",
    Icon: Network,
  },
  {
    titre: "Accompagnement",
    sous: "Suivi social & professionnel renforcé",
    Icon: HeartHandshake,
  },
];

export function PasserelleSection() {
  return (
    <AnimatedSection className="border-b border-black/5 bg-dark py-16 text-white lg:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <span
          className="inline-flex rounded-pill px-3 py-1 text-xs font-bold uppercase tracking-wide text-white font-heading"
          style={{ backgroundColor: "#ED7402" }}
        >
          Engagement sociétal
        </span>
        <h2 className="mt-5 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl text-balance">
          Passerelle : le trait d&apos;union vers l&apos;emploi durable
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Le talent n&apos;a pas de parcours type, il n&apos;a que des potentiels.
        </p>
        <p className="mt-6 max-w-3xl text-white/85">
          Passerelle est notre entité dédiée à l&apos;Insertion par l&apos;Activité Économique
          (IAE). Elle identifie des profils éloignés de l&apos;emploi, les forme et les intègre
          au cœur de nos domaines spécialisés.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {piliers.map(({ titre, sous, Icon }) => (
            <li
              key={titre}
              className="flex gap-3 rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <Icon className="mt-0.5 h-6 w-6 shrink-0 text-passerelle" strokeWidth={1.5} />
              <span>
                <span className="block font-heading font-semibold text-white">{titre}</span>
                <span className="mt-1 block text-sm text-white/75">{sous}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="/marques/passerelle" variant="bu" buColor="#ED7402">
            Découvrir Passerelle →
          </Button>
          <span className="text-center text-sm text-white/80 sm:text-left">
            Site officiel, plaquette et présentation des agences :
            {" "}
            <a
              href={PASSERELLE_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              www.passerelle-insertion.fr ↗
            </a>
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
