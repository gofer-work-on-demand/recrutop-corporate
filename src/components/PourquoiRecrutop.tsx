const piliers = [
  { title: "Spécialisation métier", text: "Des équipes structurées par filière, pas une approche uniforme de tous les secteurs.", icon: "◆" },
  { title: "Exigence qualité", text: "Sélection, vérifications, lecture du terrain et compréhension des attentes réelles.", icon: "◇" },
  { title: "Réactivité", text: "Des interlocuteurs capables d'activer vite les bons réseaux métiers.", icon: "▸" },
  { title: "Performance moderne", text: "Matching intelligent, outils ATS / CRM et organisation orientée qualité de service, sans déshumaniser la relation.", icon: "◌" },
];

export function PourquoiRecrutop() {
  return (
    <section id="pourquoi-recrutop" className="pourquoi-recrutop">
      <div className="container">
        <div className="pourquoi-recrutop-header">
          <h2>Pourquoi Recrutop ?</h2>
          <p className="pourquoi-recrutop-intro">Une organisation pensée par métiers, pas par discours génériques.</p>
        </div>
        <div className="pourquoi-recrutop-grid">
          {piliers.map((p) => (
            <article key={p.title} className="pourquoi-pilier">
              <span className="pourquoi-pilier-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PourquoiRecrutop;
