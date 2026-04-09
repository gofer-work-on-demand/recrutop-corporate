import type { MarqueData } from "@/data/marques";

export function ChiffresSection({ marque }: { marque: MarqueData }) {
  if (!marque.chiffresCles.length) return null;
  return (
    <section className="border-b border-black/5 bg-bg-light py-12 lg:py-14">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-xl font-bold text-dark">Chiffres clés (références marché)</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {marque.chiffresCles.map((c) => (
            <li
              key={c.label}
              className="rounded-card border border-black/5 bg-white p-5 shadow-card"
            >
              <p className="font-heading text-2xl font-bold" style={{ color: marque.couleur }}>
                {c.valeur}
              </p>
              <p className="mt-1 text-sm text-text">{c.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
