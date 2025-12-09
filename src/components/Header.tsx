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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header id="header">
      <div className="container">
        <nav aria-label="Navigation principale">
          <div className="logo">
            {!logoError ? (
              <img
                src="/assets/recrutop-logo.png"
                alt="Recrutop"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span>recrutop</span>
            )}
          </div>
          <div className="nav-links">
            {links.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                className={`nav-link ${activeSection === link.anchor ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.anchor)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://recrutement.recrutop.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Accéder au site carrière
            </a>
          </div>
          <button
            className="burger"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-menu open">
            {links.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.anchor)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://recrutement.recrutop.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Accéder au site carrière
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
