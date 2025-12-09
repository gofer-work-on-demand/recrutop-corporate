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
            <span className="badge">Ultra spécialisé – 5 secteurs clés</span>
            <h1>Recrutop, groupe d'intérim, de recrutement et d'insertion</h1>
            <p>
              Recrutop accompagne les entreprises et les candidats dans 5 univers : construction &
              patrimoine, hôtellerie–restauration & événementiel, technique & maintenance, insertion &
              espaces verts, CDI / CDD avec Recrutop Carrière. Un groupe, des pôles spécialisés, une même
              exigence de qualité.
            </p>
            <p>
              Identifiez en quelques secondes vos secteurs, les marques du groupe et le bon point d'entrée
              selon que vous êtes candidat ou client.
            </p>
            <div className="hero-actions">
              <a href="#secteurs" className="btn btn-primary" onClick={handleScrollTo("#secteurs")}>
                Découvrir nos secteurs
              </a>
              <a
                href="https://recrutement.recrutop.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Voir les offres d'emploi
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/hero.png" alt="Équipe Recrutop" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
