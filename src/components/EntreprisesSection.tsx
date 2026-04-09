export function EntreprisesSection() {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact-rapide");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const preuves = [
    "Profils ciblés et alignés métier",
    "Évaluation technique, sécurité et conformité",
    "Réactivité opérationnelle et continuité de service",
    "Suivi précis du besoin et de la qualité de mission",
  ];

  return (
    <section id="entreprises" className="entreprises-section audience-block">
      <div className="audience-block-inner">
        <div className="entreprises-content">
            <h2>Entreprises : des experts métiers pour vos enjeux terrain</h2>
            <p>
              Vous ne cherchez pas seulement un profil disponible. Vous cherchez un profil capable d'être opérationnel dans votre environnement réel, avec vos contraintes, vos standards et votre niveau d'exigence.
            </p>
            <ul className="entreprises-preuves">
              {preuves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact-rapide" className="btn btn-primary" onClick={handleCta}>
              Parler à un expert métier
            </a>
          </div>
      </div>
    </section>
  );
}

export default EntreprisesSection;
