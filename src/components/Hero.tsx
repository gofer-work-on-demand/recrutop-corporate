export function Hero() {
  const handleScrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>L’intérim et le recrutement par filières métiers spécialisées.</h1>
            <p className="hero-subtitle">
              Chez Recrutop, chaque filière est dédiée à un univers métier précis, avec des équipes expertes et ancrées terrain.
            </p>
            <p className="hero-subtitle hero-subtitle-strong">
              Des spécialistes, pas des généralistes.
            </p>
            <p className="hero-microproof">
              Une filière = des métiers ciblés = des consultants qui parlent votre langage.
            </p>
            <div className="hero-actions">
              <a href="#contact-rapide" className="btn btn-primary" onClick={handleScrollTo("#contact-rapide")}>
                Je suis une entreprise
              </a>
              <a
                href="https://recrutement.recrutop.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Je suis candidat / intérimaire
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
