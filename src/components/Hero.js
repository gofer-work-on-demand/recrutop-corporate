import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Hero() {
    const handleScrollTo = (anchor) => (e) => {
        e.preventDefault();
        const element = document.querySelector(anchor);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsx("section", { id: "hero", className: "hero", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "hero-grid", children: [_jsxs("div", { className: "hero-content", children: [_jsx("span", { className: "badge", children: "Ultra sp\u00E9cialis\u00E9 \u2013 5 secteurs cl\u00E9s" }), _jsx("h1", { children: "Recrutop, groupe d'int\u00E9rim, de recrutement et d'insertion" }), _jsx("p", { children: "Recrutop accompagne les entreprises et les candidats dans 5 univers : construction & patrimoine, h\u00F4tellerie\u2013restauration & \u00E9v\u00E9nementiel, technique & maintenance, insertion & espaces verts, CDI / CDD avec Recrutop Carri\u00E8re. Un groupe, des p\u00F4les sp\u00E9cialis\u00E9s, une m\u00EAme exigence de qualit\u00E9." }), _jsx("p", { children: "Identifiez en quelques secondes vos secteurs, les marques du groupe et le bon point d'entr\u00E9e selon que vous \u00EAtes candidat ou client." }), _jsxs("div", { className: "hero-actions", children: [_jsx("a", { href: "#secteurs", className: "btn btn-primary", onClick: handleScrollTo("#secteurs"), children: "D\u00E9couvrir nos secteurs" }), _jsx("a", { href: "https://recrutement.recrutop.fr/", target: "_blank", rel: "noopener noreferrer", className: "btn btn-secondary", children: "Voir les offres d'emploi" })] })] }), _jsx("div", { className: "hero-visual", "aria-hidden": "true", children: _jsx("img", { src: "/assets/hero.png", alt: "\u00C9quipe Recrutop" }) })] }) }) }));
}
export default Hero;
