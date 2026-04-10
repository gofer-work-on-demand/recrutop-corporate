export type MarqueSlug =
  | "gofer"
  | "event"
  | "passerelle"
  | "garden"
  | "recrutop-carriere"
  | "tp-gc"
  | "art-interim"
  | "mecatech";

export type DomaineSlug =
  | "chr-evenementiel"
  | "insertion-jardins"
  | "construction"
  | "maintenance";

export interface ChiffreCle {
  label: string;
  valeur: string;
}

export interface Enjeu {
  titre: string;
  texte: string;
}

export interface CategorieMetiers {
  categorie: string;
  items: string[];
}

export interface EtapeEval {
  etape: number;
  titre: string;
  texte: string;
}

export interface MarqueData {
  slug: MarqueSlug;
  nom: string;
  couleur: string;
  domaineSlug: DomaineSlug;
  domaineLabel: string;
  /** Fil d’Ariane : lien du « domaine » si différent de `/domaines/{domaineSlug}` */
  domaineBreadcrumbHref?: string;
  tagline: string;
  description: string;
  activite: string;
  secteurDescription: string;
  chiffresCles: ChiffreCle[];
  enjeux: Enjeu[];
  metiers: CategorieMetiers[];
  habilitations: string[];
  methodeEvaluation: EtapeEval[];
  valeurAjoutee: string[];
  /** Liens offres / site dédié */
  siteExterne?: string;
  estEngagementSocietal?: boolean;
}

