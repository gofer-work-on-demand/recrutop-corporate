export type BrandDomain = 'construction' | 'hr' | 'technique' | 'insertion' | 'espaces-verts' | 'cdi';

export interface Brand {
  name: string;
  domain: BrandDomain;
  description: string;
  logoAlt: string;
  logoSrc: string;
  mission?: string;
  sectors?: string[];
  jobs?: string[];
  strengths?: string[];
  approach?: string;
}

export const brands: Brand[] = [
  {
    name: "Recrutop BTP / Grands Travaux",
    domain: "construction",
    description: "Recrutop BTP / Grands Travaux est portée par l'expertise historique JPSI, une référence dans le secteur des travaux publics et du génie civil. Cette Business Unit est le partenaire privilégié des Grands Comptes et ETI pour les chantiers d'envergure, notamment dans le cadre du Grand Paris, des ouvrages d'art et des réseaux d'infrastructure. Notre spécialisation dans le recrutement de profils hautement habilités fait de nous un acteur incontournable pour les projets d'infrastructure majeurs.",
    logoAlt: "Logo Recrutop BTP / Grands Travaux",
    logoSrc: "/assets/jpsi-logo.png",
    mission: "Travaux Publics & Génie Civil - Grands Travaux & Infrastructures - Partenaire des Grands Comptes et ETI pour les chantiers d'envergure",
    sectors: [
      "Génie Civil : Construction d'ouvrages d'art (ponts, tunnels, viaducs), structures béton complexes, fondations spéciales",
      "Travaux Publics (TP) : Voirie et Réseaux Divers (VRD), terrassement, canalisations, réseaux d'assainissement",
      "Grand Paris : Participation aux grands projets d'infrastructure de la région parisienne",
      "Infrastructures : Routes, autoroutes, réseaux ferroviaires, aéroports, ports"
    ],
    jobs: [
      "Coffreurs-bancheurs : Spécialistes du béton armé pour ouvrages d'art et structures complexes",
      "Canalisateurs : Installation et réparation de réseaux d'eau, assainissement, gaz, électricité",
      "Conducteurs d'engins (CACES) : Pelles, chargeuses, bulldozers, compacteurs, niveleuses",
      "Maçons VRD : Maçonnerie pour voiries et réseaux divers, bordures, caniveaux, trottoirs",
      "Chefs d'équipe : Encadrement et coordination des équipes sur les chantiers",
      "Ouvriers spécialisés : Terrassiers, manœuvres qualifiés, soudeurs, ferrailleurs"
    ],
    strengths: [
      "Sourcing strict sur les habilitations obligatoires : AIPR (Autorisation d'Intervention à Proximité des Réseaux), H0B0 (Habilitation électrique), CACES (Certificat d'Aptitude à la Conduite En Sécurité)",
      "Chantiers d'envergure : Expérience sur les grands projets (Grand Paris, ouvrages d'art, réseaux)",
      "Expertise historique JPSI : Référence dans le secteur depuis de nombreuses années",
      "Réseau étendu de professionnels hautement qualifiés et habilités",
      "Conformité totale aux normes de sécurité et réglementations en vigueur",
      "Réactivité pour répondre aux besoins urgents des grands chantiers"
    ],
    approach: "Notre approche repose sur un sourcing extrêmement rigoureux où chaque candidat est vérifié sur ses habilitations obligatoires (AIPR, H0B0, CACES) avant toute affectation. Nous garantissons la conformité totale aux normes de sécurité et aux réglementations en vigueur. Notre expertise historique JPSI et notre connaissance approfondie des grands chantiers nous permettent de proposer des profils immédiatement opérationnels sur les projets d'infrastructure les plus complexes. Nous travaillons en étroite collaboration avec les Grands Comptes et ETI pour répondre à leurs besoins spécifiques en termes de compétences et d'habilitations.",
  },
  {
    name: "Art & Intérim",
    domain: "construction",
    description: "Art & Intérim est une niche d'excellence unique sur le marché du travail temporaire, entièrement dédiée à la restauration du patrimoine ancien et à la préservation des savoir-faire d'exception. Spécialisée dans les métiers d'art et les techniques traditionnelles, Art & Intérim fournit une main-d'œuvre hautement qualifiée aux entreprises labellisées (Monuments Historiques, Patrimoine) pour des chantiers de prestige. Notre vivier de compagnons et d'artisans d'art est le plus pointu d'Île-de-France sur ces métiers rares.",
    logoAlt: "Logo Art & Intérim",
    logoSrc: "/assets/artetinterim-logo.png",
    mission: "Monuments Historiques & Métiers d'Art - Fournir une main-d'œuvre hautement qualifiée pour la restauration du patrimoine ancien et la préservation des savoir-faire d'exception",
    sectors: [
      "Monuments Historiques : Restauration de monuments classés et inscrits aux Monuments Historiques",
      "Patrimoine ancien : Rénovation de bâtiments anciens, maisons de caractère, édifices religieux",
      "Chantiers de prestige : Interventions sur des sites patrimoniaux exceptionnels",
      "Entreprises labellisées : Partenariat avec les entreprises reconnues pour leur expertise patrimoniale"
    ],
    jobs: [
      "Tailleurs de pierre : Restauration de façades et éléments architecturaux en pierre",
      "Maçons du bâti ancien : Techniques traditionnelles de maçonnerie (pierre, chaux, torchis)",
      "Menuisiers en restauration : Restauration de menuiseries anciennes, parquets, escaliers",
      "Couvreurs ornementistes : Restauration de toitures traditionnelles (ardoise, tuile, zinc)",
      "Ferronniers d'art : Restauration de ferronneries d'art, grilles, balustrades",
      "Doreurs : Restauration de dorures et décors peints, staffs et moulures"
    ],
    strengths: [
      "Vivier le plus pointu d'Île-de-France sur ces métiers rares et spécialisés",
      "Respect strict des techniques traditionnelles et des matériaux d'origine",
      "Artisans compagnons expérimentés dans la restauration patrimoniale",
      "Connaissance approfondie des normes et réglementations des Monuments Historiques",
      "Chantiers de prestige : Intervention sur les sites patrimoniaux les plus prestigieux",
      "Partenariats privilégiés avec les entreprises labellisées et reconnues"
    ],
    approach: "Notre approche repose sur la sélection rigoureuse d'artisans compagnons maîtrisant parfaitement les techniques traditionnelles. Chaque professionnel est évalué sur sa connaissance des matériaux anciens, sa maîtrise des techniques d'origine et son expérience dans la restauration patrimoniale. Nous garantissons le respect strict des techniques traditionnelles et des matériaux d'origine, conformément aux exigences des Monuments Historiques. Notre réseau exclusif nous permet d'intervenir sur les chantiers les plus prestigieux avec des artisans reconnus pour leur excellence.",
  },
  {
    name: "Gofer",
    domain: "hr",
    description: "Gofer est la signature \"Premium\" du groupe Recrutop, exclusivement dédiée à l'hôtellerie de luxe (hôtels 4*, 5*, Palaces) et aux lieux d'exception. Spécialisée dans le recrutement de personnel haut de gamme pour l'hospitalité de luxe, Gofer garantit un niveau d'excellence et de discrétion adapté aux exigences les plus élevées du secteur. Notre sélection rigoureuse et notre connaissance approfondie des codes du luxe font de Gofer le partenaire privilégié des établissements prestigieux.",
    logoAlt: "Logo Gofer",
    logoSrc: "/assets/gofer-logo.png",
    mission: "Hôtellerie de Luxe & Prestige - Déléguer du personnel dont le savoir-être et la présentation (\"Grooming\") répondent aux standards les plus élevés de l'hospitalité de luxe",
    sectors: [
      "Hôtels de luxe 4* et 5* : Personnel qualifié pour les établissements haut de gamme",
      "Palaces : Équipes expérimentées dans les établissements les plus prestigieux",
      "Lieux d'exception : Restaurants gastronomiques, clubs privés, résidences de prestige",
      "Événements premium : Service pour les événements haut de gamme et réceptions d'exception"
    ],
    jobs: [
      "Hébergement : Femmes de chambre / Valets de chambre, Gouvernantes, Équipiers d'étage, Responsables housekeeping",
      "Accueil : Réceptionnistes multilingues, Bagagistes, Voituriers, Portiers, Concierges",
      "Service & Cuisine : Maîtres d'hôtel, Chefs de rang, Serveurs, Commis de cuisine, Chefs de partie, Sommeliers"
    ],
    strengths: [
      "Sélection rigoureuse basée sur l'attitude, le savoir-être et la présentation irréprochable",
      "Maîtrise parfaite des codes du luxe et de l'étiquette hôtelière",
      "Confidentialité absolue et discrétion garanties",
      "Programme de fidélisation de nos meilleurs talents pour garantir la continuité",
      "Formation continue aux standards du luxe et aux spécificités de chaque établissement",
      "Réseau exclusif de professionnels expérimentés dans l'hôtellerie de prestige"
    ],
    approach: "Notre approche repose sur une sélection extrêmement rigoureuse où l'attitude et le savoir-être priment. Chaque candidat est évalué sur sa présentation (grooming), sa maîtrise des codes du luxe, sa discrétion et son expérience dans l'hôtellerie haut de gamme. Nous développons un programme de fidélisation pour nos meilleurs talents, garantissant ainsi la continuité et la qualité du service. Chaque membre de notre équipe bénéficie d'une formation continue aux standards du luxe et aux spécificités de chaque établissement partenaire.",
  },
  {
    name: "Recrutop Rambouillet Restauration",
    domain: "hr",
    description: "Recrutop Rambouillet Restauration est l'expert de la restauration volumique du groupe Recrutop. Cette Business Unit accompagne les traiteurs événementiels, la restauration d'entreprise (collective) et la restauration commerciale traditionnelle. Spécialisée dans la constitution rapide de brigades complètes, elle répond aux besoins urgents et récurrents du secteur de la restauration avec une réactivité exceptionnelle et des profils immédiatement opérationnels.",
    logoAlt: "Logo Recrutop Rambouillet Restauration",
    logoSrc: "/assets/restauration-logo.png",
    mission: "Traiteurs, Collectivités & Restauration Commerciale - Constituer des brigades complètes en un temps record pour vos événements ou vos services quotidiens",
    sectors: [
      "Traiteurs événementiels : Équipes complètes pour mariages, séminaires, cocktails, événements corporate",
      "Restauration d'entreprise (collective) : Personnel pour les restaurants d'entreprise, cafétérias, self-services",
      "Restauration commerciale traditionnelle : Renforts pour brasseries, bistrots, restaurants gastronomiques",
      "Événements ponctuels : Mobilisation rapide pour les pics d'activité et événements exceptionnels"
    ],
    jobs: [
      "Cuisine : Cuisiniers, Chefs de partie, Commis de cuisine, Plongeurs, Écaillers, Pâtissiers",
      "Salle : Maîtres d'hôtel, Chefs de rang, Serveurs, Barman/Barmaid, Hôtes/Hôtesses d'accueil, Sommeliers",
      "Service : Équipiers polyvalents, Runners, Personnel de mise en place et de service"
    ],
    strengths: [
      "Réactivité exceptionnelle : Constitution de brigades complètes en un temps record",
      "Processus de recrutement standardisés pour garantir la qualité",
      "Profils opérationnels immédiatement, adaptés au rythme soutenu du service",
      "Réseau étendu de professionnels expérimentés dans la restauration volumique",
      "Flexibilité totale : intervention ponctuelle ou régulière selon vos besoins",
      "Connaissance approfondie des spécificités de chaque type de restauration"
    ],
    approach: "Notre approche repose sur la standardisation de nos processus de recrutement pour garantir des profils immédiatement opérationnels. Chaque candidat est évalué sur ses compétences techniques, son expérience dans la restauration volumique et sa capacité à s'adapter rapidement à un nouvel environnement. Nous développons un réseau de professionnels fidèles et expérimentés, capables d'intervenir en urgence tout en maintenant les standards de qualité exigés. Notre flexibilité nous permet de répondre aussi bien aux besoins ponctuels qu'aux besoins récurrents de nos clients.",
  },
  {
    name: "Recrutop Mecatech",
    domain: "technique",
    description: "Recrutop Mecatech est la Business Unit experte des métiers techniques du groupe Recrutop. Spécialisée dans la maintenance industrielle et tertiaire, Mecatech intervient pour maintenir la performance de vos outils de production et garantir le confort de vos infrastructures. Face à la pénurie de compétences techniques, nous avons développé une expertise unique dans le recrutement et la formation de profils techniques rares et qualifiés.",
    logoAlt: "Logo Recrutop Mecatech",
    logoSrc: "/assets/mecatech-logo.png",
    mission: "Maintenance, CVC & Industrie - Maintenir la performance de vos outils de production et le confort de vos infrastructures",
    sectors: [
      "Maintenance préventive et curative : Intervention sur tous types d'équipements industriels et tertiaires",
      "Génie Climatique (CVC) : Installation, maintenance et dépannage des systèmes de chauffage, ventilation et climatisation",
      "Industrie : Maintenance des équipements de production, automatismes et systèmes électriques",
      "Bâtiment & Tertiaire : Maintenance multi-technique pour les immeubles de bureaux, commerces et établissements"
    ],
    jobs: [
      "Génie Climatique (CVC) : Techniciens d'exploitation, Frigoristes, Chauffagistes, Techniciens maintenance CVC",
      "Industrie : Électromécaniciens, Mécaniciens industriels, Automaticiens, Cableurs, Techniciens maintenance industrielle",
      "Bâtiment & Tertiaire : Électriciens, Plombiers, Techniciens polyvalents, Ascensoristes, Techniciens maintenance tertiaire"
    ],
    strengths: [
      "Expertise reconnue dans le recrutement de profils techniques pénuriques",
      "Réseau étendu de techniciens confirmés et expérimentés",
      "Partenariats avec les centres de formation pour développer les compétences",
      "Réactivité et disponibilité 24/7 pour les urgences",
      "Connaissance approfondie des spécificités techniques par secteur"
    ],
    approach: "Face à la rareté des compétences techniques, notre approche combine le sourcing d'experts confirmés et la formation de jeunes talents (Bac Pro, BTS) aux spécificités de vos installations. Nous travaillons en partenariat avec les centres de formation pour développer les compétences et garantir une montée en compétences continue. Chaque technicien est évalué et formé selon les besoins spécifiques de vos équipements et de votre secteur d'activité.",
  },
  {
    name: "Recrutop Event",
    domain: "technique",
    description: "Recrutop Event est l'expert des coulisses pour l'événementiel premium. Spécialisée dans la technique et la logistique événementielle, cette Business Unit accompagne les concerts, festivals, salons professionnels, défilés de mode et événements corporate de grande envergure. Notre capacité de mobilisation 24/7 et notre réseau de techniciens expérimentés font de nous le partenaire privilégié des organisateurs d'événements exigeants.",
    logoAlt: "Logo Recrutop Event",
    logoSrc: "/assets/event-logo.png",
    mission: "Technique & Logistique Événementielle - Assurer la réussite technique et logistique de vos événements grâce à des équipes réactives et spécialisées",
    sectors: [
      "Événementiel premium : Concerts, festivals, spectacles, événements culturels de grande envergure",
      "Salons professionnels : Montage et démontage de stands, installation technique des salons",
      "Défilés de mode : Équipes techniques pour les défilés et présentations de mode",
      "Événements corporate : Séminaires, conventions, lancements produits, soirées d'entreprise"
    ],
    jobs: [
      "Technique : Techniciens Son, Lumière, Vidéo, Structure (Riggers), Régisseurs, Techniciens plateau",
      "Logistique : Roadies, Runners, Caristes événementiels, Manutentionnaires spécialisés, Monteurs-démontageurs",
      "Coordination : Chefs d'équipe technique, Coordinateurs logistique, Régisseurs généraux"
    ],
    strengths: [
      "Capacité de mobilisation 24/7 pour répondre aux urgences et contraintes du direct",
      "Équipes réactives et spécialisées dans l'événementiel premium",
      "Profils habitués aux contraintes du direct, aux horaires décalés et aux conditions de travail exigeantes",
      "Réseau étendu de techniciens expérimentés dans tous les domaines de l'événementiel",
      "Connaissance approfondie des spécificités techniques par type d'événement",
      "Flexibilité totale : intervention ponctuelle ou régulière selon vos besoins"
    ],
    approach: "Notre approche repose sur la constitution d'équipes réactives et spécialisées, capables d'intervenir en urgence et de s'adapter aux contraintes spécifiques de l'événementiel. Chaque technicien est sélectionné pour son expérience dans l'événementiel, sa capacité à travailler sous pression et sa maîtrise des équipements techniques. Nous garantissons une disponibilité 24/7 pour répondre aux besoins urgents et aux contraintes du direct. Notre flexibilité nous permet d'intervenir aussi bien sur des événements ponctuels que sur des tournées ou des séries d'événements réguliers.",
  },
  {
    name: "Passerelle",
    domain: "insertion",
    description: "Passerelle est l'entité du groupe Recrutop dédiée à l'inclusion et à la RSE (Responsabilité Sociétale des Entreprises). En tant qu'Entreprise de Travail Temporaire d'Insertion (ETTI), elle propose une solution de recrutement responsable qui allie performance économique et impact social. Passerelle accompagne les personnes éloignées de l'emploi vers un retour durable au marché du travail, tout en répondant aux besoins de recrutement des entreprises et des collectivités.",
    logoAlt: "Logo Passerelle",
    logoSrc: "/assets/passerelle-logo.png",
    mission: "Notre mission est de recruter des personnes éloignées de l'emploi (jeunes sans qualification, seniors, travailleurs handicapés, personnes en situation de précarité...) et de les accompagner via un suivi socioprofessionnel sur mesure. Cet accompagnement personnalisé couvre la formation professionnelle, l'aide au logement, l'accès aux soins et la levée de tous les freins périphériques, pour sécuriser leur parcours vers un emploi durable et pérenne.",
    sectors: [
      "BTP & Second Œuvre : Gros œuvre, finition, démolition - Équipes encadrées pour les chantiers de construction et de rénovation",
      "Espaces Verts : Entretien et création paysagère - Jardiniers et paysagistes pour les collectivités et entreprises",
      "Tertiaire & Services : Agents d'entretien, propreté urbaine, logistique - Personnel qualifié pour les services aux entreprises",
      "Médico-Social : Nouvelle expertise dédiée aux métiers du soin et de l'aide à domicile - Accompagnement des personnes fragiles"
    ],
    jobs: [
      "Ouvriers du BTP (gros œuvre, finition, démolition)",
      "Jardiniers et agents d'entretien des espaces verts",
      "Agents d'entretien et de propreté",
      "Manutentionnaires et logisticiens",
      "Aides à domicile et auxiliaires de vie"
    ],
    strengths: [
      "Gestion complète des clauses sociales des marchés publics - Réponse aux obligations d'insertion",
      "Sécurisation des parcours grâce à un accompagnement renforcé et personnalisé",
      "Bilans réguliers avec les intérimaires pour suivre leur progression",
      "Levée des freins périphériques (logement, santé, transport, garde d'enfants)",
      "Partenaire privilégié des collectivités et entreprises engagées dans la RSE"
    ],
    approach: "Notre approche repose sur un double accompagnement : professionnel (formation, montée en compétences) et social (levée des freins périphériques). Chaque intérimaire bénéficie d'un référent dédié qui l'accompagne tout au long de son parcours, avec des bilans réguliers et un suivi personnalisé. Nous travaillons en étroite collaboration avec les entreprises pour garantir des missions adaptées et favoriser l'insertion durable.",
  },
  {
    name: "Garden",
    domain: "espaces-verts",
    description: "Garden est la Business Unit du groupe Recrutop dédiée aux métiers de la nature en ville et de l'aménagement extérieur. Spécialisée dans le paysagisme et l'entretien des espaces verts, Garden travaille en partenariat avec les entreprises du paysage et les collectivités territoriales. Notre expertise technique du végétal et notre connaissance de la saisonnalité nous permettent de proposer des équipes qualifiées et équipées pour tous types de chantiers d'aménagement paysager.",
    logoAlt: "Logo Garden",
    logoSrc: "/assets/garden-logo.png",
    mission: "Paysagisme & Espaces Verts - Proposer des équipes équipées et compétentes pour tous vos chantiers d'aménagement paysager",
    sectors: [
      "Création paysagère : Aménagement de parcs, jardins, espaces verts publics et privés",
      "Entretien des espaces verts : Maintenance régulière des parcs, jardins, espaces verts urbains",
      "Collectivités : Équipes pour les services espaces verts des villes et collectivités",
      "Entreprises du paysage : Renforts pour les entreprises paysagistes sur leurs chantiers"
    ],
    jobs: [
      "Création : Maçons du paysage, Ouvriers paysagistes qualifiés (création minérale et végétale), Terrassiers paysagistes",
      "Entretien : Jardiniers, Agents d'entretien des espaces verts, Élagueurs-grimpeurs, Tondeurs",
      "Spécialisés : Pépiniéristes, Arboristes, Paysagistes concepteurs, Chefs d'équipe espaces verts"
    ],
    strengths: [
      "Connaissance approfondie de la saisonnalité et des cycles végétaux",
      "Équipes équipées avec le matériel nécessaire (tondeuses, taille-haies, élagueuses, etc.)",
      "Expertise technique du végétal et des techniques paysagères",
      "Réseau de professionnels expérimentés dans le paysagisme et l'entretien",
      "Adaptation aux contraintes des collectivités et des entreprises du paysage",
      "Respect des normes environnementales et des techniques écologiques"
    ],
    approach: "Notre approche repose sur une connaissance approfondie de la saisonnalité et des exigences techniques du végétal. Chaque équipe est composée de professionnels expérimentés et équipés du matériel nécessaire pour intervenir efficacement. Nous travaillons en étroite collaboration avec les entreprises du paysage et les collectivités pour comprendre leurs besoins spécifiques et proposer des solutions adaptées. Notre expertise nous permet de garantir la qualité des interventions, que ce soit pour la création de nouveaux espaces verts ou pour l'entretien régulier des espaces existants.",
  },
  {
    name: "Recrutop Carrière",
    domain: "cdi",
    description: "Recrutop Carrière est la structure transversale du groupe Recrutop dédiée au placement permanent. Elle agit comme un cabinet de recrutement spécialisé au service de toutes les autres Business Units et de leurs clients. Spécialisée dans le recrutement de profils pérennes (CDD, CDI), Recrutop Carrière couvre l'ensemble des métiers du groupe avec une approche de \"chasseur de têtes\", permettant d'accéder au \"marché caché\" des candidats en poste.",
    logoAlt: "Logo Recrutop Carrière",
    logoSrc: "/assets/carriere-logo.png",
    mission: "Cabinet de Recrutement CDI / CDD - Prendre en charge l'intégralité du processus de recrutement pour vos postes pérennes, du technicien au cadre dirigeant",
    sectors: [
      "Recrutement permanent : CDD et CDI pour tous les niveaux de poste, du technicien au cadre dirigeant",
      "Chasse de têtes : Approche proactive pour identifier et recruter les meilleurs profils en poste",
      "Sourcing stratégique : Accès au marché caché des candidats non disponibles sur les canaux traditionnels",
      "Conseil en recrutement : Accompagnement complet du processus de recrutement, de la définition du besoin à l'intégration"
    ],
    jobs: [
      "BTP : Tous les métiers du bâtiment et des travaux publics, du technicien au chef de projet",
      "Tertiaire : Services aux entreprises, administration, commerce, du collaborateur au manager",
      "Industrie : Maintenance, production, qualité, du technicien au directeur industriel",
      "Hôtellerie : Tous les postes de l'hôtellerie-restauration, du commis au directeur d'hôtel",
      "Paysage : Métiers du paysage et des espaces verts, de l'ouvrier au chef d'équipe"
    ],
    strengths: [
      "Accès au \"marché caché\" : Identification et approche des candidats en poste non disponibles sur les canaux traditionnels",
      "Approche de \"chasseur de têtes\" : Recherche proactive et ciblée des meilleurs profils",
      "Sécurisation des embauches stratégiques grâce à notre connaissance métier approfondie",
      "Couverture complète des métiers du groupe : Expertise dans tous les secteurs d'activité",
      "Processus complet : De la définition du besoin à l'intégration, en passant par le sourcing, l'évaluation et la négociation",
      "Réseau étendu : Base de données de candidats qualifiés et réseau de contacts dans tous les secteurs"
    ],
    approach: "Notre approche combine la chasse de têtes proactive et le sourcing traditionnel pour identifier les meilleurs profils. Nous utilisons notre connaissance approfondie des métiers du groupe pour comprendre précisément les besoins de nos clients et cibler les candidats les plus adaptés. Notre processus complet couvre toutes les étapes du recrutement : définition du besoin, sourcing et chasse, évaluation et sélection, négociation et intégration. Nous garantissons une sécurisation maximale des embauches stratégiques grâce à notre expertise métier et notre réseau étendu dans tous les secteurs d'activité.",
  },
];

export const domainLabels: Record<BrandDomain, string> = {
  construction: "Construction & Patrimoine",
  hr: "Hôtellerie & Restauration",
  technique: "Technique & Opérations",
  insertion: "Insertion",
  'espaces-verts': "Espaces verts",
  cdi: "CDI / CDD",
};
