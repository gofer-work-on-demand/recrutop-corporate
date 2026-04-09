import { withBasePath } from "@/config/site";

export function InsertionSection() {
  const handleScrollTo = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="insertion" className="insertion-section">
      <div className="container">
        <div className="insertion-header">
          <img
            src={withBasePath("/assets/passerelle-logo.png")}
            alt=""
            className="insertion-logo"
            aria-hidden="true"
          />
          <h2>Passerelle : le trait d'union vers l'emploi durable</h2>
          <blockquote className="insertion-quote">
            « L'insertion n'est pas une filière : c'est un engagement transversal. »
          </blockquote>
          <p>
            Passerelle porte notre démarche d'insertion et d'accompagnement social et professionnel. Elle facilite l'accès à l'emploi, la montée en compétences et l'orientation vers les filières métiers du groupe.
          </p>
        </div>
        <ul className="insertion-points">
          <li>
            <strong>Accompagnement structuré :</strong> un suivi social et professionnel orienté vers l'emploi durable.
          </li>
          <li>
            <strong>Connexion terrain :</strong> une passerelle concrète vers les filières métiers, les premières missions et la montée en compétences.
          </li>
        </ul>
        <div className="insertion-ctas">
          <a href="#contact-rapide" className="btn btn-primary" onClick={handleScrollTo("#contact-rapide")}>
            Découvrir Passerelle
          </a>
          <a
            href="https://passerelle-insertion.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            title="passerelle-insertion.fr"
          >
            Visiter le site Passerelle →
          </a>
        </div>
      </div>
    </section>
  );
}

export default InsertionSection;
