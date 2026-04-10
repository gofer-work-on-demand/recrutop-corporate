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
    tagline: "Hôtellerie / Restauration et événementiel technique",
    description:
      "Avec GOFER pour l'hôtellerie et la restauration, et Event pour la technique, des équipes adaptées aux besoins des sites.",
    marques: ["gofer", "event"],
  },
  {
    slug: "insertion-jardins",
    nom: "Insertion & Espaces verts",
    couleur: "#ED7402",
    tagline: "Insertion et métiers des espaces verts",
    description:
      "De l'ETTI avec Passerelle aux équipes Garden : un même groupe pour des parcours exigeants et adaptés.",
    marques: ["passerelle", "garden"],
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
