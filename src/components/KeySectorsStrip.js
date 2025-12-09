import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const sectors = [
    {
        title: "Construction & Patrimoine",
        text: "Intérim, insertion et recrutement pour le BTP, les grands travaux et la restauration du patrimoine, avec des équipes formées à la sécurité et aux environnements techniques complexes.",
        accentColor: "var(--accent-orange)",
        icon: "/assets/btp.png",
    },
    {
        title: "Hôtellerie, Restauration & Événementiel",
        text: "Renforts et recrutements pour les hôtels, restaurants, traiteurs et acteurs de l'événementiel, en cuisine, salle, réception et service banquet.",
        accentColor: "var(--accent-coral)",
        icon: "/assets/hotellerie.png",
    },
    {
        title: "Technique, Maintenance & Opérations",
        text: "Profils techniques pour la maintenance industrielle et tertiaire, le multi-technique, le CVC et la technique événementielle.",
        accentColor: "var(--primary-blue)",
        icon: "/assets/maintenance.png",
    },
    {
        title: "Insertion, Espaces verts & Parcours carrière",
        text: "Solutions d'insertion, équipes encadrées en espaces verts et accompagnement des recrutements durables avec Recrutop Carrière.",
        accentColor: "var(--accent-green)",
        icon: "/assets/espaces-verts.png",
    },
];
export function KeySectorsStrip() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    useEffect(() => {
        if (!isAutoPlaying)
            return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sectors.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);
    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };
    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
        setIsAutoPlaying(false);
    };
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % sectors.length);
        setIsAutoPlaying(false);
    };
    return (_jsx("section", { id: "secteurs", className: "key-sectors", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "key-sectors-header", children: [_jsx("h2", { children: "Nos 4 domaines d'intervention" }), _jsx("p", { children: "Pour rendre la lecture simple, le groupe Recrutop est structur\u00E9 en 4 grands domaines. Chaque domaine rassemble plusieurs marques sp\u00E9cialis\u00E9es." })] }), _jsxs("div", { className: "sectors-carousel", children: [_jsxs("div", { className: "carousel-container", children: [_jsx("button", { className: "carousel-button carousel-button-prev", onClick: goToPrevious, "aria-label": "Secteur pr\u00E9c\u00E9dent", children: "\u2039" }), _jsx("div", { className: "carousel-slides", children: sectors.map((sector, index) => (_jsx("div", { className: `carousel-slide ${index === currentIndex ? "active" : ""}`, style: { "--accent-color": sector.accentColor }, children: _jsxs("div", { className: "sector-card-carousel", children: [_jsx("div", { className: "sector-image-wrapper", children: _jsx("img", { src: sector.icon, alt: sector.title }) }), _jsxs("div", { className: "sector-content", children: [_jsx("h3", { children: sector.title }), _jsx("p", { children: sector.text })] })] }) }, sector.title))) }), _jsx("button", { className: "carousel-button carousel-button-next", onClick: goToNext, "aria-label": "Secteur suivant", children: "\u203A" })] }), _jsx("div", { className: "carousel-indicators", children: sectors.map((_, index) => (_jsx("button", { className: `carousel-indicator ${index === currentIndex ? "active" : ""}`, onClick: () => goToSlide(index), "aria-label": `Aller au secteur ${index + 1}`, style: {
                                    "--accent-color": sectors[index].accentColor,
                                } }, index))) })] })] }) }));
}
export default KeySectorsStrip;
