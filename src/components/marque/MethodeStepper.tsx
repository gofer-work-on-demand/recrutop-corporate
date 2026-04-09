import type { MarqueData } from "@/data/marques";

export function MethodeStepper({ marque }: { marque: MarqueData }) {
  if (!marque.methodeEvaluation.length) return null;
  return (
    <section className="border-b border-black/5 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-dark">Méthode d&apos;évaluation</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marque.methodeEvaluation.map((step) => (
            <li key={step.etape} className="relative rounded-card border border-black/5 p-5 shadow-card">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white font-heading"
                style={{ backgroundColor: marque.couleur }}
              >
                {step.etape}
              </span>
              <h3 className="mt-4 font-heading font-semibold text-dark">{step.titre}</h3>
              <p className="mt-2 text-sm text-text">{step.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
