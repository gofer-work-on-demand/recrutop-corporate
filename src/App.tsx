import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotreModele from "./components/NotreModele";
import BusGrid from "./components/BusGrid";
import InsertionSection from "./components/InsertionSection";
import EntreprisesSection from "./components/EntreprisesSection";
import CandidatsSection from "./components/CandidatsSection";
import PourquoiRecrutop from "./components/PourquoiRecrutop";
import ContactRapide from "./components/ContactRapide";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import PolitiqueConfidentialite from "./components/PolitiqueConfidentialite";
import Accessibilite from "./components/Accessibilite";

function App() {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const handleLegalLink = (page: string) => {
    setCurrentPage(page);
  };

  const handleCloseLegal = () => {
    setCurrentPage(null);
  };

  useEffect(() => {
    if (currentPage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentPage]);

  const renderLegalModal = () => {
    if (!currentPage) return null;

    let content;

    if (currentPage === "mentions-legales") {
      content = <MentionsLegales />;
    } else if (currentPage === "politique-confidentialite") {
      content = <PolitiqueConfidentialite />;
    } else if (currentPage === "accessibilite") {
      content = <Accessibilite />;
    } else {
      return null;
    }

    return (
      <div className="legal-modal-overlay" onClick={handleCloseLegal}>
        <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
          <button
            className="legal-modal-close"
            onClick={handleCloseLegal}
            aria-label="Fermer"
          >
            ×
          </button>
          <div className="legal-modal-content">
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <NotreModele />
        <BusGrid />
        <InsertionSection />
        <div className="audience-blocks container">
          <EntreprisesSection />
          <CandidatsSection />
        </div>
        <PourquoiRecrutop />
        <ContactRapide />
      </main>
      <Footer onLegalLink={handleLegalLink} />
      {renderLegalModal()}
    </>
  );
}

export default App;
