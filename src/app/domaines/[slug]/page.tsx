import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { domaines, getDomaineBySlug } from "@/data/domaines";
import { marques } from "@/data/marques";
import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return domaines.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const d = getDomaineBySlug(params.slug);
  if (!d) return { title: "Domaine" };
  return {
    title: d.nom,
    description: d.description,
  };
}

export default function DomainePage({ params }: Props) {
  const { slug } = params;
  const d = getDomaineBySlug(slug);
  if (!d) notFound();

  const marquesDuDomaine = d.marques
    .map((s) => marques.find((m) => m.slug === s))
    .filter(Boolean) as typeof marques;

  return (
    <>
      <section
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: d.couleur }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Fil d'Ariane" className="text-xs font-medium text-white/85">
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{d.nom}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-balance">
            {d.nom}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{d.tagline}</p>
          <p className="mt-6 max-w-3xl text-white/85">{d.description}</p>
        </div>
      </section>

      <section className="border-b border-black/5 py-14 lg:py-16">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-dark">
            Les marques de ce domaine
          </h2>
          <p className="mt-2 max-w-2xl text-text">
            Chaque marque porte une expertise ; ensemble, elles couvrent l&apos;ensemble des besoins du
            domaine.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marquesDuDomaine.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/marques/${m.slug}`}
                  className="group flex h-full flex-col rounded-card border border-black/5 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span
                    className="h-1 w-full rounded-pill"
                    style={{ backgroundColor: m.couleur }}
                    aria-hidden
                  />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-dark group-hover:text-primary">
                    {m.nom}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-text">{m.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary font-heading">
                    Découvrir la marque
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-light py-12">
        <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-dark">Entreprises ou candidats ?</h2>
            <p className="mt-2 text-sm text-text">
              Choisissez le parcours adapté : nos experts domaine vous répondent.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Nous contacter →</Button>
            <Button href={CAREER_SITE_URL} external variant="outline">
              Offres d&apos;emploi →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
