import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const benefits = [
    {
        title: "Spécialisation métiers",
        text: "Nos équipes sont organisées par pôles et connaissent vos environnements : chantiers, hôtels, sites techniques, espaces verts.",
    },
    {
        title: "Réactivité & proximité",
        text: "Des process simples, des circuits courts et une vraie capacité à répondre vite, y compris sur des besoins urgents.",
    },
    {
        title: "Suivi dans la durée",
        text: "Au-delà des premières missions, nous accompagnons les parcours, stabilisons les équipes et sécurisons vos recrutements.",
    },
];
export function WhyChooseUs() {
    return (_jsx("section", { id: "approche", className: "why-choose-us", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "why-choose-us-grid", children: [_jsxs("div", { className: "why-choose-us-content", children: [_jsx("span", { className: "badge", children: "Pourquoi travailler avec nous ?" }), _jsx("h2", { children: "Une organisation pens\u00E9e pour les candidats et les clients" }), _jsx("p", { children: "Recrutop met l'accent sur la sp\u00E9cialisation m\u00E9tiers, la proximit\u00E9 terrain et la qualit\u00E9 du suivi. Candidats comme entreprises ont un interlocuteur d\u00E9di\u00E9, par secteur." })] }), _jsx("div", { className: "why-choose-us-cards", children: benefits.map((benefit) => (_jsxs("div", { className: "why-card", children: [_jsx("h3", { children: benefit.title }), _jsx("p", { children: benefit.text })] }, benefit.title))) })] }) }) }));
}
export default WhyChooseUs;
