import type { DomaineSlug, MarqueSlug } from "./marques";

export type { DomaineSlug };

export interface DomaineData {
  slug: DomaineSlug;
  nom: string;
  couleur: string;
  tagline: string;
  description: string;
  marques: MarqueSlug[];
}

export const domaines: DomaineData[] = [
  {
    slug: "chr-evenementiel",
    nom: "CHR & Événementiel",
    couleur: "#00738E",
    tagline: "Hôtellerie, restauration et événementiel technique",
    description:
      "Des équipes dédiées aux brigades cuisine et salle, aux renforts digitaux via Gofer, et aux techniciens son, lumière et plateau.",
    marques: ["restauration-rambouillet", "gofer", "event"],
  },
  {
    slug: "insertion-jardins",
    nom: "Insertion / Espaces verts / Carrière",
    couleur: "#ED7402",
    tagline: "Insertion, paysage et recrutement direct",
    description:
      "De l'IAE avec Passerelle aux équipes Garden et au cabinet Recrutop Carrière : un même groupe pour des parcours exigeants et adaptés.",
    marques: ["passerelle", "garden", "recrutop-carriere"],
  },
  {
    slug: "construction",
    nom: "Construction & Patrimoine",
    couleur: "#D1252A",
    tagline: "Grands travaux et métiers du patrimoine",
    description:
      "Chantiers TP/GC avec JPSI et intérim spécialisé pour les artisans du patrimoine avec Art & Intérim.",
    marques: ["tp-gc", "art-interim"],
  },
  {
    slug: "maintenance",
    nom: "Technique & Maintenance",
    couleur: "#619DB9",
    tagline: "Maintenance industrielle et multitechnique",
    description:
      "Mecatech adresse les besoins en techniciens CVC, électromécanique, maintenance industrielle et sites sensibles.",
    marques: ["mecatech"],
  },
];

export function getDomaineBySlug(slug: string): DomaineData | undefined {
  return domaines.find((d) => d.slug === slug);
}
