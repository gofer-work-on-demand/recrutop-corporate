const benefits = [
  {
    title: "Pertinence",
    text: "Des recrutements plus justes, parce que l'évaluation part du métier réel.",
    icon: "✓",
  },
  {
    title: "Réactivité",
    text: "Des équipes capables d'identifier plus vite les bons profils et les vrais prérequis.",
    icon: "⚡",
  },
  {
    title: "Exigence",
    text: "Une sélection fondée sur les compétences, les habilitations et l'adéquation au terrain.",
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
            Recrutop a fait un choix structurant : organiser l'entreprise par filières métiers spécialisées.
            Chaque équipe développe une connaissance concrète des métiers, des contraintes opérationnelles, des exigences terrain et des besoins clients propres à son secteur.
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
