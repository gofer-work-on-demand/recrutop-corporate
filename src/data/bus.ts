/**
 * Business Units ultra-spécialisées – structure Home Recrutop
 * Chaque BU = mini-home dédiée (créneau, message, métiers)
 */
export interface Bu {
  id: string;
  name: string;
  shortName: string;
  /** Accroche courte "Le créneau" */
  creneau?: string;
  promise: string;
  metiers: string[];
  cta: string;
  ctaHref: string;
  logoSrc: string;
  visualClass: string;
  ctaColor: string;
  carouselImage?: string;
}

/** 5 BU ultra-spécialisées (ordre : I à V) */
export const bus: Bu[] = [
  {
    id: "patrimoine",
    name: "Métiers d'Art & Monuments Historiques",
    shortName: "Art & Intérim",
    creneau: "La haute couture du bâtiment.",
    promise:
      "Restaurer le passé, recruter l'excellence. Nous sourçons les gardiens du patrimoine pour vos chantiers les plus prestigieux.",
    metiers: ["Taille de pierre", "Staff", "Menuiserie d'art", "Dorure", "Maçonnerie ancienne"],
    cta: "Accéder à la filière Patrimoine",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/artetinterim-logo.png",
    visualClass: "bu-visual-patrimoine",
    ctaColor: "#e7a855",
    carouselImage: "/assets/artinterim.jpg",
  },
  {
    id: "tp-gc",
    name: "Travaux Publics & Génie Civil",
    shortName: "JPSI / TP-GC",
    creneau: "Les bâtisseurs d'infrastructures.",
    promise:
      "La technicité au service des grands chantiers. Une BU dédiée aux structures, aux réseaux et à la solidité du territoire.",
    metiers: ["VRD", "Coffrage", "Conduite d'engins spécialisés", "Encadrement TP"],
    cta: "Accéder à la filière TP / Génie civil",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/jpsi-logo.png",
    visualClass: "bu-visual-tp",
    ctaColor: "#d43136",
    carouselImage: "/assets/tpgc.jpg",
  },
  {
    id: "espaces-verts",
    name: "Espaces Verts & Paysage",
    shortName: "Garden",
    creneau: "Les experts du vivant.",
    promise:
      "L'expertise au service du paysage. Des spécialistes du végétal pour l'aménagement et l'entretien de vos espaces naturels.",
    metiers: ["Création paysagère", "Élagage", "Entretien de grands espaces", "Sols sportifs"],
    cta: "Accéder à la filière Espaces verts",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/garden-logo.png",
    visualClass: "bu-visual-verts",
    ctaColor: "#1b9f46",
    carouselImage: "/assets/espacesverts.png",
  },
  {
    id: "hotellerie-restauration",
    name: "Hôtellerie & Restauration Haut de Gamme",
    shortName: "GOFER",
    creneau: "Le luxe et l'art de recevoir.",
    promise:
      "L'exigence du service Premium. Une immersion totale dans les codes du luxe pour un personnel de salle et de cuisine d'exception.",
    metiers: ["Chefs de cuisine", "Majordomes", "Maîtres d'hôtel", "Gouvernants"],
    cta: "Accéder à la filière Hôtellerie/Restauration",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/restauration-logo.png",
    visualClass: "bu-visual-chr",
    ctaColor: "#44769f",
    carouselImage: "/assets/hotellerierestau.png",
  },
  {
    id: "event",
    name: "RECRUTOP Event",
    shortName: "Event",
    creneau: "La performance technique (Son, Lumière, Vidéo).",
    promise:
      "La puissance technique derrière l'événement. Nous recrutons les experts de la régie pour vos productions les plus ambitieuses.",
    metiers: [
      "Techniciens son / lumière / vidéo",
      "Monteurs de structures, régisseurs",
      "Intermittents techniques",
    ],
    cta: "Accéder à la filière Event",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/event-logo.png",
    visualClass: "bu-visual-event",
    ctaColor: "#6c8999",
    carouselImage: "/assets/audiovisuel.png",
  },
  {
    id: "mecatech",
    name: "Maintenance / Techniciens",
    shortName: "Mecatech",
    promise: "Technicité + habilitations + fiabilité terrain.",
    metiers: ["Maintenance industrielle", "Bâtiment", "CVC", "Techniciens spécialisés"],
    cta: "Accéder à la filière Mecatech",
    ctaHref: "#contact-rapide",
    logoSrc: "/assets/mecatech-logo.png",
    visualClass: "bu-visual-mecatech",
    ctaColor: "#70b1ce",
  },
];

/** Transverse : placement CDI/CDD */
export const buCarriere = {
  id: "carriere",
  name: "Recrutop Carrière",
  shortName: "CDI / CDD",
  promise: "Le placement CDI/CDD au service de toutes nos filières.",
  cta: "Découvrir Recrutop Carrière",
  ctaHref: "#contact-rapide",
  logoSrc: "/assets/carriere-logo.png",
  visualClass: "bu-visual-carriere",
  ctaColor: "#e06e02",
};
