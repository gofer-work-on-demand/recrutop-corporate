export interface ChiffreCle {
  valeur: string;
  label: string;
}

export interface Enjeu {
  titre: string;
  description: string;
}

export interface Metier {
  nom: string;
  description: string;
}

export interface CategorieMetiers {
  categorie: string;
  items: Metier[];
}

export interface EtapeEval {
  titre: string;
  description: string;
}

export interface FilierePageData {
  slug: string;
  nom: string;
  tagline: string;
  couleurVar: string;
  couleurHex: string;
  secteurDescription: string;
  chiffresCles: ChiffreCle[];
  enjeux: Enjeu[];
  metiers: CategorieMetiers[];
  habilitations: string[];
  methodeEvaluation: EtapeEval[];
  valeurAjouteeIntro: string;
  valeurAjoutee: string[];
  raisonChoisir: string[];
  offresLiees: { titre: string; meta: string; description: string }[];
  offresCta: string;
}

export interface FiliereHomeCard {
  slug: string;
  nom: string;
  promesse: string;
  exemplesMetiers: string[];
  couleurVar: string;
}

const etapesType = (
  filiere: string
): EtapeEval[] => [
  {
    titre: "Questionnaire technique métier",
    description: `Approfondissement des gestes, environnements et niveau d'autonomie propres à la filière ${filiere}.`,
  },
  {
    titre: "Validation des habilitations",
    description:
      "Vérification des titres, dates de validité et cohérence avec les missions visées.",
  },
  {
    titre: "Contrôle de références systématique",
    description:
      "Échanges avec encadrants et exploitants pour confirmer la réalité opérationnelle du profil.",
  },
  {
    titre: "Évaluation comportementale",
    description:
      "Rigueur, sécurité, esprit d'équipe et tenue sous contrainte : des critères aussi décisifs que la technique.",
  },
];

export const filieresHome: FiliereHomeCard[] = [
  {
    slug: "travaux-publics",
    nom: "Travaux publics & génie civil",
    promesse:
      "Des équipes habituées aux environnements chantier : sécurité, exigences client, délais.",
    exemplesMetiers: [
      "Coffreur",
      "Maçon VRD",
      "Conducteur d'engins",
      "Chef de chantier",
    ],
    couleurVar: "--color-filiere-tp",
  },
  {
    slug: "patrimoine",
    nom: "Métiers d'art & monuments historiques",
    promesse:
      "Une filière dédiée aux compétences rares, à l'exigence du geste et au respect du patrimoine.",
    exemplesMetiers: [
      "Tailleur de pierre",
      "Maçon patrimoine",
      "Charpentier traditionnel",
      "Staffeur",
    ],
    couleurVar: "--color-filiere-patrimoine",
  },
  {
    slug: "evenementiel",
    nom: "Événementiel technique",
    promesse:
      "La puissance technique derrière l'événement. Des experts de la régie pour vos productions les plus ambitieuses.",
    exemplesMetiers: [
      "Technicien son / lumière / vidéo",
      "Rigger",
      "Régisseur technique",
    ],
    couleurVar: "--color-filiere-event",
  },
  {
    slug: "hotellerie",
    nom: "Hôtellerie & restauration haut de gamme",
    promesse:
      "Réactivité, savoir-être, adaptation : des équipes taillées pour les pics d'activité et la qualité de service.",
    exemplesMetiers: [
      "Maître d'hôtel",
      "Chef de partie",
      "Gouvernante",
      "Réceptionniste",
    ],
    couleurVar: "--color-filiere-hotel",
  },
  {
    slug: "paysage",
    nom: "Métiers du paysage & aménagements extérieurs",
    promesse:
      "Des profils opérationnels, fiables et réguliers, adaptés à vos contraintes saisonnières et terrain.",
    exemplesMetiers: [
      "Ouvrier paysagiste",
      "Élagueur",
      "Maçon VRD paysage",
      "Technicien arrosage",
    ],
    couleurVar: "--color-filiere-paysage",
  },
  {
    slug: "maintenance",
    nom: "Maintenance & métiers techniques",
    promesse:
      "Des techniciens qualifiés pour assurer la continuité, la sécurité et la performance de vos installations.",
    exemplesMetiers: [
      "Technicien CVC",
      "Électromécanicien",
      "Automaticien",
      "Technicien multitechnique",
    ],
    couleurVar: "--color-filiere-maintenance",
  },
];
    
