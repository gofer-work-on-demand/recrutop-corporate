const candidateSteps = [
  "1. Vous découvrez nos offres sur le site carrière ou via nos marques spécialisées.",
  "2. Vous échangez avec un consultant qui connaît votre métier et votre secteur.",
  "3. Vous êtes accompagné pendant vos missions ou votre prise de poste en CDI / CDD.",
];

const clientSteps = [
  "1. Nous analysons vos besoins par domaine (BTP, CHR, technique, insertion…).",
  "2. Nous activons le ou les pôles les plus adaptés à votre contexte.",
  "3. Nous assurons le suivi des missions, des recrutements et des parcours d'insertion.",
];

export function IllustratedStepsForCandidatesAndClients() {
  return (
    <section id="parcours" className="illustrated-steps">
      <div className="container">
        <div className="illustrated-steps-header">
          <h2>Comment ça se passe concrètement ?</h2>
        </div>
        <div className="steps-dual-columns">
          <div className="steps-column">
            <h3>Vous êtes candidat ?</h3>
            <ul className="steps-list">
              {candidateSteps.map((step, index) => (
                <li key={index} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="steps-column">
            <h3>Vous êtes client ?</h3>
            <ul className="steps-list">
              {clientSteps.map((step, index) => (
                <li key={index} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IllustratedStepsForCandidatesAndClients;

