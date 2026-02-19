import { useState } from "react";
import { bus } from "../data/bus";

/** 5 Business Units ultra-spécialisées (mini-home par BU) */
const filièresPrincipales = bus.slice(0, 5);

export function BusGrid() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleScrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const goToSlide = (index: number) => setCarouselIndex(index);
  const goPrev = () => setCarouselIndex((prev) => (prev - 1 + filièresPrincipales.length) % filièresPrincipales.length);
  const goNext = () => setCarouselIndex((prev) => (prev + 1) % filièresPrincipales.length);

  return (
    <section id="filières" className="bus-section" aria-labelledby="filières-title">
      <div className="container">
        <div className="bus-header">
          <h2 id="filières-title">Vos 5 Business Units ultra-spécialisées</h2>
          <p>
            Chaque bloc agit comme une mini-home dédiée : créneau, message et métiers au service de votre recrutement.
          </p>
        </div>

        {/* Carrousel avec photos par filière */}
        <div className="filières-carousel sectors-carousel">
          <div className="carousel-container">
            <button
              type="button"
              className="carousel-button carousel-button-prev"
              onClick={goPrev}
              aria-label="Filière précédente"
            >
              ‹
            </button>
            <div className="carousel-slides">
              {filièresPrincipales.map((bu, index) => (
                <div
                  key={bu.id}
                  className={`carousel-slide ${index === carouselIndex ? "active" : ""}`}
                  style={{ "--accent-color": bu.ctaColor } as React.CSSProperties}
                >
                  <div className="sector-card-carousel">
                    <div
                      className="sector-image-wrapper"
                      style={{ background: bu.ctaColor }}
                    >
                      <img
                        src={bu.carouselImage || bu.logoSrc}
                        alt={bu.name}
                        className={!bu.carouselImage ? "filiere-carousel-logo-fallback" : undefined}
                        onError={(e) => {
                          e.currentTarget.src = bu.logoSrc;
                          e.currentTarget.classList.add("filiere-carousel-logo-fallback");
                        }}
                      />
                    </div>
                    <div className="sector-content">
                      {bu.creneau && <p className="sector-content-creneau">{bu.creneau}</p>}
                      <h3>{bu.name}</h3>
                      <p>{bu.promise}</p>
                      <a
                        href={bu.ctaHref}
                        className="btn btn-primary"
                        onClick={handleScrollTo("#contact-rapide")}
                        style={{ background: bu.ctaColor, borderColor: bu.ctaColor }}
                      >
                        {bu.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="carousel-button carousel-button-next"
              onClick={goNext}
              aria-label="Filière suivante"
            >
              ›
            </button>
          </div>
          <div className="carousel-indicators">
            {filièresPrincipales.map((bu, index) => (
              <button
                key={bu.id}
                type="button"
                className={`carousel-indicator ${index === carouselIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Voir ${bu.name}`}
                style={{ "--accent-color": bu.ctaColor } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        <div className="bus-grid">
          {filièresPrincipales.map((bu) => (
            <article
              key={bu.id}
              className={`bu-card ${bu.visualClass}`}
              style={{ "--bu-cta-color": bu.ctaColor } as React.CSSProperties}
            >
              <div className="bu-card-visual">
                <img src={bu.logoSrc} alt="" className="bu-card-logo" />
                <div className={`bu-card-bg ${bu.visualClass}`} aria-hidden="true" />
              </div>
              <div className="bu-card-content">
                {bu.creneau && (
                  <p className="bu-card-creneau">{bu.creneau}</p>
                )}
                <h3>{bu.name}</h3>
                <p className="bu-card-promise">{bu.promise}</p>
                <ul className="bu-card-metiers">
                  {bu.metiers.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <a
                  href={bu.ctaHref}
                  className="btn btn-primary bu-card-cta"
                  onClick={handleScrollTo("#contact-rapide")}
                >
                  {bu.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusGrid;
