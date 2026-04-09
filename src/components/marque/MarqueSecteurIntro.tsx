import type { MarqueData } from "@/data/marques";

export function MarqueSecteurIntro({ marque }: { marque: MarqueData }) {
  return (
    <section className="border-b border-black/5 py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Le secteur</h2>
        <p className="mt-4 max-w-3xl text-text">{marque.activite}</p>
        <p className="mt-4 max-w-3xl text-sm text-text/90">{marque.secteurDescription}</p>
      </div>
    </section>
  );
}
