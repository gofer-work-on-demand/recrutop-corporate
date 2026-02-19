import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.config";

const SITE_CARRIERE_URL = "https://recrutement.recrutop.fr/";

const specialites = [
  "Travaux Publics & Génie Civil",
  "Métiers d'Art & Monuments Historiques",
  "Espaces Verts",
  "Hôtellerie & Restauration",
  "RECRUTOP Event",
  "Mecatech",
  "Recrutop Carrière (CDI/CDD)",
  "Passerelle (Insertion)",
];

type Profil = "entreprise" | "candidat";

export function ContactRapide() {
  const [selectedProfil, setSelectedProfil] = useState<Profil | null>(null);
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
      subject: data.specialite || "Demande de contact",
      from_name: data.nom as string,
      from_email: data.email as string,
      telephone: data.telephone as string,
      societe: (data.societe as string) || "Non renseignée",
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
      console.error("Erreur envoi email:", err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
      const typeSelect = document.querySelector<HTMLSelectElement>("select[name='type']");
      if (typeSelect && selectedProfil) {
        typeSelect.value = selectedProfil === "entreprise" ? "client" : "candidat";
      }
    }, 100);
  };

  const handleEntrepriseClick = () => {
    setSelectedProfil("entreprise");
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
      const typeSelect = document.querySelector<HTMLSelectElement>("select[name='type']");
      if (typeSelect) typeSelect.value = "client";
    }, 100);
  };

  const handleCandidatClick = () => {
    setSelectedProfil("candidat");
    window.open(SITE_CARRIERE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact-rapide" className="contact-rapide">
      <div className="container">
        <div className="contact-rapide-block">
          <div className="contact-rapide-header">
            <h2>Vous cherchez le bon point d'entrée ?</h2>
            <p className="contact-rapide-intro">Choisissez votre profil pour être orienté au plus vite.</p>
          </div>
          <div className="contact-rapide-choix" role="group" aria-label="Choisir votre profil">
            <button
              type="button"
              className={`contact-choix-card contact-choix-entreprise ${selectedProfil === "entreprise" ? "is-selected" : ""}`}
              onClick={handleEntrepriseClick}
              aria-pressed={selectedProfil === "entreprise"}
            >
              <span className="contact-choix-accent" aria-hidden="true" />
              <span className="contact-choix-label">Entreprise</span>
              <span className="contact-choix-desc">Être orienté vers la bonne filière</span>
              <span className="contact-choix-check">{selectedProfil === "entreprise" ? "✓" : ""}</span>
            </button>
            <button
              type="button"
              className={`contact-choix-card contact-choix-candidat ${selectedProfil === "candidat" ? "is-selected" : ""}`}
              onClick={handleCandidatClick}
              aria-pressed={selectedProfil === "candidat"}
            >
              <span className="contact-choix-accent" aria-hidden="true" />
              <span className="contact-choix-label">Candidat</span>
              <span className="contact-choix-desc">Trouver des missions dans mon métier</span>
              <span className="contact-choix-check">{selectedProfil === "candidat" ? "✓" : ""}</span>
            </button>
          </div>
          <div className="contact-rapide-buttons">
            <a href="tel:0140242040" className="btn btn-secondary">
              Contact
            </a>
            <a href="#contact-form" className="btn btn-primary" onClick={scrollToForm}>
              Être rappelé
            </a>
          </div>
        </div>
        {showForm && (
          <div id="contact-form" className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleFormSubmit} aria-label="Formulaire de contact">
              <label>
                Nom et prénom
                <input name="nom" type="text" required />
              </label>
              <label>
                Société (optionnel)
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
                  <option value="" disabled>Sélectionner</option>
                  <option value="candidat">Candidat</option>
                  <option value="client">Client / Entreprise</option>
                </select>
              </label>
              <label>
                Filière concernée :
                <select name="specialite" required defaultValue="">
                  <option value="" disabled>Sélectionner</option>
                  {specialites.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" required placeholder="Décrivez votre besoin..."></textarea>
              </label>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
              {formSent && (
                <div className="form-success" role="status">
                  Votre demande a bien été envoyée. Vous serez recontacté rapidement.
                </div>
              )}
              {error && (
                <div className="form-error" role="alert">
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

export default ContactRapide;