function m(nom: string, description: string): Metier {
  return { nom, description };
}

export const filieresDetail: Record<string, FilierePageData> = {
  "travaux-publics": {
    slug: "travaux-publics",
    nom: "Travaux publics & génie civil",
    tagline:
      "Recrutement d'experts de terrain pour les infrastructures, les réseaux et l'encadrement de chantier.",
    couleurVar: "--color-filiere-tp",
    couleurHex: "#3D5A80",
    secteurDescription:
      "Les travaux publics et le génie civil structurent le territoire : voiries, réseaux, terrassements et grands ouvrages. Les besoins sont immédiats, techniques et soumis à une exigence sécurité maximale.",
    chiffresCles: [
      { valeur: "51,3 Mds€", label: "Chiffre d'affaires annuel (FNTP)" },
      { valeur: "~331 000", label: "Salariés du secteur" },
      { valeur: "~8 000", label: "Entreprises actives" },
    ],
    enjeux: [
      {
        titre: "Pénurie de profils qualifiés",
        description:
          "Coffreurs, maçons VRD, conducteurs d'engins et encadrants sont durablement recherchés.",
      },
      {
        titre: "Exigence sécurité maximale",
        description:
          "Coactivité, circulation d'engins, travaux en tranchées : chaque mission impose rigueur et conformité.",
      },
      {
        titre: "Complexité technique croissante",
        description:
          "Digitalisation chantier, BIM et normes environnementales élèvent le niveau d'exigence des équipes.",
      },
    ],
    metiers: [
      {
        categorie: "Métiers ouvriers",
        items: [
          m(
            "Coffreur / bancheur",
            "Coffrage, banches et respect des phases béton sous contraintes chantier."
          ),
          m("Maçon TP", "Gros œuvre et infrastructures selon méthodes et plans d'exécution."),
          m(
            "Maçon VRD",
            "Voirie, réseaux secs et aménagements urbains avec lecture terrain."
          ),
          m(
            "Maçon génie civil",
            "Ouvrages d'art et structures avec exigence de précision et sécurité."
          ),
          m("Ferrailleur", "Armatures et préparations pour structures béton."),
          m("Canalisateur", "Réseaux humides, tranchées et raccordements."),
          m("Poseur réseaux secs", "Pose et raccordement des réseaux techniques."),
          m(
            "Conducteur d'engins",
            "Exploitation d'engins avec CACES adaptés et culture sécurité."
          ),
          m("Terrassier", "Terrassements, plateformes et préparation de sols."),
        ],
      },
      {
        categorie: "Encadrement chantier",
        items: [
          m("Chef d'équipe TP", "Animation d'équipe, méthodes et sécurité de proximité."),
          m("Chef de chantier", "Pilotage des phases, délais, coactivité et relation client."),
          m("Conducteur de travaux", "Coordination des lots et pilotage économique du chantier."),
          m("Ingénieur travaux", "Conception-exécution, interfaces et optimisation chantier."),
        ],
      },
    ],
    habilitations: [
      "CACES R482 (A, B1)",
      "R489",
      "AIPR",
      "Habilitation électrique H0B0-BR",
      "PASI",
      "SST",
    ],
    methodeEvaluation: etapesType("TP & génie civil"),
    valeurAjouteeIntro:
      "Recrutop ne propose pas des profils génériques : nous parlons le langage du chantier.",
    valeurAjoutee: [
      "Des recruteurs qui distinguent VRD, réseaux, génie civil et encadrement.",
      "Lecture métier du besoin client et des conditions d'accès réelles.",
      "Évaluation technique au-delà du CV et des simples disponibilités.",
      "Exigence sécurité intégrée à chaque étape de qualification.",
    ],
    raisonChoisir: [
      "Une filière dédiée TP & génie civil, pas un vivier « bâtiment tout-terrain ».",
      "Contrôle systématique des habilitations et de leur cohérence mission.",
      "Compréhension des phases travaux et de la pression délais.",
      "Accompagnement entreprises et candidats avec des interlocuteurs terrain.",
      "Alignement fort avec les enjeux FNTP et grands acteurs des travaux.",
    ],
    offresLiees: [
      {
        titre: "Maçon VRD",
        meta: "Île-de-France • Intérim",
        description:
          "Voiries et réseaux avec procédures sécurité strictes et autonomie terrain.",
      },
      {
        titre: "Canalisateur",
        meta: "Paris et proche couronne • Mission longue",
        description:
          "Réseaux humides, tranchées et coordination avec équipes chantier.",
      },
      {
        titre: "Chef de chantier TP",
        meta: "Île-de-France • CDI",
        description:
          "Pilotage des équipes, sécurité et organisation des phases d'exécution.",
      },
    ],
    offresCta: "Voir toutes les offres Travaux publics",
  },

  patrimoine: {
    slug: "patrimoine",
    nom: "Métiers d'art & monuments historiques",
    tagline:
      "Recrutement d'experts du bâti ancien, des savoir-faire rares et des chantiers patrimoniaux exigeants.",
    couleurVar: "--color-filiere-patrimoine",
    couleurHex: "#6B4226",
    secteurDescription:
      "Le patrimoine exige précision, respect des matériaux et compréhension des prescriptions. Recruter ici, c’est valider un vrai savoir-faire, pas un intitulé générique issu du bâtiment.",
    chiffresCles: [
      { valeur: "Niche", label: "Compétences rares et peu substituables" },
      { valeur: "100%", label: "Filière dédiée aux gestes patrimoniaux" },
      { valeur: "ABF", label: "Culture prescription et contextualisation site" },
    ],
    enjeux: [
      {
        titre: "Rareté des compétences",
        description:
          "Taille de pierre, staff, charpente traditionnelle : des métiers à transmission exigeante.",
      },
      {
        titre: "Exigence patrimoniale (ABF)",
        description:
          "Contraintes architecturales, traces et techniques à l'identique ou adaptées.",
      },
      {
        titre: "Normes strictes & finesse d'exécution",
        description:
          "Niveaux de finition et respect des phases déterminants pour la réception.",
      },
      {
        titre: "Sécurité en environnement ancien",
        description:
          "Structures fragiles, hauteur, échafaudages et organisation de chantier sensible.",
      },
    ],
    metiers: [
      {
        categorie: "Métiers d'art",
        items: [
          m("Tailleur de pierre", "Taille, restauration et mise en œuvre sur pierre ancienne."),
          m("Maçon du patrimoine", "Chaux, pierre et techniques traditionnelles."),
          m("Maçon pierre", "Mise en œuvre pierre sur ouvrages patrimoniaux et classés."),
          m("Charpentier traditionnel", "Structures bois, assemblages et mise au volume."),
          m("Couvreur patrimoine", "Couvertures anciennes et faîtage technique."),
          m("Zingueur traditionnel", "Zinc et calibrage sur bâti historique."),
          m("Staffeur / stucateur", "Stucs, moulures et ornements."),
          m("Sculpteur ornemaniste", "Décor sculpté et restitution d'ornementation."),
          m("Menuisier patrimoine", "Boiseries, ferrures et respect stylistique."),
          m("Peintre décorateur patrimoine", "Décor, patine et cycles anciens."),
        ],
      },
      {
        categorie: "Encadrement",
        items: [
          m("Chef d'équipe patrimoine", "Encadrement de gestes et exigence qualité au joint."),
          m(
            "Conducteur de travaux patrimoine",
            "Pilotage de chantiers sous forte contrainte patrimoniale."
          ),
          m(
            "Chargé d'études monuments historiques",
            "Études, diagnostics et proposition technique."
          ),
          m(
            "Architecte collaborateur",
            "Interface chantier / maîtrise d'œuvre sur opérations sensibles."
          ),
        ],
      },
    ],
    habilitations: [
      "Travail en hauteur",
      "Montage / utilisation d'échafaudage",
      "SST",
      "Habilitation électrique",
      "PASI",
    ],
    methodeEvaluation: etapesType("patrimoine & métiers d'art"),
    valeurAjouteeIntro:
      "Un tailleur de pierre patrimoine ≠ un maçon standard. Nous tenons cette nuance comme critère de recrutement.",
    valeurAjoutee: [
      "Filière exclusivement dédiée au patrimoine et aux savoir-faire rares.",
      "Références vérifiées sur bâti ancien ou sites sensibles.",
      "Lecture fine des contraintes architecturales et des gestes attendus.",
    ],
    raisonChoisir: [
      "Experts qui distinguent patrimoine et grande masse bâtiment.",
      "Approche craftsmanship, pas volume de CV.",
      "Process de référence et de contrôle des finitions.",
      "Compréhension des enjeux ABF et des phases de diagnostic.",
      "Accompagnement candidats et entreprises sur la durée de chantier.",
    ],
    offresLiees: [
      {
        titre: "Tailleur de pierre",
        meta: "Paris • Intérim",
        description: "Restauration de façade et taille sur pierre à forte exigence.",
      },
      {
        titre: "Maçon du patrimoine",
        meta: "Île-de-France • Mission longue",
        description: "Chaux, pierre et reprises sur bâti ancien.",
      },
      {
        titre: "Conducteur de travaux patrimoine",
        meta: "Île-de-France • CDI",
        description: "Coordination des corps d'état et suivi qualitatif patrimonial.",
      },
    ],
    offresCta: "Voir toutes les offres Patrimoine",
  },

  evenementiel: {
    slug: "evenementiel",
    nom: "Événementiel technique (son, lumière, vidéo)",
    tagline:
      "Recrutement d'experts pour le live, les installations temporaires et la fiabilité de production.",
    couleurVar: "--color-filiere-event",
    couleurHex: "#1B4332",
    secteurDescription:
      "Concerts, corporate, salons ou lieux permanents : la production live exige rigueur, mobilité et culture du zéro défaut. Le bon profil est fiable sous pression, pas seulement disponible.",
    chiffresCles: [
      { valeur: "~380 000", label: "Événements pros / an (France)" },
      { valeur: "455 000+", label: "Emplois directs et indirects" },
    ],
    enjeux: [
      {
        titre: "Exigence technique zéro défaut",
        description:
          "Une défaillance technique impacte immédiatement la prestation et l'image.",
      },
      {
        titre: "Mobilité intense",
        description:
          "Montage / démontage, horaires décalés et adaptation rapide aux sites.",
      },
      {
        titre: "Compétences rares",
        description:
          "Son, lumière, vidéo, structure et régie : des spécialisations difficiles à remplacer.",
      },
      {
        titre: "Sécurité & contraintes physiques",
        description:
          "Hauteur, charges, montages temporaires et coactivité d'équipe.",
      },
    ],
    metiers: [
      {
        categorie: "Son",
        items: [
          m("Technicien son", "Installation, réglages et exploitation en live."),
          m("Ingénieur du son", "Design sonore et supervision technique."),
          m("Technicien HF", "Gestion sans-fil et fréquences en environnement dense."),
          m("Road son", "Logistique, pièces de rechange et continuité de spectacle."),
        ],
      },
      {
        categorie: "Lumière",
        items: [
          m("Technicien lumière", "Réseau DMX, consoles et exploitation plateau."),
          m("Pupitreur", "Pilotage des looks et coordination artistique lumière."),
          m("Électricien événementiel", "Alimentations temporaires et conformité installation."),
          m("Road lumière", "Montage, maintenance et stock matériel tournée."),
        ],
      },
      {
        categorie: "Vidéo",
        items: [
          m("Technicien vidéo", "Flux, caméras, diffusion et coordination régie."),
          m("Opérateur vidéo", "Cadrage, live et enchaînements."),
          m("Technicien mapping", "Calibration, serveurs média et murs image."),
          m("Road vidéo", "Chaîne complète vidéo itinérante."),
        ],
      },
      {
        categorie: "Structure & rigging",
        items: [
          m("Monteur structure", "Montage de structures scéniques et précadres."),
          m("Rigger", "Élingues, équilibre des charges et sécurité au crochet."),
          m("Chef rigger", "Hiérarchisation des accroches et responsabilité terrain."),
        ],
      },
      {
        categorie: "Régie",
        items: [
          m("Régisseur technique", "Supervision des flux techniques et des équipes."),
          m("Régisseur plateau", "Interface artistes / technique pendant le show."),
          m("Régisseur général", "Vision globale production et arbitrages."),
          m("Régisseur de salle", "Exploitation du lieu et continuité de service."),
        ],
      },
    ],
    habilitations: [
      "Habilitation électrique",
      "CACES R486 (nacelle)",
      "Travail en hauteur",
      "Formation accroche & rigging",
      "SST",
    ],
    methodeEvaluation: etapesType("événementiel technique"),
    valeurAjouteeIntro:
      "Nous comprenons les exigences de la production, des régisseurs et des équipes en salle.",
    valeurAjoutee: [
      "Lecture fine par spécialité — pas un tri générique des intermittents.",
      "Évaluation croisée : compétence, pression live et sécurité.",
      "Réactivité alignée sur les phases critiques de production.",
    ],
    raisonChoisir: [
      "Culture du live et du zéro défaut.",
      "Réseau qualifié son, lumière, vidéo, structure, régie.",
      "Contrôle des prérequis électriques et de hauteur.",
      "Compréhension des cadences montage / exploitation.",
      "Partenaire des producteurs et des lieux exigeants.",
    ],
    offresLiees: [
      {
        titre: "Technicien lumière",
        meta: "Île-de-France • CDDU / Intérim",
        description: "Exploitation de dispositifs lumineux en événementiel.",
      },
      {
        titre: "Rigger",
        meta: "Paris • Mission événementielle",
        description: "Accroches et structures temporaires conformes procédures.",
      },
      {
        titre: "Régisseur technique",
        meta: "Île-de-France • CDI",
        description: "Coordination équipes et supervision installations.",
      },
    ],
    offresCta: "Voir toutes les offres Événementiel",
  },

  hotellerie: {
    slug: "hotellerie",
    nom: "Hôtellerie & restauration haut de gamme",
    tagline:
      "Recrutement de profils immédiatement opérationnels sur les standards premium et le savoir-être.",
    couleurVar: "--color-filiere-hotel",
    couleurHex: "#4A1942",
    secteurDescription:
      "Dans le haut de gamme, la technique ne suffit pas : codes, posture, discrétion et constance façonnent l'expérience client. Recrutop aligne les profils sur le standard réel de l'établissement.",
    chiffresCles: [
      { valeur: "~122 000", label: "Établissements employeurs" },
      { valeur: "~797 400", label: "Salariés HCR (France)" },
      { valeur: "~28%", label: "Hôtels classés 4 ou 5 étoiles" },
      { valeur: "~220 000", label: "Saisonniers" },
    ],
    enjeux: [
      {
        titre: "Standard de service non négociable",
        description:
          "Tenue, diction, posture et sens du détail au cœur de chaque interaction.",
      },
      {
        titre: "Pics d'activité",
        description:
          "Banquets, salons et événements : absorber le volume sans dégrader la qualité.",
      },
      {
        titre: "Tension sur profils qualifiés",
        description:
          "Maîtres d'hôtel, chefs de rang et gouvernants expérimentés sont rares.",
      },
      {
        titre: "Image & expérience client",
        description:
          "Chaque contact influence la perception globale du standing.",
      },
      {
        titre: "HACCP",
        description:
          "En cuisine, l'hygiène et la traçabilité sont des critères d'employabilité.",
      },
    ],
    metiers: [
      {
        categorie: "Salle",
        items: [
          m("Maître d'hôtel", "Pilotage du service et excellence relationnelle."),
          m("Chef de rang", "Guettage, séquencement et coordination salle."),
          m("Commis de salle", "Apprentissage des codes et soutien opérationnel."),
          m("Serveur banquet", "Grand volume avec fluidité et présentation."),
          m("Hôte / hôtesse", "Accueil, orientation et image de marque."),
        ],
      },
      {
        categorie: "Cuisine",
        items: [
          m("Chef de cuisine / exécutif", "Brigade, carte et niveau d'exigence premium."),
          m("Sous-chef", "Adjoint chef et continuité de production."),
          m("Chef de partie", "Autonomie sur partie chaude / froide / sucré."),
          m("Commis de cuisine", "Mise en place et progression gestes."),
          m("Pâtissier", "Finitions, dressage et respect des protocoles."),
        ],
      },
      {
        categorie: "Hôtellerie",
        items: [
          m("Réceptionniste", "Accueil, réservations et coordination housekeeping."),
          m("Concierge", "Expectations haut de gamme et personnalisation."),
          m("Gouvernante", "Standards chambres et animation des équipes."),
          m("Valet / femme de chambre", "Discrétion, cadence et qualité d'usage."),
        ],
      },
    ],
    habilitations: ["HACCP", "Tenue & présentation", "SST"],
    methodeEvaluation: etapesType("hôtellerie-restauration premium"),
    valeurAjouteeIntro:
      "Nous plaçons des profils capables de tenir un standard haut de gamme, immédiatement opérationnels.",
    valeurAjoutee: [
      "Lecture précise du standing et des codes de l'établissement.",
      "Double critère : compétences métier + savoir-être.",
      "Réponses adaptées aux pics d'activité et à la continuité de service.",
    ],
    raisonChoisir: [
      "Experts du premium, pas du renfort générique CHR.",
      "Évaluation comportementale structurée.",
      "Matching sur la réalité terrain (rythme, image, clientèle).",
      "Process hygiène et conformité cuisine.",
      "Réseau candidats habitués aux palaces et maisons exigeantes.",
    ],
    offresLiees: [
      {
        titre: "Chef de rang",
        meta: "Paris • Intérim / Extra",
        description: "Service premium, cadence soutenue et posture irréprochable.",
      },
      {
        titre: "Gouvernante",
        meta: "Île-de-France • CDI",
        description: "Standards qualité chambres et management d'équipe.",
      },
      {
        titre: "Chef de partie",
        meta: "Paris • CDD",
        description: "Production exigeante intégrée à brigade haut niveau.",
      },
    ],
    offresCta: "Voir toutes les offres Hôtellerie",
  },

  paysage: {
    slug: "paysage",
    nom: "Métiers du paysage & aménagements extérieurs",
    tagline:
      "Recrutement de professionnels du végétal, des sols et des aménagements techniques extérieurs.",
    couleurVar: "--color-filiere-paysage",
    couleurHex: "#2D6A4F",
    secteurDescription:
      "Création, entretien, maçonnerie paysagère, irrigation et élagage : cette filière exige une double lecture végétale et technique, ancrée dans les saisons et le terrain.",
    chiffresCles: [
      { valeur: "8,5 Mds€", label: "Chiffre d'affaires du secteur" },
      { valeur: "33 550", label: "Entreprises" },
      { valeur: "140 300", label: "Actifs — 112 400+ salariés" },
      { valeur: "56% / 41,5%", label: "Parts création / entretien du CA" },
    ],
    enjeux: [
      {
        titre: "Végétalisation des villes",
        description:
          "Adapter les compétences aux politiques publiques et aux nouveaux usages des espaces.",
      },
      {
        titre: "Marchés publics",
        description:
          "Répondre aux cahiers des charges, délais et niveaux de service attendus.",
      },
      {
        titre: "Exigences environnementales",
        description:
          "Gestion durable, valorisation des déchets verts et qualité des sols.",
      },
      {
        titre: "Saisonnalité & régularité",
        description:
          "Anticiper pics, météo et montée en charge opérationnelle.",
      },
    ],
    metiers: [
      {
        categorie: "Paysage",
        items: [
          m("Ouvrier paysagiste", "Création et entretien avec respect des végétaux."),
          m("Jardinier paysagiste", "Entretien courant et gestes techniques."),
          m("Chef d'équipe paysage", "Encadrement terrain et productivité."),
          m("Chef de chantier paysage", "Pilotage planning, sécurité et rendus qualité."),
          m("Élagueur / arboriste grimpeur", "Interventions techniques en couronne."),
        ],
      },
      {
        categorie: "Maçonnerie & VRD",
        items: [
          m("Maçon VRD", "Voirie et aménagement en contexte paysager."),
          m("Maçon paysagiste", "Minéral et végétal combinés."),
          m("Poseur bordures & pavés", "Nivellement, assises et finitions."),
          m("Carreleur extérieur / dallagiste", "Pose drainage et pentes."),
          m("Terrassier aménagement", "Préparation de plateformes et volumes."),
          m("Conducteur d'engins TP paysage", "Mouvements terre avec CACES adapté."),
        ],
      },
      {
        categorie: "Réseaux & arrosage",
        items: [
          m("Technicien arrosage automatique", "Programmation et débogage."),
          m("Installateur réseaux irrigation", "Pose et mise en pression."),
          m("Technicien maintenance arrosage", "Entretien des systèmes et dépannage."),
          m("Spécialiste pompage", "Stations et régulations."),
          m("Technicien eaux pluviales", "Stokage, infiltration et conformité."),
        ],
      },
      {
        categorie: "Compostage & déchets verts",
        items: [
          m("Agent de collecte", "Flux déchets verts et tri."),
          m("Technicien plateforme compostage", "Paramétrage et suivi de process."),
          m("Responsable gestion compost", "Organisation site et conformité."),
          m("Conducteur d'engins plateforme", "Manutention et sécurité site."),
          m("Technicien valorisation", "Recyclage et circuits matière."),
        ],
      },
    ],
    habilitations: [
      "CACES R482",
      "AIPR",
      "Habilitation électrique H0B0-B1V",
      "SST",
      "Travail en hauteur",
    ],
    methodeEvaluation: etapesType("paysage & aménagements extérieurs"),
    valeurAjouteeIntro:
      "Nous ne recrutons pas « des jardiniers », nous recrutons des professionnels qualifiés.",
    valeurAjoutee: [
      "Double expertise végétal et technique sur chantier.",
      "Qualification au-delà de la seule catégorie « espaces verts ».",
      "Adéquation saisons, autonomie et sécurité terrain.",
    ],
    raisonChoisir: [
      "Consultants qui lisent plans, sols et irrigation.",
      "Approche terrain avant volume de CV.",
      "Compréhension marchés publics et contraintes PIC.",
      "Veille sur habilitations CACES et AIPR.",
      "Matching entreprises / candidats sur la régularité.",
    ],
    offresLiees: [
      {
        titre: "Ouvrier paysagiste",
        meta: "Île-de-France • Intérim",
        description: "Création et entretien avec contraintes site et saison.",
      },
      {
        titre: "Élagueur / arboriste grimpeur",
        meta: "Île-de-France • Mission longue",
        description: "Technique couronne et sécurité intégrée.",
      },
      {
        titre: "Chef d'équipe paysage",
        meta: "Paris • CDI",
        description: "Encadrement et pilotage d'opérations terrain.",
      },
    ],
    offresCta: "Voir toutes les offres Paysage",
  },

  maintenance: {
    slug: "maintenance",
    nom: "Maintenance & métiers techniques",
    tagline:
      "Recrutement pour la continuité d'exploitation, la conformité et la performance des installations.",
    couleurVar: "--color-filiere-maintenance",
    couleurHex: "#2B2D42",
    secteurDescription:
      "Industrie, tertiaire ou sites sensibles : la maintenance exige diagnostic, conformité et culture sécurité. Une panne ou une erreur peut coûter cher — nos recruteurs maîtrisent le vocabulaire technique.",
    chiffresCles: [
      { valeur: "25+ Mds€", label: "CA annuel (maintenance industrielle)" },
      { valeur: "~450 000", label: "Emplois directs" },
    ],
    enjeux: [
      {
        titre: "Pénurie de profils qualifiés",
        description:
          "CVC, électrotechnique, automatismes : des postes critiques et concurrents.",
      },
      {
        titre: "Complexité technique",
        description:
          "GTB, GTC, automatismes et maintenance prédictive élèvent le niveau.",
      },
      {
        titre: "Contraintes réglementaires",
        description:
          "Électricité, fluides, sécurité incendie et environnement sensible.",
      },
      {
        titre: "Environnements sensibles",
        description:
          "ERP, plateformes logistiques et sites où la continuité est vitale.",
      },
    ],
    metiers: [
      {
        categorie: "Maintenance industrielle",
        items: [
          m(
            "Technicien maintenance industrielle",
            "Préventif / correctif sur équipements de production."
          ),
          m("Électromécanicien", "Couplage mécanique et automatisme."),
          m("Automaticien", "Programmation, réglages et dépannage capteurs / API."),
          m(
            "Technicien hydraulique / pneumatique",
            "Circuits fluides sous pression."
          ),
          m("Mécanicien industriel", "Usinage, alignement et révisions."),
        ],
      },
      {
        categorie: "Maintenance électrique",
        items: [
          m("Électricien industriel", "Câblage, arrêts et consignation."),
          m("Technicien électrotechnique", "Analyse et remise en conformité."),
          m("Tableautier", "Montage et essais de tableaux BT."),
          m("Technicien HT/BT", "Interventions selon habilitation."),
        ],
      },
      {
        categorie: "CVC & énergie",
        items: [
          m("Technicien CVC", "CTA, production froid / chaud et équilibrage."),
          m("Frigoriste", "Fluides et réglementation."),
          m("Technicien chaudière / brûleur", "Combustion et maintenance équipements."),
          m("Technicien GTC / GTB", "Supervision et intégration bâtiment."),
        ],
      },
      {
        categorie: "Multitechnique & tertiaire",
        items: [
          m(
            "Technicien multitechnique",
            "Polyvalence sur site avec priorité continuité."
          ),
          m("Agent de maintenance bâtiment", "Exploitation courante et astreinte."),
          m("Technicien SSI", "Maintenance des systèmes sécurité incendie."),
          m("Technicien ascensoriste", "Entretien et dépannage lifts."),
        ],
      },
    ],
    habilitations: [
      "Habilitation électrique (H0 à BC)",
      "CACES R486-R489",
      "Attestation fluides frigorigènes",
      "Travail en hauteur",
      "SST",
      "ATEX",
    ],
    methodeEvaluation: etapesType("maintenance & métiers techniques"),
    valeurAjouteeIntro:
      "Une panne coûte cher. Une erreur met en danger. Nos recruteurs maîtrisent le vocabulaire technique.",
    valeurAjoutee: [
      "Lecture fine du site, du niveau de criticité et des équipements.",
      "Évaluation diagnostic, conformité et autonomie réelle.",
      "Réactivité sans sacrifier la qualité de qualification.",
    ],
    raisonChoisir: [
      "Experts maintenance industrielle et tertiaire.",
      "Contrôle des habilitations vs mission réelle.",
      "Culture sécurité et environnements sensibles.",
      "Matching sur astreintes et criticité 24/7.",
      "Approche technique partagée avec vos directions des travaux.",
    ],
    offresLiees: [
      {
        titre: "Technicien CVC",
        meta: "Île-de-France • CDI",
        description: "Maintenance préventive / corrective en tertiaire.",
      },
      {
        titre: "Électrotechnicien",
        meta: "Paris • Intérim",
        description: "Diagnostic et interventions selon normes en vigueur.",
      },
      {
        titre: "Technicien multitechnique",
        meta: "Île-de-France • Mission longue",
        description: "Polyvalence terrain priorité continuité de service.",
      },
    ],
    offresCta: "Voir toutes les offres Maintenance",
  },
};

export const FILIERE_SLUGS = Object.keys(filieresDetail);

export function getFiliere(slug: string): FilierePageData | undefined {
  return filieresDetail[slug];
}
