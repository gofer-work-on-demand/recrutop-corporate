export function Hero() {
  const handleScrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero hero-premium">
      <div className="container">
        <div className="hero-premium-shell">
          <div className="hero-premium-content">
            <p className="hero-premium-kicker">Des Business Units spécialisées. Une même exigence métier.</p>
            <h1 className="hero-premium-title">
              Recrutement & intérim d&apos;experts par filière métier
            </h1>
            <p className="hero-premium-subtitle">
              Chez Recrutop, chaque filière est portée par des recruteurs qui connaissent les métiers, les contraintes terrain, les exigences clients et les critères d&apos;évaluation de leur secteur.
            </p>
            <p className="hero-premium-proof">
              Des spécialistes, pas des généralistes. Un groupe structuré par expertises métiers, renforcé par des outils modernes, l&apos;IA et un pilotage CRM / ATS.
            </p>
            <div className="hero-premium-ctas">
              <a
                href="https://recrutement.recrutop.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary hero-cta-primary"
              >
                Je suis candidat
              </a>
              <a
                href="#contact-rapide"
                className="btn btn-secondary hero-cta-secondary"
                onClick={handleScrollTo("#contact-rapide")}
              >
                Je recrute
              </a>
            </div>
          </div>

          <div className="hero-search-card">
            <div className="hero-search-header">
              <h2>Trouver une offre adaptée à votre métier</h2>
              <p>Recherchez par métier, localisation et type de contrat.</p>
            </div>
            <form
              className="hero-search-form"
              action="https://recrutement.recrutop.fr/"
              method="get"
              target="_blank"
              rel="noreferrer"
            >
              <label>
                Métier ou mot-clé
                <input type="text" name="keywords" placeholder="Ex. maçon VRD, technicien CVC, chef de rang" />
              </label>
              <label>
                Localisation
                <input type="text" name="location" placeholder="Ex. Paris, Île-de-France" />
              </label>
              <label>
                Type de contrat
                <select name="contract">
                  <option value="">Tous les contrats</option>
                  <option value="interim">Intérim</option>
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                </select>
              </label>
              <button type="submit" className="btn btn-primary hero-search-submit">
                Voir les offres
              </button>
            </form>
            <div className="hero-search-links">
              <a href="#filières" onClick={handleScrollTo("#filières")}>Explorer les filières</a>
              <a href="https://recrutement.recrutop.fr/" target="_blank" rel="noopener noreferrer">Déposer mon CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
