const values = [
  {
    title: "Respect & transparence",
    text: "Clarifier les règles, tenir nos engagements, construire des relations durables avec les candidats et les clients.",
    icon: "🤝",
  },
  {
    title: "Exigence terrain",
    text: "Comprendre les contraintes réelles de vos métiers, adapter les profils et ne pas promettre l'impossible.",
    icon: "⚡",
  },
  {
    title: "Insertion & responsabilité",
    text: "Faire de l'emploi un levier d'inclusion, grâce à nos dispositifs d'insertion et nos partenaires locaux.",
    icon: "🌱",
  },
  {
    title: "Simplicité & efficacité",
    text: "Des parcours digitaux quand c'est utile, des échanges humains quand c'est nécessaire.",
    icon: "✨",
  },
];

export function ValuesSection() {
  return (
    <section id="valeurs" className="values-section">
      <div className="container">
        <div className="values-header">
          <h2>Nos valeurs</h2>
          <p>Une culture commune à toutes nos marques.</p>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.title} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;

