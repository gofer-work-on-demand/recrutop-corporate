const benefits = [
  {
    title: "Pertinence",
    text: "Profils adaptés aux réalités du terrain.",
    icon: "✓",
  },
  {
    title: "Réactivité",
    text: "Équipes dédiées, process fluides.",
    icon: "⚡",
  },
  {
    title: "Exigence",
    text: "Sécurité, savoir-faire, savoir-être.",
    icon: "★",
  },
];

export function NotreModele() {
  return (
    <section id="notre-modele" className="notre-modele">
      <div className="container">
        <div className="notre-modele-header">
          <h2>Notre modèle : la spécialisation métier, au service de la qualité</h2>
          <p>
            Nous avons fait un choix structurant : organiser Recrutop par filières métiers spécialisées.
            Chaque filière développe une connaissance fine de ses métiers, de ses contraintes opérationnelles et de ses exigences terrain.
          </p>
        </div>
        <div className="notre-modele-benefits">
          {benefits.map((b) => (
            <div key={b.title} className="notre-modele-card">
              <span className="notre-modele-icon" aria-hidden="true">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NotreModele;
