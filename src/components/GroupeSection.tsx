const points = [
  {
    title: "Une vision claire",
    text: "Construire un groupe de recrutement et d'interim ultra-specialise, performant, moderne et entierement tourne vers l'excellence client et interimaire.",
  },
  {
    title: "Une organisation structuree",
    text: "Direction generale, operations, finance / RH et SDR travaillent avec des process, des KPIs et des circuits de pilotage clairs pour soutenir la qualite d'execution.",
  },
  {
    title: "Des outils modernes",
    text: "ATS, CRM, automatisation et IA viennent renforcer le matching, la qualification et la reactivite, sans diluer l'expertise humaine des equipes.",
  },
];

export function GroupeSection() {
  return (
    <section id="groupe-recrutop" className="groupe-section">
      <div className="container">
        <div className="groupe-section-shell">
          <div className="groupe-section-intro">
            <p className="groupe-section-kicker">Groupe Recrutop</p>
            <h2>Un groupe expert, structure pour durer et monter en gamme</h2>
            <p className="groupe-section-text">
              Recrutop se developpe comme un groupe organise par Business Units metier, avec une meme exigence de qualite, de securite, de reactivite et de fiabilite operationnelle. Notre ambition est claire : accelerer avec des expertises fortes, des process solides et des outils modernes au service de la relation.
            </p>
          </div>
          <div className="groupe-section-points">
            {points.map((point) => (
              <article key={point.title} className="groupe-point-card">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupeSection;
