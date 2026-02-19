export function CandidatsSection() {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#filières");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const points = [
    "Missions adaptées à votre profil",
    "Accompagnement et montée en compétences",
    "Opportunités dans des filières ciblées",
  ];

  return (
    <section id="candidats" className="candidats-section audience-block">
      <div className="audience-block-inner">
        <div className="candidats-content">
            <h2>Candidats & intérimaires : des missions cohérentes avec votre métier</h2>
            <p>
              Vous êtes accompagné par des consultants spécialisés sur votre univers : compréhension des conditions terrain, des attentes et des parcours.
            </p>
            <ul className="candidats-points">
              {points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="candidats-ctas">
              <a href="#filières" className="btn btn-primary" onClick={handleCta}>
                Trouver ma filière
              </a>
              <a
                href="https://recrutement.recrutop.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Déposer mon CV
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}

export default CandidatsSection;
