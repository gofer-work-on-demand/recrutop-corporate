import { brands } from "../data/brands";

const brandGroups = [
  {
    label: "Construction & Patrimoine",
    brandNames: ["Recrutop BTP / Grands Travaux", "Art & Intérim"],
    color: "var(--accent-orange)",
  },
  {
    label: "Hôtellerie, Restauration & Événementiel",
    brandNames: ["Gofer", "Recrutop Rambouillet Restauration", "Recrutop Event"],
    color: "var(--accent-coral)",
  },
  {
    label: "Technique, Maintenance & Opérations",
    brandNames: ["Recrutop Mecatech"],
    color: "var(--primary-blue)",
  },
  {
    label: "Insertion, Espaces verts & Carrière",
    brandNames: ["Passerelle", "Garden", "Recrutop Carrière"],
    color: "var(--accent-green)",
  },
];

export function BrandsGrid() {
  return (
    <section id="marques" className="brands-section">
      <div className="container">
        <div className="brands-header">
          <h2>Nos marques spécialisées</h2>
          <p>
            Chaque domaine s'appuie sur des marques expertes : vous travaillez avec des équipes qui
            connaissent vos métiers, tout en bénéficiant de la force d'un groupe.
          </p>
        </div>
        <div className="brand-groups">
          {brandGroups.map((group) => {
            const groupBrands = brands.filter((brand) => group.brandNames.includes(brand.name));

            return (
              <div key={group.label} className="brand-group">
                <h3
                  className="brand-group-title"
                  style={{ "--group-color": group.color } as React.CSSProperties}
                >
                  {group.label}
                </h3>
                <div className="brands-grid">
                  {groupBrands.map((brand) => (
                    <div key={brand.name} className="brand-logo-card">
                      <img src={brand.logoSrc} alt={brand.logoAlt} />
                      <span>{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandsGrid;

