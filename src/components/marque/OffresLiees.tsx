import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";
import type { MarqueData } from "@/data/marques";

const placeholders = [
  "Mission terrain — profil expert",
  "Renfort planifié — équipe spécialisée",
  "CDI — profil confirmé",
];

export function OffresLiees({ marque }: { marque: MarqueData }) {
  return (
    <section className="border-b border-black/5 py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Offres liées</h2>
        <p className="mt-2 text-sm text-text">
          Accédez aux opportunités publiées sur notre site offres (Magnet).
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {placeholders.map((t) => (
            <li
              key={t}
              className="rounded-card border border-black/5 bg-white p-5 shadow-card"
            >
              <span
                className="inline-block rounded-pill px-2 py-0.5 text-[10px] font-bold text-white font-heading"
                style={{ backgroundColor: marque.couleur }}
              >
                {marque.nom}
              </span>
              <p className="mt-3 font-heading font-semibold text-dark">{t}</p>
              <p className="mt-2 text-xs text-text">Voir l&apos;offre sur le portail emploi.</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={CAREER_SITE_URL} external variant="bu" buColor={marque.couleur}>
            Toutes les offres {marque.nom} →
          </Button>
        </div>
      </div>
    </section>
  );
}
