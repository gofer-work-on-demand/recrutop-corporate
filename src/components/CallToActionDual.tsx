import { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

const specialites = [
  "Construction & Patrimoine",
  "Hôtellerie, Restauration & Événementiel",
  "Technique, Maintenance & Opérations",
  "Insertion",
  "Espaces verts",
  "CDI / CDD",
];

export function CallToActionDual() {
  const [formSent, setFormSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      subject: data.specialite || 'Demande de contact',
      from_name: data.nom as string,
      from_email: data.email as string,
      telephone: data.telephone as string,
      societe: (data.societe as string) || 'Non renseignée',
      type: data.type as string,
      domaine: data.specialite as string,
      message: data.message as string,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setFormSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setFormSent(false);
        setShowForm(false);
      }, 3000);
    } catch (err) {
      console.error('Erreur lors de l\'envoi de l\'email:', err);
      setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
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
          <p>Un besoin en intérim, en CDI / CDD, en insertion ou en espaces verts ?</p>
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
                Domaine choisi :
                <select name="specialite" required defaultValue="">
                  <option value="" disabled>
                    Sélectionner le domaine qui vous intéresse
                  </option>
                  {specialites.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" required placeholder="Décrivez votre besoin ou votre demande..."></textarea>
              </label>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
              {formSent && (
                <div className="form-success" role="status">
                  Votre demande a bien été envoyée. Vous serez recontacté rapidement.
                </div>
              )}
              {error && (
                <div className="form-error" role="alert" style={{ color: 'red', marginTop: '1rem' }}>
                  {error}
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

