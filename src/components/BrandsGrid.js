import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brands } from "../data/brands";
const brandGroups = [
    {
        label: "Construction & Patrimoine",
        brandNames: ["Recrutop BTP / Grands Travaux", "Art & Intérim"],
        color: "var(--accent-orange)",
    },
    {
        label: "Hôtellerie, Restauration & Événementiel",
        brandNames: ["Gofer", "Recrutop Rambouillet Restauration", "Recrutop Event"],
        color: "var(--accent-coral)",
    },
    {
        label: "Technique, Maintenance & Opérations",
        brandNames: ["Recrutop Mecatech"],
        color: "var(--primary-blue)",
    },
    {
        label: "Insertion, Espaces verts & Carrière",
        brandNames: ["Passerelle", "Garden", "Recrutop Carrière"],
        color: "var(--accent-green)",
    },
];
export function BrandsGrid() {
    return (_jsx("section", { id: "marques", className: "brands-section", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "brands-header", children: [_jsx("h2", { children: "Nos marques sp\u00E9cialis\u00E9es" }), _jsx("p", { children: "Chaque domaine s'appuie sur des marques expertes : vous travaillez avec des \u00E9quipes qui connaissent vos m\u00E9tiers, tout en b\u00E9n\u00E9ficiant de la force d'un groupe." })] }), _jsx("div", { className: "brand-groups", children: brandGroups.map((group) => {
                        const groupBrands = brands.filter((brand) => group.brandNames.includes(brand.name));
                        return (_jsxs("div", { className: "brand-group", children: [_jsx("h3", { className: "brand-group-title", style: { "--group-color": group.color }, children: group.label }), _jsx("div", { className: "brands-grid", children: groupBrands.map((brand) => (_jsxs("div", { className: "brand-logo-card", children: [_jsx("img", { src: brand.logoSrc, alt: brand.logoAlt }), _jsx("span", { children: brand.name })] }, brand.name))) })] }, group.label));
                    }) })] }) }));
}
export default BrandsGrid;
