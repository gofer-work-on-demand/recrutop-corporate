import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "parcours", className: "illustrated-steps", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "illustrated-steps-header", children: _jsx("h2", { children: "Comment \u00E7a se passe concr\u00E8tement ?" }) }), _jsxs("div", { className: "steps-dual-columns", children: [_jsxs("div", { className: "steps-column", children: [_jsx("h3", { children: "Vous \u00EAtes candidat ?" }), _jsx("ul", { className: "steps-list", children: candidateSteps.map((step, index) => (_jsxs("li", { className: "step-item", children: [_jsx("div", { className: "step-number", children: index + 1 }), _jsx("div", { className: "step-content", children: _jsx("p", { children: step }) })] }, index))) })] }), _jsxs("div", { className: "steps-column", children: [_jsx("h3", { children: "Vous \u00EAtes client ?" }), _jsx("ul", { className: "steps-list", children: clientSteps.map((step, index) => (_jsxs("li", { className: "step-item", children: [_jsx("div", { className: "step-number", children: index + 1 }), _jsx("div", { className: "step-content", children: _jsx("p", { children: step }) })] }, index))) })] })] })] }) }));
}
export default IllustratedStepsForCandidatesAndClients;
