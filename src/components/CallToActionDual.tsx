import { FormEvent, useState } from "react";

export function CallToActionDual() {
  const [formSent, setFormSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowForm(false);
    }, 3000);
  };

  const handleClientCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowForm(true);
    const element = document.getElementById("contact-form");
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  return (
    <section id="contact" className="cta-dual">
      <div className="container">
        <div className="cta-dual-header">
          <h2>On en parle ?</h2>
          <p>Un besoin en intérim, en CDI / CDD ou en insertion ?</p>
        </div>
        <div className="cta-buttons">
          <a
            href="https://recrutement.recrutop.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Je suis candidat – voir les offres
          </a>
          <a href="#contact-form" className="btn btn-secondary" onClick={handleClientCTA}>
            Je suis client – être recontacté
          </a>
        </div>
        {showForm && (
          <div id="contact-form" className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleFormSubmit} aria-label="Formulaire de contact">
              <label>
                Nom et prénom
                <input name="nom" type="text" required />
              </label>
              <label>
                Société (optionnel pour candidats)
                <input name="societe" type="text" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" required />
              </label>
              <label>
                Téléphone
                <input name="telephone" type="tel" required />
              </label>
              <label>
                Je suis :
                <select name="type" required defaultValue="">
                  <option value="" disabled>
                    Sélectionner
                  </option>
                  <option value="candidat">Candidat</option>
                  <option value="client">Client</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary">
                Envoyer ma demande
              </button>
              {formSent && (
                <div className="form-success" role="status">
                  Votre demande a bien été enregistrée. Un interlocuteur Recrutop vous recontactera rapidement.
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default CallToActionDual;

