export type BrandDomain = 'construction' | 'hr' | 'technique' | 'insertion' | 'cdi';

export interface Brand {
  name: string;
  domain: BrandDomain;
  description: string;
  logoAlt: string;
  logoSrc: string;
}

export const brands: Brand[] = [
  {
    name: "Recrutop BTP / Grands Travaux",
    domain: "construction",
    description: "Intérim et recrutement pour le BTP, le TP et le génie civil : coffreurs-bancheurs, ferrailleurs, maçons, conducteurs d’engins, équipes pour ouvrages d’art et grands chantiers.",
    logoAlt: "Logo Recrutop BTP / Grands Travaux",
    logoSrc: "/assets/jpsi-logo.png",
  },
  {
    name: "Art & Intérim",
    domain: "construction",
    description: "Spécialiste des métiers d’art et des monuments historiques : tailleurs de pierre, maçons du patrimoine, compagnons et artisans intervenant sur le bâti ancien et les sites classés.",
    logoAlt: "Logo Art & Intérim",
    logoSrc: "/assets/artetinterim-logo.png",
  },
  {
    name: "Gofer",
    domain: "hr",
    description: "Agence d’intérim 100 % digitale dédiée à l’hôtellerie–restauration. Via une application mobile, les hôtels, restaurants et traiteurs accèdent à une communauté d’intérimaires qualifiés en cuisine, salle et réception.",
    logoAlt: "Logo Gofer",
    logoSrc: "/assets/gofer-logo.png",
  },
  {
    name: "Recrutop Rambouillet Restauration",
    domain: "hr",
    description: "Pôle de référence pour la restauration : restauration collective, traiteurs & événementiel culinaire, brasseries, bistrots et établissements gastronomiques.",
    logoAlt: "Logo Recrutop Rambouillet Restauration",
    logoSrc: "/assets/restauration-logo.png",
  },
  {
    name: "Recrutop Mecatech",
    domain: "technique",
    description: "Spécialiste de la maintenance et des métiers techniques : techniciens de maintenance, électromécaniciens, techniciens CVC et multi-techniques pour l’industrie, l’hôtellerie et le tertiaire.",
    logoAlt: "Logo Recrutop Mecatech",
    logoSrc: "/assets/mecatech-logo.png",
  },
  {
    name: "Recrutop Event",
    domain: "technique",
    description: "Pôle événementiel technique : techniciens son, lumière, plateau, vidéo, régisseurs et équipes techniques pour salons, concerts, événements corporate et productions live.",
    logoAlt: "Logo Recrutop Event",
    logoSrc: "/assets/event-logo.png",
  },
  {
    name: "Passerelle",
    domain: "insertion",
    description: "Structure d’insertion par l’activité économique. Passerelle accompagne les personnes éloignées de l’emploi avec un suivi personnalisé, des missions encadrées en entreprise et un objectif de retour durable à l’emploi.",
    logoAlt: "Logo Passerelle",
    logoSrc: "/assets/passerelle-logo.png",
  },
  {
    name: "Garden",
    domain: "insertion",
    description: "Activités liées aux espaces verts et à l’entretien des extérieurs : agents d’entretien, jardiniers, chefs d’équipe espaces verts pour collectivités, entreprises et acteurs locaux.",
    logoAlt: "Logo Garden",
    logoSrc: "/assets/garden-logo.png",
  },
  {
    name: "Recrutop Carrière",
    domain: "cdi",
    description: "Cabinet de placement CDI / CDD du groupe. Recrutop Carrière accompagne les entreprises sur leurs recrutements durables, dans les secteurs couverts par le groupe.",
    logoAlt: "Logo Recrutop Carrière",
    logoSrc: "/assets/carriere-logo.png",
  },
];

export const domainLabels: Record<BrandDomain, string> = {
  construction: "Construction & Patrimoine",
  hr: "Hôtellerie & Restauration",
  technique: "Technique & Opérations",
  insertion: "Insertion & Espaces verts",
  cdi: "CDI / CDD",
};
