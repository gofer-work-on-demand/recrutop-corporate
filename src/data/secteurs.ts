/**
 * Contenu détaillé des pages secteur (Enjeux, Métiers, Méthode, Valeur ajoutée, Offres)
 * Structure homogène pour chaque pôle.
 */
export interface SecteurPageContent {
  slug: string;
  title: string;
  subtitle?: string;
  heroLabel?: string;
  heroIntro?: string;
  heroProofs?: string[];
  contexte: {
    title: string;
    intro: string;
    points?: { value: string; label: string }[];
  };
  enjeux: { title: string; items: string[] };
  metiers: { title: string; groups: { label?: string; items: string[] }[] };
  habilitations: {
    title: string;
    intro: string;
    items: string[];
  };
  methode: { title: string; steps: { title: string; text: string }[] };
  valeurAjoutee: { title: string; intro?: string; items: string[] };
  offres: {
    title: string;
    items: { title: string; meta: string; description: string }[];
    cta: string;
  };
  ctaFinal: {
    title: string;
    text: string;
    candidat: string;
    entreprise: string;
  };
}

export const secteursContent: Record<string, SecteurPageContent> = {
  "travaux-publics-genie-civil": {
    slug: "travaux-publics-genie-civil",
    title: "Travaux Publics & Génie Civil",
    subtitle: "Recrutement et interim pour les metiers qui construisent, raccordent, securisent et pilotent les infrastructures.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Nos equipes connaissent les realites du chantier, les exigences de securite, les habilitations indispensables et le niveau de technicite attendu sur les operations de TP et de genie civil.",
    heroProofs: [
      "Chantiers, reseaux, ouvrages et encadrement",
      "Evaluation des habilitations et prerequis terrain",
      "Lecture operationnelle des besoins clients",
    ],
    contexte: {
      title: "Un secteur structurant, sous forte exigence operationnelle",
      intro:
        "Les travaux publics et le genie civil sont au coeur des infrastructures qui organisent le territoire : voiries, reseaux, terrassements, plateformes, canalisations, ouvrages d'art et grands chantiers. Les besoins y sont immediats, techniques et fortement contraints par la securite, la coactivite et les delais.",
      points: [
        { value: "6", label: "familles de metiers couvertes" },
        { value: "100%", label: "des recrutements verifies sur les prerequis terrain" },
        { value: "1", label: "lecture metier du besoin, pas un tri generique de CV" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Penurie de profils qualifies : coffreurs, macons VRD, conducteurs d'engins, canalisateurs et encadrants de chantier sont durablement recherches.",
        "Exigence securite maximale : coactivite, circulation d'engins, profondeur de tranchees, travail a proximite des reseaux et respect strict des EPI.",
        "Habilitations indispensables : AIPR, CACES, habilitations electriques, SST ou PASI conditionnent l'employabilite immediate sur site.",
        "Complexite technique croissante : digitalisation chantier, BIM, contraintes geotechniques et normes environnementales elevant le niveau d'exigence.",
        "Pression delais et continuite : un profil mal qualifie peut ralentir un lot, desequilibrer une equipe ou retarder une phase critique d'execution.",
      ],
    },
    metiers: {
      title: "Les métiers que nous recrutons",
      groups: [
        {
          label: "Execution chantier",
          items: [
            "Coffreur / Coffreur bancheur",
            "Maçon TP",
            "Maçon VRD",
            "Maçon Génie Civil",
            "Ferrailleur",
            "Canalisateur",
            "Poseur de réseaux secs",
            "Conducteur d'engins",
            "Terrassier",
          ],
        },
        {
          label: "Encadrement terrain",
          items: [
            "Chef d'équipe TP",
            "Chef de chantier",
            "Conducteur de travaux",
            "Ingénieur travaux",
          ],
        },
      ],
    },
    habilitations: {
      title: "Securite, habilitations et conformite",
      intro:
        "Dans le TP et le genie civil, la securite n'est pas une formalite administrative. Elle conditionne l'integration chantier, l'autonomie du profil et la fiabilite de la mission.",
      items: [
        "Controle CACES selon les engins et environnements d'intervention",
        "Verification AIPR selon le type de reseaux et de travaux",
        "Habilitation electrique si le poste ou l'environnement l'exige",
        "PASI, SST et controles terrain selon les attentes client",
        "Verification de la coherence entre EPI, experience chantier et niveau d'autonomie",
      ],
    },
    methode: {
      title: "Notre méthode d'évaluation",
      steps: [
        {
          title: "Qualification du parcours",
          text: "Nous analysons les chantiers deja realises, les environnements d'intervention, le niveau d'autonomie et les responsabilites effectivement exercees.",
        },
        {
          title: "Questionnaire technique metier",
          text: "Lecture de plans, methodologie chantier, connaissances materiaux, reflexes securite, travail en equipe et adequation au type d'operation.",
        },
        {
          title: "Validation des habilitations",
          text: "Controle des dates de validite et de la coherence avec l'experience terrain : CACES, AIPR, habilitation electrique, SST, PASI.",
        },
        {
          title: "Controle de references",
          text: "Echange avec anciens employeurs, chefs d'equipe ou chefs de chantier pour confirmer la realite operationnelle du profil.",
        },
        {
          title: "Validation de l'adequation terrain",
          text: "Nous confrontons le profil aux contraintes reelles du poste : acces chantier, coactivite, rythme, securite, mobilite et niveau d'exigence attendu.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutée spécifique",
      intro:
        "Dans cette filiere, un bon recrutement ne se resume jamais a un intitule de poste. Il faut comprendre la nature du chantier, la phase travaux, les prerequis securite et le niveau reel d'autonomie attendu.",
      items: [
        "Des recruteurs specialises TP & Genie Civil, capables de distinguer un besoin VRD, reseaux, genie civil, terrassement ou encadrement.",
        "Une comprehension precise des commandes clients, des conditions d'acces et de la composition des equipes chantier.",
        "Une evaluation technique approfondie, au-dela du CV et des simples disponibilites.",
        "Une exigence securite assumee, integree a chaque etape de qualification.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Macon VRD",
          meta: "Ile-de-France • Interim",
          description: "Intervention sur voiries, reseaux et amenagements urbains avec lecture terrain et respect strict des procedures securite.",
        },
        {
          title: "Canalisateur",
          meta: "Paris et proche couronne • Mission longue",
          description: "Travaux sur reseaux humides, tranchees, raccordements et coordination avec equipes chantier.",
        },
        {
          title: "Chef de chantier TP",
          meta: "Ile-de-France • CDI",
          description: "Pilotage des equipes, suivi d'avancement, securite, relation terrain et organisation des phases d'execution.",
        },
      ],
      cta: "Voir les offres Travaux Publics & Genie Civil",
    },
    ctaFinal: {
      title: "Vous cherchez un poste ou un profil en Travaux Publics & Genie Civil ?",
      text: "Orientez-vous vers une equipe qui connait les exigences du chantier, les competences attendues et les prerequis de securite de la filiere.",
      candidat: "Deposer mon CV",
      entreprise: "Contacter un expert filiere",
    },
  },

  "metiers-art-monuments-historiques": {
    slug: "metiers-art-monuments-historiques",
    title: "Metiers d'Art & Monuments Historiques",
    subtitle: "Recrutement d'experts du bati ancien, des savoir-faire rares et des chantiers patrimoniaux exigeants.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Cette filiere s'adresse aux entreprises et aux candidats qui interviennent sur l'ancien, le classe, le sensible et le detail d'execution. Ici, la precision est une exigence de base.",
    heroProofs: [
      "Savoir-faire rares et techniques traditionnelles",
      "Verification des references patrimoine",
      "Lecture fine des contraintes de chantier classe",
    ],
    contexte: {
      title: "Un secteur ou la qualite d'execution ne laisse aucune place a l'approximation",
      intro:
        "Les chantiers de patrimoine imposent une connaissance des materiaux anciens, des gestes traditionnels, des prescriptions patrimoniales et des niveaux de finition eleves. Recruter pour ce secteur suppose de reconnaitre un vrai savoir-faire, pas simplement un poste du batiment renomme.",
      points: [
        { value: "1", label: "filiere dediee aux savoir-faire d'exception" },
        { value: "0", label: "tolerance sur l'approximation d'execution" },
        { value: "100%", label: "des references verifiees sur environnements pertinents" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Rarete des competences : les metiers d'art reposent sur des savoir-faire peu diffus et difficilement remplacables.",
        "Respect des prescriptions patrimoniales : travail sur bati ancien, materiaux traditionnels et techniques specifiques.",
        "Exigence de precision et de finition : le niveau d'execution est determinant a chaque etape du chantier.",
        "Securite en environnement complexe : travail en hauteur, echafaudages, structures fragiles et organisation contraignante.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        {
          label: "Savoir-faire coeur de filiere",
          items: [
            "Tailleur de pierre",
            "Macon du patrimoine",
            "Macon pierre",
            "Charpentier traditionnel",
            "Couvreur patrimoine",
            "Zingueur traditionnel",
            "Staffeur / Stucateur",
            "Sculpteur ornemaniste",
            "Menuisier patrimoine",
            "Peintre decorateur patrimoine",
          ],
        },
        {
          label: "Encadrement et conduite",
          items: [
            "Chef d'equipe patrimoine",
            "Conducteur de travaux patrimoine",
            "Charge d'etudes monuments historiques",
          ],
        },
      ],
    },
    habilitations: {
      title: "Securite, habilitations et references",
      intro:
        "Sur cette filiere, la conformite ne s'arrete pas aux habilitations. Elle passe aussi par la preuve d'une experience pertinente sur ouvrages anciens, sites classes ou chantiers de restauration exigeants.",
      items: [
        "Travail en hauteur et montage / utilisation d'echafaudage",
        "SST et habilitation electrique si l'environnement le requiert",
        "Verification de l'experience sur bati ancien ou chantier classe",
        "Controle des references patrimoine et de la qualite de finition attendue",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du parcours",
          text: "Nous analysons les typologies de chantiers, les materiaux pratiques, les techniques traditionnelles maitrisees et le niveau de finition attendu.",
        },
        {
          title: "Questionnaire technique patrimoine",
          text: "Mortiers a la chaux, taille de pierre, lecture de bati ancien, travail a l'identique, respect des prescriptions et sens du detail.",
        },
        {
          title: "Verification des references",
          text: "Controle des interventions realisees sur projets patrimoniaux, bati ancien ou chantiers de restauration a forte exigence.",
        },
        {
          title: "Evaluation de la rigueur",
          text: "Nous validons minutie, patience, respect des consignes et capacite a travailler avec finesse sur des ouvrages sensibles.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Ce qu'un acteur generaliste voit comme un simple poste de macon, de charpentier ou de couvreur peut relever ici d'un vrai savoir-faire patrimonial. C'est cette nuance qui change la qualite du recrutement.",
      items: [
        "Une filiere dediee au patrimoine et aux savoir-faire rares.",
        "Une selection rigoureuse des gestes metier, des references et de la finesse d'execution.",
        "Une comprehension des contraintes architecturales, historiques et techniques propres a ces chantiers.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Tailleur de pierre",
          meta: "Paris • Interim",
          description: "Intervention sur restauration de facade et taille sur pierre ancienne avec forte exigence de precision.",
        },
        {
          title: "Macon du patrimoine",
          meta: "Ile-de-France • Mission longue",
          description: "Travaux de restauration sur bati ancien, chaux, pierre et reprises structurelles en environnement patrimonial.",
        },
        {
          title: "Conducteur de travaux patrimoine",
          meta: "Ile-de-France • CDI",
          description: "Pilotage de chantiers a forte exigence patrimoniale, coordination des corps d'etat et suivi qualitatif.",
        },
      ],
      cta: "Voir les offres Metiers d'Art & Patrimoine",
    },
    ctaFinal: {
      title: "Vous intervenez sur le patrimoine, l'ancien ou les savoir-faire d'exception ?",
      text: "Rejoignez ou sollicitez une equipe qui sait distinguer les vrais profils patrimoniaux des recrutements trop generalistes.",
      candidat: "Deposer mon CV",
      entreprise: "Parler a un expert patrimoine",
    },
  },

  "evenementiel-technique": {
    slug: "evenementiel-technique",
    title: "Evenementiel Technique (son, lumiere, video)",
    subtitle: "Recrutement d'experts techniques pour les productions live, les lieux permanents et les installations temporaires.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Dans l'evenementiel technique, la fiabilite n'est pas une promesse marketing. C'est une condition de reussite. Nous qualifions des profils capables de tenir la pression du live.",
    heroProofs: [
      "Son, lumiere, video, structure, rigging, regie",
      "Profils verifies sur experiences live",
      "Culture du zero defaut et de la securite",
    ],
    contexte: {
      title: "Un secteur ou chaque detail technique a un impact immediat",
      intro:
        "Concerts, corporate, salons, tournees, lieux permanents ou evenements premium : la production live impose coordination, rigueur, mobilite et adaptation rapide. Le bon profil est celui qui reste fiable sous contrainte, pas seulement disponible.",
      points: [
        { value: "Live", label: "environnement ou l'erreur coute immediatement" },
        { value: "6", label: "sous-familles de metiers recrutees" },
        { value: "24/7", label: "capacite a repondre aux rythmes et amplitudes variables" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Zero defaut : une defaillance technique peut compromettre toute la prestation.",
        "Mobilite et intensite : horaires decales, cadence de montage / demontage, adaptation a des sites differents.",
        "Competences rares : specialisations son, lumiere, video, structure, rigging et regie difficiles a substituer.",
        "Securite : travail en hauteur, structures, charges, installations electriques temporaires et coactivite equipe.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        { label: "Son", items: ["Technicien son", "Ingenieur du son", "Technicien HF", "Road son"] },
        { label: "Lumiere", items: ["Technicien lumiere", "Pupitreur lumiere", "Electricien evenementiel", "Road lumiere"] },
        { label: "Video", items: ["Technicien video", "Operateur video", "Technicien mapping", "Road video"] },
        { label: "Structure & rigging", items: ["Monteur structure", "Rigger", "Chef rigger"] },
        { label: "Regie", items: ["Regisseur technique", "Regisseur plateau", "Regisseur general", "Regisseur de salle"] },
      ],
    },
    habilitations: {
      title: "Securite, habilitations et prerequis techniques",
      intro:
        "La technicite evenementielle exige des profils fiables dans l'action, mais aussi conformes aux contraintes d'installation, d'accroche, d'electricite et de securite.",
      items: [
        "Habilitation electrique selon les installations",
        "CACES R486 / nacelle si besoin d'acces en hauteur",
        "Travail en hauteur et prerequis rigging / accroche",
        "SST et verification des habitudes securite en environnement live",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification de la specialite",
          text: "Nous validons le coeur de metier, le niveau d'autonomie et les environnements deja pratiques : festival, tournee, corporate, lieu permanent ou luxe evenementiel.",
        },
        {
          title: "Questionnaire technique par sous-filiere",
          text: "Consoles, protocoles reseaux, installation, accroche, regie, lecture de plans, gestion des contraintes plateau et securite.",
        },
        {
          title: "Verification experiences live",
          text: "Nous controlons la realite des prestations deja assurees et la capacite du profil a tenir un environnement a forte pression.",
        },
        {
          title: "Evaluation comportementale",
          text: "Fiabilite, ponctualite, resistance au stress, esprit d'equipe et adaptation rapide font partie integrante de la qualification.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Sur cette filiere, recruter vite ne suffit pas. Il faut comprendre l'evenement, la configuration technique, les amplitudes horaires et le niveau de responsabilite reelle de chaque profil.",
      items: [
        "Une lecture fine des besoins par specialite technique, pas un tri globaliste des intermittents et techniciens.",
        "Une evaluation croisee de la competence, de la tenue sous pression et des prerequis securite.",
        "Une reactivite utile, alignee sur la realite de la production live.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Technicien lumiere",
          meta: "Ile-de-France • CDDU / Interim",
          description: "Installation, exploitation et maintenance des dispositifs lumiere en environnement evenementiel.",
        },
        {
          title: "Rigger",
          meta: "Paris • Mission evenementielle",
          description: "Preparation et mise en oeuvre des accroches et structures temporaires dans le respect strict des procedures securite.",
        },
        {
          title: "Regisseur technique",
          meta: "Ile-de-France • CDI",
          description: "Coordination des equipes, anticipation des contraintes d'exploitation et supervision des installations techniques.",
        },
      ],
      cta: "Voir les offres Evenementiel Technique",
    },
    ctaFinal: {
      title: "Vous recrutez ou recherchez une mission en evenementiel technique ?",
      text: "Appuyez-vous sur une filiere qui comprend la production live, la pression operationnelle et les pre requis terrain de chaque specialite.",
      candidat: "Voir les offres",
      entreprise: "Parler a un expert event",
    },
  },

  "hotellerie-restauration-haut-de-gamme": {
    slug: "hotellerie-restauration-haut-de-gamme",
    title: "Hotellerie & Restauration Haut de Gamme",
    subtitle: "Recrutement de profils operationnels aligns sur les codes du luxe, du service premium et de l'excellence relationnelle.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Cette filiere s'adresse aux etablissements et aux candidats pour lesquels la qualite de service, la posture, la presentation et la regularite operationnelle sont decisives.",
    heroProofs: [
      "Service premium, brigade, reception, gouvernance",
      "Evaluation du savoir-etre et des codes de service",
      "Matching selon le standard reel de l'etablissement",
    ],
    contexte: {
      title: "Un secteur ou le niveau d'exigence se joue dans le detail",
      intro:
        "En hotellerie et restauration haut de gamme, les competences techniques ne suffisent pas. Il faut aussi comprendre les codes, les rythmes, l'exigence client, la discretion et la qualite de presentation attendue dans des environnements premium.",
      points: [
        { value: "Premium", label: "niveau de service vise" },
        { value: "Pics", label: "d'activite a absorber sans degradation de qualite" },
        { value: "Double", label: "lecture metier : competences + posture" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Standard de service non negociable : tenue, diction, posture, discretion et sens du detail.",
        "Pics d'activite et evenements a enjeu : banquets, salons, congres, lieux premium, operations ponctuelles exigeantes.",
        "Penurie sur les profils experimentes : maitres d'hotel, chefs de rang, gouvernants, reception premium ou brigade qualifiee.",
        "Image de l'etablissement : chaque interaction influence l'experience client et la perception du niveau de service.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        { label: "Salle et relation client", items: ["Maitre d'hotel", "Chef de rang", "Commis de salle", "Serveur banquet", "Hote / Hotesse"] },
        { label: "Cuisine et brigade", items: ["Chef de cuisine", "Sous-chef", "Chef de partie", "Commis de cuisine", "Patissier"] },
        { label: "Hotellerie premium", items: ["Receptionniste", "Concierge", "Gouvernant(e)", "Valet / Femme de chambre", "Majordome"] },
      ],
    },
    habilitations: {
      title: "Conformite, hygiene et standards",
      intro:
        "Sur cette filiere, le controle porte autant sur les savoir-faire que sur les codes de presentation, la fiabilite et l'adequation au niveau de standing attendu.",
      items: [
        "Verification des experiences en environnements premium ou haut de gamme",
        "Controle des standards hygiene et HACCP pour les metiers de cuisine",
        "Validation de la posture, de la presentation et de la qualite relationnelle",
        "Verification des references selon le niveau de service vise",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du contexte",
          text: "Nous analysons le type d'etablissement, le standing, le volume d'activite et les attentes operationnelles reelles.",
        },
        {
          title: "Questionnaire technique par metier",
          text: "Service, protocoles, rythme banquet, techniques culinaires, hygiene, accueil client, sens du detail et adaptation au standard attendu.",
        },
        {
          title: "Evaluation du savoir-etre",
          text: "Posture, langage, discretion, presentation, gestion du stress et capacite a incarner un service premium.",
        },
        {
          title: "Verification des references",
          text: "Nous controlons la constance operationnelle et la compatibilite du profil avec l'exigence reelle de l'etablissement.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Un profil pour palace, hotel 5 etoiles, maison premium ou evenement haut de gamme ne se recrute pas comme un renfort standard. La nuance de niveau est centrale.",
      items: [
        "Une lecture precise des standards de service et des niveaux d'exigence reelle.",
        "Une selection qui combine competences metier, codes premium et fiabilite operationnelle.",
        "Une capacite a proposer des profils alignes avec l'image et le rythme de l'etablissement.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Chef de rang",
          meta: "Paris • Interim / Extra",
          description: "Service haut de gamme en environnement premium, rythme soutenu et excellence relationnelle attendue.",
        },
        {
          title: "Gouvernant(e)",
          meta: "Ile-de-France • CDI",
          description: "Supervision des equipes et maintien des standards qualite dans un etablissement haut de gamme.",
        },
        {
          title: "Chef de partie",
          meta: "Paris • CDD",
          description: "Production culinaire exigeante, respect des process et integration a une brigade de haut niveau.",
        },
      ],
      cta: "Voir les offres Hotellerie & Restauration",
    },
    ctaFinal: {
      title: "Vous recrutez ou recherchez une mission dans l'hotellerie et la restauration haut de gamme ?",
      text: "Appuyez-vous sur une equipe qui sait evaluer les competences, le savoir-etre et l'adequation au niveau de standing attendu.",
      candidat: "Deposer mon CV",
      entreprise: "Etre rappele par un expert",
    },
  },

  "maintenance-metiers-techniques": {
    slug: "maintenance-metiers-techniques",
    title: "Maintenance & Metiers Techniques",
    subtitle: "Recrutement de profils techniques pour la continuite d'exploitation, la conformite et la performance des installations.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Nous recrutons pour des environnements ou une panne, un mauvais diagnostic ou un manque de conformite ont un impact direct sur l'activite. La fiabilite technique est centrale.",
    heroProofs: [
      "Industrie, tertiaire, ERP, plateformes, sites sensibles",
      "Evaluation des habilitations et capacites de diagnostic",
      "Reactivite adaptee aux contraintes d'exploitation",
    ],
    contexte: {
      title: "Un secteur ou la reactivite n'a de valeur que si elle est techniquement fiable",
      intro:
        "Maintenance industrielle, multitechnique, CVC, energie ou exploitation tertiaire : ces environnements exigent des profils capables d'intervenir vite, bien et dans le respect strict des normes. La competence terrain s'evalue autant sur la technique que sur la securite et la capacite d'analyse.",
      points: [
        { value: "Sites", label: "industriels, tertiaires et sensibles couverts" },
        { value: "0", label: "marge pour l'approximation sur la conformite" },
        { value: "24/7", label: "realite de certaines contraintes d'exploitation" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Penurie de profils qualifies sur les metiers multitechniques, CVC, automatismes et maintenance specialisee.",
        "Complexite technique croissante : GTC, GTB, automatismes, maintenance predictive et systemes connectes.",
        "Contraintes reglementaires fortes : electricite, fluides, securite incendie, environnement et conformite d'exploitation.",
        "Environnements sensibles : ERP, sites industriels, plateformes logistiques, hopitaux et tertiaire critique.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        { label: "Maintenance industrielle", items: ["Technicien de maintenance industrielle", "Electromecanicien", "Automaticien", "Technicien hydraulique / pneumatique", "Mecanicien industriel"] },
        { label: "Maintenance electrique", items: ["Electricien industriel", "Technicien electrotechnique", "Tableautier", "Technicien HT/BT"] },
        { label: "CVC et energetique", items: ["Technicien CVC", "Frigoriste", "Technicien chaudiere / bruleur", "Technicien GTC / GTB"] },
        { label: "Multitechnique et tertiaire", items: ["Technicien multitechnique", "Agent de maintenance batiment", "Technicien SSI", "Technicien ascensoriste"] },
      ],
    },
    habilitations: {
      title: "Habilitations, securite et conformite",
      intro:
        "Cette filiere implique une verification rigoureuse des habilitations et de leur coherence avec les missions, les sites et les niveaux d'intervention attendus.",
      items: [
        "Habilitations electriques selon le niveau d'intervention",
        "Verification CACES, fluides frigorigènes, ATEX ou autres prerequis selon site",
        "Controle de la capacite a intervenir en environnement sensible ou reglemente",
        "Validation des habitudes securite et du respect des procedures",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du contexte technique",
          text: "Nous identifions le type de site, le niveau de criticite, les equipements concernes et le degre d'autonomie attendu.",
        },
        {
          title: "Questionnaire technique metier",
          text: "Lecture de schemas, diagnostic panne, normes, automatismes, CVC, exploitation et logique de maintenance preventive ou corrective.",
        },
        {
          title: "Verification des habilitations",
          text: "Nous controlons les habilitations et leur adequation avec les missions reelles : electricite, fluides, acces, environnement specifique.",
        },
        {
          title: "Controle de references",
          text: "Validation aupres de responsables maintenance, directeurs techniques ou exploitants sur la fiabilite et la qualite d'intervention.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Ce que beaucoup d'acteurs traitent comme un besoin de technicien interchangeable demande en realite une lecture fine de l'installation, du niveau de criticite et des contraintes reglementaires.",
      items: [
        "Une comprehension concrete des environnements industriels, tertiaires et techniques.",
        "Une evaluation metier centree sur la fiabilite, le diagnostic et la conformite.",
        "Une reponse reactive sans sacrifier la qualite de qualification.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Technicien CVC",
          meta: "Ile-de-France • CDI",
          description: "Maintenance preventive et corrective sur installations thermiques et de traitement d'air en environnement tertiaire.",
        },
        {
          title: "Electrotechnicien",
          meta: "Paris • Interim",
          description: "Diagnostic, maintenance et intervention sur equipements electriques avec respect des normes et procedures.",
        },
        {
          title: "Technicien multitechnique",
          meta: "Ile-de-France • Mission longue",
          description: "Interventions polyvalentes sur site d'exploitation avec priorite a la continuite de service.",
        },
      ],
      cta: "Voir les offres Maintenance & Metiers Techniques",
    },
    ctaFinal: {
      title: "Vous recrutez ou recherchez une mission en maintenance ?",
      text: "Appuyez-vous sur une filiere qui sait lire la realite technique d'un site, ses contraintes de conformite et son niveau de criticite.",
      candidat: "Voir les offres",
      entreprise: "Parler a un expert technique",
    },
  },

  "metiers-paysage-amenagements-exterieurs": {
    slug: "metiers-paysage-amenagements-exterieurs",
    title: "Metiers du Paysage & Amenagements Exterieurs",
    subtitle: "Recrutement de professionnels du vegetal, des sols et des amenagements techniques exterieurs.",
    heroLabel: "Filiere specialisee",
    heroIntro:
      "Cette filiere ne recrute pas 'des jardiniers' au sens large. Elle qualifie des professionnels du vegetal, des amenagements exterieurs, de l'entretien, de la creation et des interventions terrain specialisees.",
    heroProofs: [
      "Paysage, amenagement, sols, irrigation, elagage",
      "Lecture de plans et adaptation terrain",
      "Dimension technique et environnementale assumee",
    ],
    contexte: {
      title: "Un secteur ou le vegetal rencontre la technique",
      intro:
        "Creation paysagere, entretien de grands espaces, sols sportifs, amenagements urbains, maçonnerie paysagere, irrigation et interventions techniques exterieures : cette filiere demande une double lecture, a la fois terrain, vegetale et operationnelle.",
      points: [
        { value: "Double", label: "expertise vegetal + amenagement" },
        { value: "Saisons", label: "et pics d'activite a anticiper" },
        { value: "Terrain", label: "comme principal critere de pertinence" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Besoin de profils operationnels capables de s'adapter aux saisons, aux chantiers et aux contraintes de site.",
        "Technicite reelle sur les vegetaux, les sols, la lecture de plans, la pose, l'elagage et les amenagements exterieurs.",
        "Dimension environnementale forte : gestion durable, adaptation climatique, valorisation des dechets verts et qualite d'usage.",
        "Securite terrain : machines, circulation, interventions urbaines, hauteur, manutention et coactivite.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        { label: "Creation et entretien paysager", items: ["Ouvrier paysagiste", "Jardinier paysagiste", "Chef d'equipe paysage", "Chef de chantier paysage", "Elagueur / Arboriste grimpeur"] },
        { label: "Amenagements exterieurs", items: ["Macon paysagiste", "Poseur de bordures et paves", "Terrassier amenagement", "Conducteur d'engins TP paysage"] },
        { label: "Réseaux et irrigation", items: ["Technicien arrosage automatique", "Installateur reseaux irrigation", "Technicien maintenance arrosage"] },
      ],
    },
    habilitations: {
      title: "Securite, habilitations et adaptation terrain",
      intro:
        "Les environnements exterieurs imposent de verifier a la fois les prerequis de securite, la maitrise des outils et l'aptitude a travailler dans des contextes variables.",
      items: [
        "Verification CACES selon engins et materiels utilises",
        "AIPR, habilitation electrique ou travail en hauteur selon interventions",
        "Controle de l'experience terrain en entretien, creation, irrigation ou elagage",
        "Validation des habitudes securite et de l'autonomie sur chantier",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du coeur de metier",
          text: "Nous distinguons les profils creation, entretien, aménagement technique, elagage, irrigation ou conduite d'equipe.",
        },
        {
          title: "Questionnaire technique metier",
          text: "Connaissance vegetaux et sols, lecture de plans, techniques de pose, arrosage, hydraulique, adaptation terrain et securite.",
        },
        {
          title: "Verification des habilitations",
          text: "Nous controlons les prerequis de securite et leur coherence avec la mission et l'environnement reel d'intervention.",
        },
        {
          title: "Validation terrain",
          text: "Autonomie, endurance, esprit d'equipe, rigueur d'execution et respect des consignes font partie de la qualification.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "La valeur de cette filiere repose sur sa capacite a lire des besoins souvent mal exprimes par les acteurs generalistes : vegetal, technique, plan, sol, amenagement, saisonnalite et securite terrain.",
      items: [
        "Une expertise transversale paysage, amenagement et interventions exterieures techniques.",
        "Une qualification metier qui depasse la simple categorie 'espaces verts'.",
        "Une meilleure adequation entre profils, chantiers, saisons et niveau d'autonomie attendu.",
      ],
    },
    offres: {
      title: "Offres liees a la filiere",
      items: [
        {
          title: "Ouvrier paysagiste",
          meta: "Ile-de-France • Interim",
          description: "Travaux de creation et d'entretien d'espaces verts avec adaptation aux contraintes de site et de saison.",
        },
        {
          title: "Elagueur / Arboriste grimpeur",
          meta: "Ile-de-France • Mission longue",
          description: "Interventions techniques en hauteur avec maitrise des conditions de securite et de l'environnement vegetal.",
        },
        {
          title: "Chef d'equipe paysage",
          meta: "Paris • CDI",
          description: "Encadrement terrain, suivi des equipes et pilotage d'operations de creation ou d'entretien.",
        },
      ],
      cta: "Voir les offres Paysage & Amenagements Exterieurs",
    },
    ctaFinal: {
      title: "Vous cherchez un poste ou un renfort sur les metiers du paysage ?",
      text: "Faites-vous orienter vers une equipe qui comprend le vegetal, les amenagements techniques et les contraintes terrain propres a cette filiere.",
      candidat: "Deposer mon CV",
      entreprise: "Contacter un expert paysage",
    },
  },

  "restauration-collective": {
    slug: "restauration-collective",
    title: "Restauration Collective",
    subtitle: "Recrutement de profils opérationnels pour la restauration collective, les traiteurs, les brasseries et les environnements à forte cadence.",
    heroLabel: "Business Unit specialisee",
    heroIntro:
      "Cette BU adresse les environnements ou la regularite de production, l'hygiene, l'organisation d'equipe et la qualite de service doivent tenir dans la duree comme dans les pics d'activite.",
    heroProofs: [
      "Cuisine collective, traiteur, brasserie, service",
      "Evaluation operationnelle et hygiene",
      "Reactivite sur les besoins de continuité de service",
    ],
    contexte: {
      title: "Un secteur ou cadence, hygiene et fiabilite sont inseparables",
      intro:
        "La restauration collective ne se limite pas a produire vite. Elle impose une organisation rigoureuse, le respect strict des normes d'hygiene, une capacite a tenir les volumes et une qualite reguliere de service, quel que soit le contexte d'exploitation.",
      points: [
        { value: "Flux", label: "de production a absorber sans rupture" },
        { value: "HACCP", label: "comme standard non negociable" },
        { value: "Service", label: "continu dans des environnements exigeants" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Maintenir la qualite de production et de service sur des volumes eleves et des rythmes soutenus.",
        "Securiser l'hygiene, la tracabilite et le respect des protocoles HACCP.",
        "Recruter des profils fiables pour les remplacements, les renforts et la continuite d'exploitation.",
        "Adapter les recrutements a des environnements differents : collectivites, sante, enseignement, entreprise, traiteur, brasserie.",
      ],
    },
    metiers: {
      title: "Les metiers que nous recrutons",
      groups: [
        {
          label: "Cuisine et production",
          items: ["Cuisinier de collectivite", "Second de cuisine", "Employe polyvalent de restauration", "Chef gerant", "Commis de cuisine"],
        },
        {
          label: "Service et exploitation",
          items: ["Agent de restauration", "Employe de service", "Plongeur", "Serveur de brasserie", "Personnel traiteur"],
        },
      ],
    },
    habilitations: {
      title: "Hygiene, conformite et prerequis",
      intro:
        "Sur cette BU, la lecture metier porte autant sur la tenue du rythme que sur l'hygiene, la rigueur et l'aptitude a s'integrer rapidement dans une organisation deja en place.",
      items: [
        "Verification des connaissances HACCP et des bonnes pratiques hygiene",
        "Controle des experiences en production, service ou environnement collectif",
        "Validation de la resistance au rythme, de la ponctualite et de la regularite",
        "Verification des references selon le type d'etablissement ou de prestation",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du contexte d'exploitation",
          text: "Nous identifions le type de site, les volumes, les horaires, le niveau d'autonomie et les contraintes de service.",
        },
        {
          title: "Questionnaire operationnel",
          text: "Organisation, cadence, hygiene, poste chaud / froid, service, production et adaptation aux pics d'activite.",
        },
        {
          title: "Verification des references",
          text: "Nous controlons la fiabilite du profil, sa tenue du rythme et sa capacite a s'integrer a une brigade ou a une equipe de service.",
        },
        {
          title: "Validation terrain",
          text: "Ponctualite, endurance, esprit d'equipe et respect des protocoles font partie integrante de la qualification.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Cette BU ne traite pas la restauration collective comme une extension simplifiee du CHR. Elle prend en compte les contraintes propres aux volumes, aux normes, aux horaires et a la continuite de service.",
      items: [
        "Une qualification adaptee aux contraintes de production et d'exploitation.",
        "Une lecture precise des environnements collectifs, traiteur et brasserie.",
        "Une reponse reactive sans sacrifier l'hygiene, la fiabilite et la qualite d'integration.",
      ],
    },
    offres: {
      title: "Offres liees a la BU",
      items: [
        {
          title: "Cuisinier de collectivite",
          meta: "Ile-de-France • Interim",
          description: "Production chaude et froide en environnement collectif avec respect strict des protocoles hygiene.",
        },
        {
          title: "Employe polyvalent de restauration",
          meta: "Paris • Mission courte",
          description: "Renfort service et production sur site a forte frequentation.",
        },
        {
          title: "Chef gerant",
          meta: "Ile-de-France • CDI",
          description: "Pilotage d'activite, coordination d'equipe, suivi qualite et gestion de l'exploitation quotidienne.",
        },
      ],
      cta: "Voir les offres Restauration Collective",
    },
    ctaFinal: {
      title: "Vous recrutez ou recherchez une mission en restauration collective ?",
      text: "Appuyez-vous sur une BU qui comprend les contraintes de production, d'hygiene et de continuite de service propres a ces environnements.",
      candidat: "Voir les offres",
      entreprise: "Parler a un expert restauration",
    },
  },

  "cabinet-placement": {
    slug: "cabinet-placement",
    title: "Cabinet Placement",
    subtitle: "La Business Unit transversale dediee exclusivement au recrutement CDI / CDD pour les metiers en tension et les profils a fort enjeu.",
    heroLabel: "Business Unit transversale",
    heroIntro:
      "Le Cabinet Placement intervient en transverse sur l'ensemble des expertises du Groupe Recrutop, avec une approche conseil, durable et structuree pour les recrutements hors interim.",
    heroProofs: [
      "CDI / CDD",
      "Approche conseil et evaluation approfondie",
      "Appui des expertises metier du groupe",
    ],
    contexte: {
      title: "Une BU pensée pour les recrutements durables",
      intro:
        "Lorsqu'un recrutement engage durablement une organisation, le besoin ne peut pas etre traite comme une simple mise a disposition. Il faut comprendre le poste, l'environnement, les attentes managériales, les competences critiques et les enjeux de stabilite a moyen terme.",
      points: [
        { value: "CDI / CDD", label: "au coeur du dispositif" },
        { value: "Conseil", label: "dans la qualification du besoin" },
        { value: "Metier", label: "comme base de l'evaluation" },
      ],
    },
    enjeux: {
      title: "Les enjeux du secteur",
      items: [
        "Sécuriser des recrutements durables sur des metiers souvent penuriques ou sensibles.",
        "Qualifier finement le besoin pour eviter les erreurs de ciblage et les cycles de recrutement trop longs.",
        "Evaluer au-dela du parcours : autonomie, posture, adequation environnementale et potentiel de stabilite.",
        "S'appuyer sur la connaissance metier des BU du groupe pour gagner en pertinence.",
      ],
    },
    metiers: {
      title: "Les besoins que nous traitons",
      groups: [
        {
          label: "Encadrement et expertise",
          items: ["Conducteur de travaux", "Chef de chantier", "Responsable maintenance", "Regisseur technique", "Chef de cuisine"],
        },
        {
          label: "Profils techniques et penuriques",
          items: ["Technicien CVC", "Automaticien", "Tailleur de pierre", "Maitre d'hotel", "Chef gerant"],
        },
      ],
    },
    habilitations: {
      title: "Verification, references et fiabilite",
      intro:
        "Sur le recrutement CDI / CDD, le niveau d'exigence porte autant sur les competences que sur la coherence du parcours, les references et la capacite du profil a s'inscrire dans la duree.",
      items: [
        "Verification des pre requis techniques et habilitations si le poste l'exige",
        "Controle approfondi des references professionnelles",
        "Evaluation comportementale et manageriale selon le niveau du poste",
        "Analyse de l'adequation entre profil, contexte et perspectives de stabilite",
      ],
    },
    methode: {
      title: "Notre methode d'evaluation",
      steps: [
        {
          title: "Qualification du besoin",
          text: "Nous cadrons le poste, les enjeux de l'entreprise, les priorites metier et les attentes de long terme.",
        },
        {
          title: "Sourcing cible",
          text: "Notre recherche combine expertise metier, reseaux qualifies et outils modernes de matching et de tri.",
        },
        {
          title: "Evaluation approfondie",
          text: "Entretien structure, verification des competences, references, posture et compatibilite avec l'environnement du poste.",
        },
        {
          title: "Accompagnement de decision",
          text: "Nous presentons des candidatures argumentees et accompagneons la prise de decision jusqu'a l'integration.",
        },
      ],
    },
    valeurAjoutee: {
      title: "Notre valeur ajoutee specifique",
      intro:
        "Le Cabinet Placement combine la logique conseil d'un recrutement durable avec la connaissance terrain des BU du Groupe Recrutop. C'est cette articulation qui fait la difference.",
      items: [
        "Une BU exclusivement dediee au CDI / CDD.",
        "Un sourcing renforce par les expertises metier du groupe et les outils ATS / CRM.",
        "Une evaluation plus fine des profils, de leur potentiel d'integration et de leur stabilite.",
      ],
    },
    offres: {
      title: "Offres liees a la BU",
      items: [
        {
          title: "Conducteur de travaux",
          meta: "Ile-de-France • CDI",
          description: "Pilotage d'operations, coordination des equipes et responsabilite de l'execution dans un environnement exigeant.",
        },
        {
          title: "Responsable maintenance",
          meta: "Paris • CDI",
          description: "Supervision technique, management de l'activite et continuite d'exploitation sur site critique.",
        },
        {
          title: "Chef de cuisine",
          meta: "Ile-de-France • CDI",
          description: "Management de brigade, excellence operationnelle et pilotage de la qualite en environnement premium.",
        },
      ],
      cta: "Voir les opportunites CDI / CDD",
    },
    ctaFinal: {
      title: "Vous avez un recrutement durable a securiser ?",
      text: "Le Cabinet Placement vous accompagne avec une approche conseil, des expertises metier et des outils modernes de qualification.",
      candidat: "Voir les opportunites",
      entreprise: "Contacter le Cabinet Placement",
    },
  },
};

export function getSecteurContent(slug: string): SecteurPageContent | undefined {
  return secteursContent[slug];
}
