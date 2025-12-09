import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "valeurs", className: "values-section", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "values-header", children: [_jsx("h2", { children: "Nos valeurs" }), _jsx("p", { children: "Une culture commune \u00E0 toutes nos marques." })] }), _jsx("div", { className: "values-grid", children: values.map((value) => (_jsxs("div", { className: "value-card", children: [_jsx("div", { className: "value-icon", children: value.icon }), _jsx("h3", { children: value.title }), _jsx("p", { children: value.text })] }, value.title))) })] }) }));
}
export default ValuesSection;
