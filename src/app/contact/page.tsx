"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fieldClass =
    "mt-1 w-full rounded-card-sm border border-black/15 bg-bg-light px-3 py-2 text-text font-body";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      subject: "Demande de contact",
      from_name: data.name as string,
      from_email: data.email as string,
      telephone: (data.telephone as string) || "Non renseigné",
      societe: (data.societe as string) || "Non renseignée",
      type: data.type as string,
      domaine: data.type as string,
      message: data.message as string,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Erreur envoi email:", err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez reessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-b border-black/5 bg-bg-light">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Contact</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-dark sm:text-5xl">
          Contactez-nous
        </h1>
        <p className="mt-6 max-w-2xl text-text">
          Indiquez si vous êtes une entreprise ou un candidat : nous vous orienterons vers{" "}
          <strong className="text-dark">le bon domaine / la bonne marque</strong> et le bon expert.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <form
            className="space-y-4 rounded-card border border-black/5 bg-white p-6 shadow-card"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-primary font-heading">
                Nom / Société
              </label>
              <input id="name" name="name" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="societe" className="text-sm font-semibold text-primary font-heading">
                Société (optionnel)
              </label>
              <input id="societe" name="societe" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-primary font-heading">
                Email
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="telephone" className="text-sm font-semibold text-primary font-heading">
                Téléphone
              </label>
              <input id="telephone" name="telephone" type="tel" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="type" className="text-sm font-semibold text-primary font-heading">
                Vous êtes
              </label>
              <select id="type" name="type" className={fieldClass}>
                <option value="entreprise">Entreprise</option>
                <option value="candidat">Candidat</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-primary font-heading">
                Message
              </label>
              <textarea id="message" name="message" rows={4} required className={fieldClass} />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-heading"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
            {sent ? (
              <p className="text-sm text-text/85" role="status">
                Votre demande a bien ete envoyee. Vous serez recontacte rapidement.
              </p>
            ) : null}
            {error ? (
              <p className="text-sm text-red-700" role="alert">
                {error}
              </p>
            ) : null}
          </form>

          <div>
            <p className="font-heading text-xl font-semibold text-dark">Coordonnées</p>
            <p className="mt-4 text-text">
              Email :{" "}
              <a href="mailto:contact@recrutop.fr" className="font-semibold text-primary hover:underline">
                contact@recrutop.fr
              </a>
            </p>
            <p className="mt-6 text-sm text-text/85">
              Pour une orientation immédiate par domaine et marques :{" "}
              <Link href="/#domaines" className="font-semibold text-primary hover:underline">
                Nos domaines →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
