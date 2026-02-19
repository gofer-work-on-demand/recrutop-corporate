import { useState, useEffect } from "react";

const links = [
  { label: "Nos filières métiers", anchor: "#filières" },
  { label: "Entreprises", anchor: "#entreprises" },
  { label: "Candidats / Intérimaires", anchor: "#candidats" },
  { label: "Passerelle (Insertion)", anchor: "#insertion" },
  { label: "Qui sommes-nous", anchor: "#pourquoi-recrutop" },
  { label: "Contact", anchor: "#contact-rapide" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.anchor.substring(1));
      const scrollPosition = window.scrollY + 120;

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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("header-menu-open-active");
    } else {
      document.body.classList.remove("header-menu-open-active");
    }
    return () => document.body.classList.remove("header-menu-open-active");
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#filières");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header id="header" className={menuOpen ? "header-menu-open" : ""}>
      <div className="header-inner container">
        <nav aria-label="Navigation principale">
          <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, "#hero")}>
            {!logoError ? (
              <img
                src="/assets/recrutop-logo.png"
                alt="Recrutop"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span>Recrutop</span>
            )}
          </a>
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
              href="#filières"
              className="btn btn-primary header-cta"
              onClick={handleCtaClick}
            >
              Trouver ma filière
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
      </div>
      {menuOpen && (
        <div className="mobile-menu open" role="dialog" aria-label="Menu de navigation">
          <div className="mobile-menu-inner container">
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
              href="#filières"
              className="btn btn-primary mobile-menu-cta"
              onClick={handleCtaClick}
            >
              Trouver ma filière
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
