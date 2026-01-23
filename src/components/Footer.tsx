import React from "react";

interface FooterProps {
  onLegalLink?: (page: string) => void;
}

export function Footer({ onLegalLink }: FooterProps) {
  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (onLegalLink) {
      onLegalLink(page);
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-company">Recrutop – Intérim, recrutement & insertion par pôles métiers</div>
            <div className="footer-info">
              <div>141 avenue de Clichy, 75017 Paris</div>
              <div>
                <a href="tel:0140242040">01 40 24 20 40</a>
              </div>
              <div>
                <a href="mailto:contact@recrutop.fr">contact@recrutop.fr</a>
              </div>
            </div>
          </div>
          <div>
            <nav className="footer-links" aria-label="Liens du pied de page">
              <a href="#" onClick={(e) => handleLegalClick(e, "mentions-legales")}>
                Mentions légales
              </a>
              <a href="#" onClick={(e) => handleLegalClick(e, "politique-confidentialite")}>
                Politique de confidentialité
              </a>
              <a href="#" onClick={(e) => handleLegalClick(e, "accessibilite")}>
                Accessibilité
              </a>
              <a href="https://recrutement.recrutop.fr/" target="_blank" rel="noopener noreferrer">
                Site carrière
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
