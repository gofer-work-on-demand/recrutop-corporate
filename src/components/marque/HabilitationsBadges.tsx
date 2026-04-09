import { BUBadge } from "@/components/ui/BUBadge";
import type { MarqueData } from "@/data/marques";

export function HabilitationsBadges({ marque }: { marque: MarqueData }) {
  if (!marque.habilitations.length) return null;
  return (
    <section className="border-b border-black/5 py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Sécurité & habilitations</h2>
        <p className="mt-2 max-w-2xl text-sm text-text">
          Selon missions et sites : habilitations vérifiées et cohérentes avec le poste.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {marque.habilitations.map((h) => (
            <li key={h}>
              <BUBadge marque={h} color={marque.couleur} outline />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