export const marques: MarqueData[] = [
  {
    slug: "gofer",
    nom: "GOFER",
    couleur: "#00738E",
    domaineSlug: "chr-evenementiel",
    domaineLabel: "CHR & Événementiel",
    tagline: "Hôtellerie / Restauration",
    description:
      "La marque GOFER du groupe pour l'hôtellerie et la restauration.",
    activite:
      "Renforts et recrutements en hôtellerie et restauration : réception, salle, cuisine et service.",
    secteurDescription:
      "GOFER mobilise des profils alignés sur vos exigences de service et la réactivité terrain Recrutop.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Réactivité",
        texte: "Des renforts mobilisables rapidement sur vos créneaux critiques.",
      },
      {
        titre: "Digital + humain",
        texte: "Une interface fluide portée par nos consultants CHR.",
      },
    ],
    metiers: [
      {
        categorie: "Opérationnel CHR",
        items: [
          "Extra cuisine",
          "Extra salle",
          "Réception",
          "Coffee shop",
          "Room service",
        ],
      },
    ],
    habilitations: ["HACCP selon poste", "SST"],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Paramétrage du besoin",
        texte: "Établissement, créneau, profils recherchés.",
      },
      {
        etape: 2,
        titre: "Matching",
        texte: "Sélection des profils disponibles et qualifiés.",
      },
      {
        etape: 3,
        titre: "Contrôle qualité",
        texte: "Validation des compétences attendues par les sites.",
      },
      {
        etape: 4,
        titre: "Suivi",
        texte: "Feedback et optimisation des prochaines missions.",
      },
    ],
    valeurAjoutee: [
      "Un canal digital spécialisé CHR, aligné sur vos standards de service",
      "Une continuité avec les autres marques du domaine",
    ],
  },
  {
    slug: "event",
    nom: "Event",
    couleur: "#99B4C2",
    domaineSlug: "chr-evenementiel",
    domaineLabel: "CHR & Événementiel",
    tagline: "Technique événementielle",
    description:
      "Techniciens son, lumière, vidéo, plateau et régisseurs pour vos productions.",
    activite:
      "Techniciens son, lumière, vidéo, plateau et régisseurs pour salons, concerts, événements corporate et productions live.",
    secteurDescription:
      "Des profils habitués au terrain événementiel et aux exigences de sécurité associées.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Fiabilité technique",
        texte: "Des équipes qui maîtrisent la chaîne image et son.",
      },
      {
        titre: "Conformité",
        texte: "Habilitations et autorisations encadrées.",
      },
    ],
    metiers: [
      {
        categorie: "Technique & plateau",
        items: [
          "Technicien son / lumière / vidéo",
          "Road",
          "Rigger",
          "Régisseur technique / plateau / général",
        ],
      },
    ],
    habilitations: [
      "Habilitation électrique",
      "CACES R486",
      "Travail en hauteur",
      "SST",
    ],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Cahier des charges",
        texte: "Typologie d'événement, planning technique, risques.",
      },
      {
        etape: 2,
        titre: "Audit compétences",
        texte: "Vérification des habilitations et des expériences terrain.",
      },
      {
        etape: 3,
        titre: "Mise en condition",
        texte: "Brief sécurité et process site.",
      },
      {
        etape: 4,
        titre: "Retour d'expérience",
        texte: "Capitalisation pour les prochaines productions.",
      },
    ],
    valeurAjoutee: [
      "Experts événementiel, pas de profils « polyvalents » sans culture prod",
      "Réponse rapide sur des exigences techniques fortes",
    ],
  },
  {
    slug: "passerelle",
    nom: "Passerelle",
    couleur: "#ED7402",
    domaineSlug: "insertion-jardins",
    domaineLabel: "Insertion & Espaces verts",
    tagline: "ETTI — insertion par l'activité économique",
    description:
      "Entité dédiée aux publics éloignés de l'emploi : accompagnement, formation et intégration dans nos filières.",
    activite:
      "Entreprise de Travail Temporaire d'Insertion (ETTI) — accompagnement de publics éloignés de l'emploi via des missions encadrées, un suivi socio-professionnel et la réponse aux clauses sociales.",
    secteurDescription:
      "Passerelle est le trait d'union entre engagement sociétal et expertises métiers du groupe.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Impact social",
        texte: "Transformer l'engagement en compétences utiles en entreprise.",
      },
      {
        titre: "Synergie groupe",
        texte: "Accès privilégié aux filières spécialisées Recrutop.",
      },
    ],
    metiers: [
      {
        categorie: "Accompagnement",
        items: [
          "Missions d'insertion cadrées",
          "Montée en compétences",
          "Suivi socio-professionnel",
        ],
      },
    ],
    habilitations: ["Selon filière d'affectation", "SST"],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Accueil & diagnostic",
        texte: "Parcours, objectifs, besoins de structuration.",
      },
      {
        etape: 2,
        titre: "Positionnement",
        texte: "Identification des filières et marques porteuses.",
      },
      {
        etape: 3,
        titre: "Mission encadrée",
        texte: "Tutorat terrain et points de suivi renforcés.",
      },
      {
        etape: 4,
        titre: "Projection durable",
        texte: "Perspectives d'emploi ou de formation.",
      },
    ],
    valeurAjoutee: [
      "Une entité ETTI au sein d'un groupe à forte technicité métier",
      "Un parcours personnalisé, pas une promesse générique",
    ],
    siteExterne: "https://www.passerelle-insertion.fr/",
    estEngagementSocietal: true,
  },
  {
    slug: "garden",
    nom: "Garden",
    couleur: "#1B9F46",
    domaineSlug: "insertion-jardins",
    domaineLabel: "Insertion & Espaces verts",
    tagline: "Espaces verts & propreté urbaine",
    description:
      "Équipes terrain pour parcs, jardins et sites publics ou privés.",
    activite:
      "Équipes terrain pour l'entretien des parcs, jardins, sites publics et privés : tonte, taille, plantations, propreté urbaine.",
    secteurDescription:
      "Garden déploie des équipes habituées aux contraintes d'exploitation et de sécurité en milieu ouvert.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Qualité paysagère",
        texte: "Respect des plans de gestion et des périodes de chantier.",
      },
      {
        titre: "Sécurité",
        texte: "Habilitations et équipements adaptés aux interventions.",
      },
    ],
    metiers: [
      {
        categorie: "Terrain espaces verts",
        items: [
          "Ouvrier paysagiste",
          "Jardinier",
          "Chef d'équipe",
          "Élagueur",
          "Maçon paysagiste",
          "Technicien arrosage",
          "Agent compostage",
        ],
      },
    ],
    habilitations: [
      "CACES R482",
      "AIPR",
      "H0B0/B1V",
      "SST",
      "Travail en hauteur",
    ],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Analyse site",
        texte: "Typologie des travaux, engins, accès, saisonnalité.",
      },
      {
        etape: 2,
        titre: "Adéquation profils",
        texte: "Matching habilitations / expérience.",
      },
      {
        etape: 3,
        titre: "Intégration",
        texte: "Brief sécurité et méthodes de travail.",
      },
      {
        etape: 4,
        titre: "Pilotage",
        texte: "Suivi qualité et régularité opérationnelle.",
      },
    ],
    valeurAjoutee: [
      "Des équipes spécialisées espaces verts, avec culture sécurité forte",
      "Capacité à monter en charge sur les campagnes d'entretien",
    ],
  },
  {
    slug: "recrutop-carriere",
    nom: "Recrutop Carrière",
    couleur: "#EAAC5A",
    domaineSlug: "chr-evenementiel",
    domaineLabel: "CDD / CDI",
    domaineBreadcrumbHref: "/#recrutement-cdd-cdi",
    tagline: "Cabinet recrutement CDI / CDD",
    description:
      "Recrutement direct de profils qualifiés et managers sur l'ensemble des univers couverts par le groupe.",
    activite:
      "Cabinet de recrutement direct CDI/CDD — profils qualifiés et managers dans tous les domaines couverts par les pôles Recrutop.",
    secteurDescription:
      "Une approche « search » alignée sur les filières Recrutop : compréhension métier, évaluation technique, accompagnement candidat.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Profils qualifiés",
        texte: "Ciblage sur compétences et adéquation culturelle.",
      },
      {
        titre: "Vision transverse groupe",
        texte: "Accès aux expertises des différentes marques.",
      },
    ],
    metiers: [
      {
        categorie: "Cabinet",
        items: [
          "Ingénieurs & managers",
          "Experts terrain",
          "Profils support",
        ],
      },
    ],
    habilitations: [],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Brief métier",
        texte: "Compréhension du poste et du contexte.",
      },
      {
        etape: 2,
        titre: "Sourcing ciblé",
        texte: "Identification passive et active.",
      },
      {
        etape: 3,
        titre: "Évaluation",
        texte: "Entretiens techniques et comportementaux.",
      },
      {
        etape: 4,
        titre: "Intégration",
        texte: "Suivi des débuts et accompagnement.",
      },
    ],
    valeurAjoutee: [
      "Un cabinet porté par la culture filière du groupe",
      "Des recrutements CDI/CDD sur des métiers exigeants",
    ],
  },
  {
    slug: "tp-gc",
    nom: "JPSI / TP-GC",
    couleur: "#D1252A",
    domaineSlug: "construction",
    domaineLabel: "Construction & Patrimoine",
    tagline: "Travaux publics & génie civil",
    description:
      "Profils chantier pour grands travaux, infrastructures et réseaux.",
    activite:
      "Profils de chantier pour grands travaux, ouvrages d'art, réseaux, infrastructures : manœuvres, coffreurs, conducteurs d'engins.",
    secteurDescription:
      "Des équipes habituées aux exigences de production, de sécurité et de coordination de chantier.",
    chiffresCles: [
      { label: "Secteur TP (réf.)", valeur: "51,3 Mds€ CA annuel" },
      { label: "Salariés sectoriels (réf.)", valeur: "~331 000" },
      { label: "Entreprises (réf.)", valeur: "~8 000" },
    ],
    enjeux: [
      {
        titre: "Cadence & sécurité",
        texte: "Tenir les plannings avec une exigence constante sur les habilitations.",
      },
      {
        titre: "Compétences pointues",
        texte: "Ouvriers et encadrement au plus près des ouvrages.",
      },
    ],
    metiers: [
      {
        categorie: "Ouvriers",
        items: [
          "Coffreur / bancheur",
          "Maçon TP / VRD / Génie civil",
          "Ferrailleur",
          "Canalisateur",
          "Poseur réseaux secs",
          "Conducteur d'engins",
          "Terrassier",
        ],
      },
      {
        categorie: "Encadrement",
        items: [
          "Chef d'équipe TP",
          "Chef de chantier",
          "Conducteur de travaux",
          "Ingénieur travaux",
        ],
      },
    ],
    habilitations: [
      "CACES R482 (A, B1)",
      "R489",
      "AIPR",
      "Habilitation électrique H0-BR",
      "PASI",
      "SST",
    ],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Analyse chantier",
        texte: "Nature des ouvrages, risques, organisation.",
      },
      {
        etape: 2,
        titre: "Adéquation profils",
        texte: "Vérification des cartes et de l'expérience terrain.",
      },
      {
        etape: 3,
        titre: "Intégration",
        texte: "Accueil sécurité et tutorat.",
      },
      {
        etape: 4,
        titre: "Suivi client",
        texte: "Pilotage de la performance et de la sécurité.",
      },
    ],
    valeurAjoutee: [
      "Experts chantier TP/GC, avec exigence documentaire forte",
      "Réactivité sur les montées en charge de personnel",
    ],
  },
  {
    slug: "art-interim",
    nom: "Art & Intérim",
    couleur: "#EAAC5A",
    domaineSlug: "construction",
    domaineLabel: "Construction & Patrimoine",
    tagline: "Métiers du patrimoine",
    description:
      "Intérim pour artisans du patrimoine : pierre, bâti ancien, compagnons.",
    activite:
      "Intérim spécialisé pour les artisans du patrimoine : tailleurs de pierre, maçons du bâti ancien, compagnons et restaurateurs de monuments.",
    secteurDescription:
      "Chaque profil est évalué au regard du geste métier et du respect des techniques patrimoniales.",
    chiffresCles: [],
    enjeux: [
      {
        titre: "Rareté des talents",
        texte: "Identifier les spécialistes capables d'intervenir sur ouvrages sensibles.",
      },
      {
        titre: "Exigence qualité",
        texte: "Un tailleur de pierre patrimoine n'est pas un maçon standard.",
      },
    ],
    metiers: [
      {
        categorie: "Métiers d'art & patrimoine",
        items: [
          "Tailleur de pierre",
          "Maçon patrimoine",
          "Charpentier traditionnel",
          "Couvreur patrimoine",
          "Zingueur",
          "Staffeur / stucateur",
          "Sculpteur ornemaniste",
          "Menuisier patrimoine",
          "Peintre décorateur patrimoine",
        ],
      },
    ],
    habilitations: [
      "Travail en hauteur",
      "Échafaudage",
      "SST",
      "Habilitation électrique",
      "PASI",
    ],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Qualification du chantier",
        texte: "Période, matériaux, techniques attendues.",
      },
      {
        etape: 2,
        titre: "Présélection métier",
        texte: "Portfolio et références d'interventions.",
      },
      {
        etape: 3,
        titre: "Évaluation technique",
        texte: "Validation par un interlocuteur sensibilisé aux métiers d'art.",
      },
      {
        etape: 4,
        titre: "Suivi chantier",
        texte: "Points d'étape qualité avec le donneur d'ordre.",
      },
    ],
    valeurAjoutee: [
      "Un tailleur de pierre patrimoine ≠ un maçon standard.",
      "Une cellule dédiée aux interventions sur bâti ancien et monuments",
    ],
  },
  {
    slug: "mecatech",
    nom: "Mecatech",
    couleur: "#619DB9",
    domaineSlug: "maintenance",
    domaineLabel: "Technique & Maintenance",
    tagline: "Maintenance industrielle & CVC",
    description:
      "Techniciens maintenance, électromécaniciens et multitechnique pour sites industriels et tertiaires.",
    activite:
      "Techniciens de maintenance, électromécaniciens, CVC et multi-technique pour sites industriels, tertiaires et hôteliers.",
    secteurDescription:
      "Mecatech couvre des environnements sensibles où la disponibilité des équipements et la conformité sont critiques.",
    chiffresCles: [
      { label: "Maintenance en France (réf.)", valeur: "25+ Mds€ CA" },
      { label: "Emplois directs (réf.)", valeur: "~450 000" },
    ],
    enjeux: [
      {
        titre: "Disponibilité",
        texte: "Réduction des arrêts et maîtrise des interventions.",
      },
      {
        titre: "Multitechnique",
        texte: "Profils capables de croiser électricité, mécanique et fluides.",
      },
    ],
    metiers: [
      {
        categorie: "Industriel",
        items: [
          "Technicien maintenance industrielle",
          "Électromécanicien",
          "Automaticien",
          "Technicien hydraulique / pneumatique",
        ],
      },
      {
        categorie: "Électrique",
        items: [
          "Électricien industriel",
          "Technicien électrotechnique",
          "Tableautier",
          "Technicien HT/BT",
        ],
      },
      {
        categorie: "CVC & énergie",
        items: [
          "Technicien CVC",
          "Frigoriste",
          "Technicien chaudière",
          "Technicien GTC/GTB",
        ],
      },
      {
        categorie: "Multitechnique",
        items: [
          "Technicien multitechnique",
          "Agent maintenance bâtiment",
          "Technicien SSI",
          "Ascensoriste",
        ],
      },
    ],
    habilitations: [
      "Habilitation électrique (H0 à BC)",
      "CACES R486 / R489",
      "Fluides frigorigènes",
      "ATEX",
      "SST",
    ],
    methodeEvaluation: [
      {
        etape: 1,
        titre: "Cartographie des compétences",
        texte: "Equipements, plages d'astreinte, environnements (ATEX, etc.).",
      },
      {
        etape: 2,
        titre: "Vérification technique",
        texte: "Tests de montée en compétences et validation des habilitations.",
      },
      {
        etape: 3,
        titre: "Onboarding site",
        texte: "Intégration dans les procédures client.",
      },
      {
        etape: 4,
        titre: "Amélioration continue",
        texte: "Suivi KPI et feedback terrain.",
      },
    ],
    valeurAjoutee: [
      "Expertise technique ciblée, multi-marques groupe",
      "Capacité à adresser sites industriels, tertiaires et CHR",
    ],
  },
];

export function getMarqueBySlug(slug: string): MarqueData | undefined {
  return marques.find((m) => m.slug === slug);
}

export function getMarquesByDomaine(domaineSlug: DomaineSlug): MarqueData[] {
  return marques.filter((m) => m.domaineSlug === domaineSlug);
}

/** Ordre d'affichage homepage / mega menu (8 marques) */
export const marquesOrdreAffichage: MarqueSlug[] = [
  "gofer",
  "event",
  "passerelle",
  "garden",
  "recrutop-carriere",
  "tp-gc",
  "art-interim",
  "mecatech",
];
