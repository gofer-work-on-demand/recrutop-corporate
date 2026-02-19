export function InsertionSection() {
  const handleScrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="insertion" className="insertion-section">
      <div className="container">
        <div className="insertion-header">
          <img
            src="/assets/passerelle-logo.png"
            alt=""
            className="insertion-logo"
            aria-hidden="true"
          />
          <h2>Passerelle : Le trait d'union vers l'emploi durable</h2>
          <blockquote className="insertion-quote">
            « Le talent n'a pas de parcours type, il n'a que des potentiels. »
          </blockquote>
          <p>
            Passerelle est notre entité dédiée à l'Insertion par l'Activité Économique (IAE). Elle identifie des profils éloignés de l'emploi pour les former et les intégrer au cœur de nos Business Units spécialisées.
          </p>
        </div>
        <ul className="insertion-points">
          <li>
            <strong>Impact Social :</strong> Transformer l'engagement en compétence métier.
          </li>
          <li>
            <strong>Synergie Groupe :</strong> Un accès privilégié à nos filières d'experts (Espaces Verts, TP, Event…).
          </li>
        </ul>
        <div className="insertion-ctas">
          <a href="#contact-rapide" className="btn btn-primary" onClick={handleScrollTo("#contact-rapide")}>
            Découvrir Passerelle
          </a>
          <a
            href="https://passerelle-insertion.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            title="passerelle-insertion.fr"
          >
            Visiter le site Passerelle →
          </a>
        </div>
      </div>
    </section>
  );
}

export default InsertionSection;
