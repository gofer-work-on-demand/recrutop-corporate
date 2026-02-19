import React from "react";

interface FooterProps {
  onLegalLink?: (page: string) => void;
}

export function Footer({ onLegalLink }: FooterProps) {
  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (onLegalLink) onLegalLink(page);
  };

  const scrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <div className="footer-company">Recrutop – Intérim & recrutement par filières métiers</div>
            <div className="footer-info">
              <div>141 avenue de Clichy, 75017 Paris</div>
              <div>
                <a href="tel:0140242040">01 40 24 20 40</a>
              </div>
              <div>
                <a href="mailto:contact@recrutop.fr">contact@recrutop.fr</a>
              </div>
            </div>
            <div className="footer-social">
              <h4 className="footer-title">Réseaux sociaux</h4>
              <div className="footer-social-links">
                <a href="https://www.linkedin.com/company/recrutop" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Recrutop">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-col footer-links-block">
            <h4 className="footer-title">Nos filières métiers</h4>
            <a href="#filières" onClick={scrollTo("#filières")}>Toutes les filières</a>
          </div>
          <div className="footer-col footer-links-block">
            <h4 className="footer-title">Passerelle (Insertion)</h4>
            <a href="#insertion" onClick={scrollTo("#insertion")}>Découvrir Passerelle</a>
            <a href="https://passerelle-insertion.fr" target="_blank" rel="noopener noreferrer">Site Passerelle</a>
          </div>
          <div className="footer-col footer-legal">
            <h4 className="footer-title">Informations</h4>
            <a href="#" onClick={(e) => handleLegalClick(e, "mentions-legales")}>
              Mentions légales / RGPD
            </a>
            <a href="https://recrutement.recrutop.fr/" target="_blank" rel="noopener noreferrer">
              Recrutement
            </a>
            <a href="#" onClick={(e) => handleLegalClick(e, "politique-confidentialite")}>
              Politique de confidentialité
            </a>
            <a href="#" onClick={(e) => handleLegalClick(e, "accessibilite")}>
              Accessibilité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
