import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeySectorsStrip from "./components/KeySectorsStrip";
import BrandsGrid from "./components/BrandsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import ValuesSection from "./components/ValuesSection";
import IllustratedStepsForCandidatesAndClients from "./components/IllustratedStepsForCandidatesAndClients";
import CallToActionDual from "./components/CallToActionDual";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import Accessibilite from "./components/Accessibilite";
function App() {
    const [currentPage, setCurrentPage] = useState(null);
    const handleLegalLink = (page) => {
        setCurrentPage(page);
    };
    const handleCloseLegal = () => {
        setCurrentPage(null);
    };
    useEffect(() => {
        if (currentPage) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [currentPage]);
    const renderLegalModal = () => {
        if (!currentPage)
            return null;
        let content;
        if (currentPage === "mentions-legales") {
            content = _jsx(MentionsLegales, {});
        }
        else if (currentPage === "politique-confidentialite") {
            content = _jsx(PolitiqueConfidentialite, {});
        }
        else if (currentPage === "accessibilite") {
            content = _jsx(Accessibilite, {});
        }
        else {
            return null;
        }
        return (_jsx("div", { className: "legal-modal-overlay", onClick: handleCloseLegal, children: _jsxs("div", { className: "legal-modal", onClick: (e) => e.stopPropagation(), children: [_jsx("button", { className: "legal-modal-close", onClick: handleCloseLegal, "aria-label": "Fermer", children: "\u00D7" }), _jsx("div", { className: "legal-modal-content", children: content })] }) }));
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(KeySectorsStrip, {}), _jsx(BrandsGrid, {}), _jsx(WhyChooseUs, {}), _jsx(ValuesSection, {}), _jsx(IllustratedStepsForCandidatesAndClients, {}), _jsx(CallToActionDual, {})] }), _jsx(Footer, { onLegalLink: handleLegalLink }), renderLegalModal()] }));
}
export default App;
