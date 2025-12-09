import { useState, useEffect } from "react";

const sectors = [
  {
    title: "Construction & Patrimoine",
    text: "Intérim, insertion et recrutement pour le BTP, les grands travaux et la restauration du patrimoine, avec des équipes formées à la sécurité et aux environnements techniques complexes.",
    accentColor: "var(--accent-orange)",
    icon: "/assets/btp.png",
  },
  {
    title: "Hôtellerie, Restauration & Événementiel",
    text: "Renforts et recrutements pour les hôtels, restaurants, traiteurs et acteurs de l'événementiel, en cuisine, salle, réception et service banquet.",
    accentColor: "var(--accent-coral)",
    icon: "/assets/hotellerie.png",
  },
  {
    title: "Technique, Maintenance & Opérations",
    text: "Profils techniques pour la maintenance industrielle et tertiaire, le multi-technique, le CVC et la technique événementielle.",
    accentColor: "var(--primary-blue)",
    icon: "/assets/maintenance.png",
  },
  {
    title: "Insertion, Espaces verts & Parcours carrière",
    text: "Solutions d'insertion, équipes encadrées en espaces verts et accompagnement des recrutements durables avec Recrutop Carrière.",
    accentColor: "var(--accent-green)",
    icon: "/assets/espaces-verts.png",
  },
];

export function KeySectorsStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sectors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="secteurs" className="key-sectors">
      <div className="container">
        <div className="key-sectors-header">
          <h2>Nos 4 domaines d'intervention</h2>
          <p>
            Pour rendre la lecture simple, le groupe Recrutop est structuré en 4 grands domaines. Chaque
            domaine rassemble plusieurs marques spécialisées.
          </p>
        </div>
        <div className="sectors-carousel">
          <div className="carousel-container">
            <button
              className="carousel-button carousel-button-prev"
              onClick={goToPrevious}
              aria-label="Secteur précédent"
            >
              ‹
            </button>
            <div className="carousel-slides">
              {sectors.map((sector, index) => (
                <div
                  key={sector.title}
                  className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                  style={{ "--accent-color": sector.accentColor } as React.CSSProperties}
                >
                  <div className="sector-card-carousel">
                    <div className="sector-image-wrapper">
                      <img src={sector.icon} alt={sector.title} />
                    </div>
                    <div className="sector-content">
                      <h3>{sector.title}</h3>
                      <p>{sector.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-button carousel-button-next"
              onClick={goToNext}
              aria-label="Secteur suivant"
            >
              ›
            </button>
          </div>
          <div className="carousel-indicators">
            {sectors.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au secteur ${index + 1}`}
                style={{
                  "--accent-color": sectors[index].accentColor,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeySectorsStrip;

