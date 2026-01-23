import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
    const [error, setError] = useState(null);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const templateParams = {
            to_email: EMAILJS_CONFIG.TO_EMAIL,
            subject: data.specialite || 'Demande de contact',
            from_name: data.nom,
            from_email: data.email,
            telephone: data.telephone,
            societe: data.societe || 'Non renseignée',
            type: data.type,
            domaine: data.specialite,
            message: data.message,
        };
        try {
            await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);
            setFormSent(true);
            e.target.reset();
            setTimeout(() => {
                setFormSent(false);
                setShowForm(false);
            }, 3000);
        }
        catch (err) {
            console.error('Erreur lors de l\'envoi de l\'email:', err);
            setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleClientCTA = (e) => {
        e.preventDefault();
        setShowForm(true);
        const element = document.getElementById("contact-form");
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        }
    };
    return (_jsx("section", { id: "contact", className: "cta-dual", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "cta-dual-header", children: [_jsx("h2", { children: "On en parle ?" }), _jsx("p", { children: "Un besoin en int\u00E9rim, en CDI / CDD, en insertion ou en espaces verts ?" })] }), _jsxs("div", { className: "cta-buttons", children: [_jsx("a", { href: "https://recrutement.recrutop.fr/", target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary", children: "Je suis candidat \u2013 voir les offres" }), _jsx("a", { href: "#contact-form", className: "btn btn-secondary", onClick: handleClientCTA, children: "Je suis client \u2013 \u00EAtre recontact\u00E9" })] }), showForm && (_jsx("div", { id: "contact-form", className: "contact-form-wrapper", children: _jsxs("form", { className: "contact-form", onSubmit: handleFormSubmit, "aria-label": "Formulaire de contact", children: [_jsxs("label", { children: ["Nom et pr\u00E9nom", _jsx("input", { name: "nom", type: "text", required: true })] }), _jsxs("label", { children: ["Soci\u00E9t\u00E9 (optionnel pour candidats)", _jsx("input", { name: "societe", type: "text" })] }), _jsxs("label", { children: ["E-mail", _jsx("input", { name: "email", type: "email", required: true })] }), _jsxs("label", { children: ["T\u00E9l\u00E9phone", _jsx("input", { name: "telephone", type: "tel", required: true })] }), _jsxs("label", { children: ["Je suis :", _jsxs("select", { name: "type", required: true, defaultValue: "", children: [_jsx("option", { value: "", disabled: true, children: "S\u00E9lectionner" }), _jsx("option", { value: "candidat", children: "Candidat" }), _jsx("option", { value: "client", children: "Client" })] })] }), _jsxs("label", { children: ["Domaine choisi :", _jsxs("select", { name: "specialite", required: true, defaultValue: "", children: [_jsx("option", { value: "", disabled: true, children: "S\u00E9lectionner le domaine qui vous int\u00E9resse" }), specialites.map((spec) => (_jsx("option", { value: spec, children: spec }, spec)))] })] }), _jsxs("label", { children: ["Message", _jsx("textarea", { name: "message", required: true, placeholder: "D\u00E9crivez votre besoin ou votre demande..." })] }), _jsx("button", { type: "submit", className: "btn btn-primary", disabled: isLoading, children: isLoading ? 'Envoi en cours...' : 'Envoyer ma demande' }), formSent && (_jsx("div", { className: "form-success", role: "status", children: "Votre demande a bien \u00E9t\u00E9 envoy\u00E9e. Vous serez recontact\u00E9 rapidement." })), error && (_jsx("div", { className: "form-error", role: "alert", style: { color: 'red', marginTop: '1rem' }, children: error }))] }) }))] }) }));
}
export default CallToActionDual;
