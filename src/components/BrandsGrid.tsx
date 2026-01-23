import { useState } from "react";
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
    label: "Insertion & Espaces verts",
    brandNames: ["Passerelle", "Garden"],
    color: "var(--accent-green)",
  },
  {
    label: "CDI / CDD",
    brandNames: ["Recrutop Carrière"],
    color: "var(--primary-blue)",
  },
];

export function BrandsGrid() {
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);

  const handleBrandClick = (brandName: string) => {
    const brand = brands.find((b) => b.name === brandName);
    if (brand) {
      setSelectedBrand(brand);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setSelectedBrand(null);
    document.body.style.overflow = "";
  };

  return (
    <>
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
                      <div
                        key={brand.name}
                        className="brand-logo-card"
                        onClick={() => handleBrandClick(brand.name)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleBrandClick(brand.name);
                          }
                        }}
                      >
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

      {selectedBrand && (
        <div className="brand-modal-overlay" onClick={handleCloseModal}>
          <div className="brand-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="brand-modal-close"
              onClick={handleCloseModal}
              aria-label="Fermer"
            >
              ×
            </button>
            <div className="brand-modal-content">
              <div className="brand-modal-header">
                <img src={selectedBrand.logoSrc} alt={selectedBrand.logoAlt} className="brand-modal-logo" />
                <h2>{selectedBrand.name}</h2>
              </div>
              <div className="brand-modal-body">
                {selectedBrand.mission && (
                  <div className="brand-modal-section">
                    <h3>Notre mission</h3>
                    <p>{selectedBrand.mission}</p>
                  </div>
                )}
                <div className="brand-modal-section">
                  <h3>Présentation</h3>
                  <div className="brand-description">
                    {selectedBrand.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                {selectedBrand.sectors && selectedBrand.sectors.length > 0 && (
                  <div className="brand-modal-section">
                    <h3>Nos secteurs d'intervention</h3>
                    <ul className="brand-modal-list">
                      {selectedBrand.sectors.map((sector, idx) => (
                        <li key={idx}>{sector}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedBrand.jobs && selectedBrand.jobs.length > 0 && (
                  <div className="brand-modal-section">
                    <h3>Nos métiers</h3>
                    <ul className="brand-modal-list">
                      {selectedBrand.jobs.map((job, idx) => (
                        <li key={idx}>{job}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedBrand.strengths && selectedBrand.strengths.length > 0 && (
                  <div className="brand-modal-section">
                    <h3>Nos points forts</h3>
                    <ul className="brand-modal-list">
                      {selectedBrand.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedBrand.approach && (
                  <div className="brand-modal-section">
                    <h3>Notre approche</h3>
                    <p>{selectedBrand.approach}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BrandsGrid;

