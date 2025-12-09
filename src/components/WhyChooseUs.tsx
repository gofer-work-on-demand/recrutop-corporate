const benefits = [
  {
    title: "Spécialisation métiers",
    text: "Nos équipes sont organisées par pôles et connaissent vos environnements : chantiers, hôtels, sites techniques, espaces verts.",
  },
  {
    title: "Réactivité & proximité",
    text: "Des process simples, des circuits courts et une vraie capacité à répondre vite, y compris sur des besoins urgents.",
  },
  {
    title: "Suivi dans la durée",
    text: "Au-delà des premières missions, nous accompagnons les parcours, stabilisons les équipes et sécurisons vos recrutements.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="approche" className="why-choose-us">
      <div className="container">
        <div className="why-choose-us-grid">
          <div className="why-choose-us-content">
            <span className="badge">Pourquoi travailler avec nous ?</span>
            <h2>Une organisation pensée pour les candidats et les clients</h2>
            <p>
              Recrutop met l'accent sur la spécialisation métiers, la proximité terrain et la qualité du
              suivi. Candidats comme entreprises ont un interlocuteur dédié, par secteur.
            </p>
          </div>
          <div className="why-choose-us-cards">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="why-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

