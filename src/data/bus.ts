/**
 * Business Units du Groupe Recrutop
 * Chaque BU = page dédiée + bloc d'expertise cliquable
 */
export interface Bu {
  id: string;
  /** Slug pour la route /secteur/:slug */
  slug: string;
  name: string;
  shortName: string;
  brandName?: string;
  creneau?: string;
  promise: string;
  benefit?: string;
  metiers: string[];
  cta: string;
  ctaHref: string;
  logoSrc: string;
  visualClass: string;
  ctaColor: string;
  carouselImage?: string;
}

/** BU ultra-spécialisées (ordre affiché) */
export const bus: Bu[] = [
  {
    id: "tp-gc",
    slug: "travaux-publics-genie-civil",
    name: "Travaux Publics & Génie Civil",
    shortName: "TP & Génie Civil",
    brandName: "JPSI / TP-GC",
    creneau: "Les bâtisseurs d'infrastructures.",
    promise:
      "Une filière dédiée aux chantiers, aux réseaux, aux ouvrages et aux équipes qui construisent le territoire.",
    benefit:
      "Des profils évalués pour leur technicité, leur sécurité terrain et leur capacité à intervenir sur des environnements exigeants.",
    metiers: ["Coffrage", "VRD", "Conduite d'engins", "Encadrement chantier"],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/travaux-publics-genie-civil",
    logoSrc: "/assets/jpsi-logo.png",
    visualClass: "bu-visual-tp",
    ctaColor: "#d43136",
    carouselImage: "/assets/tpgc.jpg",
  },
  {
    id: "patrimoine",
    slug: "metiers-art-monuments-historiques",
    name: "Métiers d'Art & Monuments Historiques",
    shortName: "Patrimoine",
    brandName: "Art & Intérim",
    creneau: "La haute couture du bâtiment.",
    promise:
      "Une filière pensée pour les savoir-faire rares, le bâti ancien et les chantiers où la précision d'exécution est décisive.",
    benefit:
      "Des profils sélectionnés pour leur maîtrise des techniques traditionnelles, leur minutie et la pertinence de leurs références.",
    metiers: ["Taille de pierre", "Maçonnerie ancienne", "Charpente traditionnelle", "Staff & stuc"],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/metiers-art-monuments-historiques",
    logoSrc: "/assets/artetinterim-logo.png",
    visualClass: "bu-visual-patrimoine",
    ctaColor: "#e7a855",
    carouselImage: "/assets/artinterim.jpg",
  },
  {
    id: "event",
    slug: "evenementiel-technique",
    name: "Événementiel Technique (son, lumière, vidéo)",
    shortName: "Event",
    brandName: "Event",
    creneau: "La performance technique.",
    promise:
      "La filière des métiers qui rendent l'événement possible, du plateau à la régie, avec une culture du zéro défaut.",
    benefit:
      "Des profils qualifiés pour le live, la pression opérationnelle, la mobilité et les prérequis de sécurité technique.",
    metiers: [
      "Son / lumière / vidéo",
      "Rigging & structure",
      "Régie technique",
      "Profils live",
    ],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/evenementiel-technique",
    logoSrc: "/assets/event-logo.png",
    visualClass: "bu-visual-event",
    ctaColor: "#6c8999",
    carouselImage: "/assets/audiovisuel.png",
  },
  {
    id: "hotellerie-restauration",
    slug: "hotellerie-restauration-haut-de-gamme",
    name: "Hôtellerie & Restauration Haut de Gamme",
    shortName: "Hôtellerie & Restauration",
    brandName: "Gofer",
    creneau: "Le luxe et l'art de recevoir.",
    promise:
      "Une filière dédiée aux environnements où la qualité de service, la posture et le sens du détail ne se négocient pas.",
    benefit:
      "Des profils choisis pour leur niveau opérationnel, leur savoir-être et leur adéquation avec les standards premium.",
    metiers: ["Service en salle", "Brigade cuisine", "Gouvernance", "Accueil premium"],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/hotellerie-restauration-haut-de-gamme",
    logoSrc: "/assets/restauration-logo.png",
    visualClass: "bu-visual-chr",
    ctaColor: "#44769f",
    carouselImage: "/assets/hotellerierestau.png",
  },
  {
    id: "mecatech",
    slug: "maintenance-metiers-techniques",
    name: "Maintenance & Métiers Techniques",
    shortName: "Maintenance",
    brandName: "Mecatech",
    creneau: "Performance et continuité d'exploitation.",
    promise: "Une filière orientée continuité d'exploitation, conformité, diagnostic et fiabilité des interventions techniques.",
    benefit:
      "Des profils vérifiés sur leurs habilitations, leur capacité d'analyse et leur adaptation à des sites exigeants.",
    metiers: ["Maintenance industrielle", "CVC", "Électrotechnique", "Multitechnique"],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/maintenance-metiers-techniques",
    logoSrc: "/assets/mecatech-logo.png",
    visualClass: "bu-visual-mecatech",
    ctaColor: "#70b1ce",
  },
  {
    id: "paysage",
    slug: "metiers-paysage-amenagements-exterieurs",
    name: "Espaces Verts & Paysage",
    shortName: "Espaces Verts & Paysage",
    brandName: "Garden",
    creneau: "Les experts du vivant.",
    promise:
      "Une filière qui relie expertise du végétal, aménagements extérieurs et exigences techniques du terrain.",
    benefit:
      "Des profils qualifiés pour intervenir en création, entretien, irrigation, élagage et aménagement durable.",
    metiers: ["Création paysagère", "Élagage", "Irrigation", "Aménagements extérieurs"],
    cta: "Découvrir la filière",
    ctaHref: "/secteur/metiers-paysage-amenagements-exterieurs",
    logoSrc: "/assets/garden-logo.png",
    visualClass: "bu-visual-verts",
    ctaColor: "#1b9f46",
    carouselImage: "/assets/espacesverts.png",
  },
  {
    id: "restauration-collective",
    slug: "restauration-collective",
    name: "Restauration Collective",
    shortName: "Restauration Collective",
    brandName: "Extra / Rambouillet",
    creneau: "La restauration operationnelle, sans approximation.",
    promise:
      "Une BU dédiée à la restauration collective, aux traiteurs, aux brasseries et aux environnements où la régularité opérationnelle est essentielle.",
    benefit:
      "Des profils qualifiés pour les cadences, l'hygiène, l'organisation d'équipe et la continuité de service en production comme en salle.",
    metiers: ["Cuisine collective", "Service", "Production", "Traiteur & brasserie"],
    cta: "Découvrir la BU",
    ctaHref: "/secteur/restauration-collective",
    logoSrc: "/assets/restauration-logo.png",
    visualClass: "bu-visual-collective",
    ctaColor: "#b46a3c",
    carouselImage: "/assets/hotellerierestau.png",
  },
];

/** Transverse : placement CDI/CDD */
export const buCarriere = {
  id: "carriere",
  slug: "cabinet-placement",
  name: "Cabinet Placement",
  shortName: "Cabinet Placement",
  brandName: "Cabinet Placement",
  promise: "La BU transversale dédiée exclusivement au recrutement en CDI et CDD, au service de l'ensemble des métiers du groupe.",
  benefit: "Une approche conseil, structurée et exigeante pour les recrutements durables, les fonctions pénuriques et les profils à fort enjeu.",
  cta: "Découvrir la BU",
  ctaHref: "/secteur/cabinet-placement",
  logoSrc: "/assets/carriere-logo.png",
  visualClass: "bu-visual-carriere",
  ctaColor: "#e06e02",
};

export function getBuBySlug(slug: string): Bu | undefined {
  return bus.find((b) => b.slug === slug);
}
