export function EntreprisesSection() {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact-rapide");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const preuves = [
    "Profils ciblés, alignés métier",
    "Exigence sécurité et conformité",
    "Réactivité, continuité de service",
    "Suivi opérationnel et qualité",
  ];

  return (
    <section id="entreprises" className="entreprises-section audience-block">
      <div className="audience-block-inner">
        <div className="entreprises-content">
            <h2>Entreprises : des experts métiers pour vos enjeux terrain</h2>
            <p>
              Vous gagnez en pertinence et en fiabilité : nos équipes connaissent vos contraintes avant même de proposer des profils.
            </p>
            <ul className="entreprises-preuves">
              {preuves.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact-rapide" className="btn btn-primary" onClick={handleCta}>
              Être rappelé par un expert filière
            </a>
          </div>
      </div>
    </section>
  );
}

export default EntreprisesSection;
