import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const links = [
    { label: "Accueil", anchor: "#hero" },
    { label: "Secteurs", anchor: "#secteurs" },
    { label: "Marques", anchor: "#marques" },
    { label: "Notre approche", anchor: "#approche" },
    { label: "Valeurs", anchor: "#valeurs" },
    { label: "Contact", anchor: "#contact" },
];
export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [logoError, setLogoError] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map((link) => link.anchor.substring(1));
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        const element = document.querySelector(anchor);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };
    return (_jsx("header", { id: "header", children: _jsxs("div", { className: "container", children: [_jsxs("nav", { "aria-label": "Navigation principale", children: [_jsx("div", { className: "logo", children: !logoError ? (_jsx("img", { src: "/assets/recrutop-logo.png", alt: "Recrutop", onError: () => setLogoError(true) })) : (_jsx("span", { children: "recrutop" })) }), _jsxs("div", { className: "nav-links", children: [links.map((link) => (_jsx("a", { href: link.anchor, className: `nav-link ${activeSection === link.anchor ? "active" : ""}`, onClick: (e) => handleNavClick(e, link.anchor), children: link.label }, link.anchor))), _jsx("a", { href: "https://recrutement.recrutop.fr/", target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary", children: "Acc\u00E9der au site carri\u00E8re" })] }), _jsxs("button", { className: "burger", "aria-label": menuOpen ? "Fermer le menu" : "Ouvrir le menu", "aria-expanded": menuOpen, onClick: () => setMenuOpen(!menuOpen), type: "button", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] }), menuOpen && (_jsxs("div", { className: "mobile-menu open", children: [links.map((link) => (_jsx("a", { href: link.anchor, className: "nav-link", onClick: (e) => handleNavClick(e, link.anchor), children: link.label }, link.anchor))), _jsx("a", { href: "https://recrutement.recrutop.fr/", target: "_blank", rel: "noopener noreferrer", className: "btn btn-primary", onClick: () => setMenuOpen(false), children: "Acc\u00E9der au site carri\u00E8re" })] }))] }) }));
}
export default Header;
