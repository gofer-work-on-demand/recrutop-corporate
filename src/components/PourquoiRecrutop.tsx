const piliers = [
  { title: "Spécialisation métier", text: "Filières dédiées, experts terrain.", icon: "◆" },
  { title: "Exigence qualité", text: "Process, suivi, sécurité.", icon: "◇" },
  { title: "Réactivité", text: "Organisation claire, circuits courts.", icon: "▸" },
  { title: "Engagement", text: "Insertion transversale via Passerelle.", icon: "♥" },
];

export function PourquoiRecrutop() {
  return (
    <section id="pourquoi-recrutop" className="pourquoi-recrutop">
      <div className="container">
        <div className="pourquoi-recrutop-header">
          <h2>Pourquoi Recrutop ?</h2>
          <p className="pourquoi-recrutop-intro">Quatre piliers au service de votre recrutement.</p>
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
