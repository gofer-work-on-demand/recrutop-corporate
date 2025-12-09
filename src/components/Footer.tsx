export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-company">Recrutop – Intérim, recrutement & insertion par pôles métiers</div>
            <div className="footer-info">
              <div>141 avenue de Clichy, 75017 Paris</div>
              <div>
                <a href="tel:0140095080">01 40 09 50 80</a>
              </div>
              <div>
                <a href="mailto:contact@recrutop.fr">contact@recrutop.fr</a>
              </div>
            </div>
          </div>
          <div>
            <nav className="footer-links" aria-label="Liens du pied de page">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Accessibilité</a>
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
