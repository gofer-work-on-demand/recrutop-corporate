import type { MarqueData } from "@/data/marques";

export function EnjeuxSection({ marque }: { marque: MarqueData }) {
  if (!marque.enjeux.length) return null;
  return (
    <section className="border-b border-black/5 py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Enjeux du secteur</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {marque.enjeux.map((e) => (
            <li
              key={e.titre}
              className="rounded-card border-l-4 border-black/10 bg-white p-5 shadow-card"
              style={{ borderLeftColor: marque.couleur }}
            >
              <h3 className="font-heading font-semibold text-dark">{e.titre}</h3>
              <p className="mt-2 text-sm text-text">{e.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
