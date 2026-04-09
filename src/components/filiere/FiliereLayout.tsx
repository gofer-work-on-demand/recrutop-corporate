import Link from "next/link";
import { Check } from "lucide-react";
import type { FilierePageData } from "@/data/filieres";
import { FiliereHero } from "./FiliereHero";
import { MetiersSection } from "./MetiersSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function FiliereLayout({ data }: { data: FilierePageData }) {
  const accent = data.couleurHex;

  return (
    <>
      <FiliereHero data={data} />

      <AnimatedSection className="border-b border-border bg-bg py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Le secteur : {data.nom.split("&")[0]?.trim()}
          </h2>
          <p className="mt-4 max-w-3xl text-text-muted">{data.secteurDescription}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {data.chiffresCles.map((c) => (
              <li key={c.label}>
                <Card className="p-5 text-center">
                  <p className="font-display text-2xl text-primary sm:text-3xl">{c.valeur}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-text-muted">
                    {c.label}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Les enjeux du secteur
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {data.enjeux.map((e) => (
              <li key={e.titre}>
                <Card className="h-full p-5">
                  <h3 className="font-display text-lg text-primary">{e.titre}</h3>
                  <p className="mt-2 text-sm text-text-muted">{e.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <MetiersSection metiers={data.metiers} />

      <AnimatedSection className="border-b border-border bg-bg py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Sécurité & habilitations
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            Chaque candidat est contrôlé sur ses habilitations et leur cohérence avec la mission
            visée.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {data.habilitations.map((h) => (
              <li
                key={h}
                className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                style={{ borderColor: accent, color: accent }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Notre méthode d&apos;évaluation
          </h2>
          <ol className="relative mt-10 max-w-3xl space-y-8 border-l-2 border-border pl-8">
            {data.methodeEvaluation.map((step, i) => (
              <li key={step.titre} className="relative">
                <span
                  className="absolute -left-[1.15rem] top-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: accent }}
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-primary">{step.titre}</h3>
                <p className="mt-2 text-sm text-text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-bg py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Notre valeur ajoutée
          </h2>
          <p className="mt-4 max-w-3xl font-medium text-text">{data.valeurAjouteeIntro}</p>
          <ul className="mt-8 space-y-3">
            {data.valeurAjoutee.map((v) => (
              <li key={v} className="flex gap-3 text-text-muted">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={2} />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Pourquoi choisir Recrutop ?
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.raisonChoisir.map((r) => (
              <li
                key={r}
                className="rounded-md border border-border bg-bg px-4 py-3 text-sm text-text"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-sm font-medium text-primary">
            Dès les premières secondes, le bon interlocuteur filière fait la différence entre un
            profil crédible et un tire-percussion de CV.
          </p>
        </div>
      </AnimatedSection>

      <section className="border-b border-border bg-bg py-16 lg:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">Offres liées</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {data.offresLiees.map((o) => (
              <li key={o.titre}>
                <Card className="h-full p-5 transition-shadow hover:shadow-card-hover">
                  <p className="font-display text-lg text-primary">{o.titre}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">{o.meta}</p>
                  <p className="mt-3 text-sm text-text-muted">{o.description}</p>
                </Card>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/contact"
              className="text-sm font-semibold text-accent hover:text-accent-dark"
            >
              {data.offresCta} →
            </Link>
          </p>
        </div>
      </section>

      <section
        className="py-16 text-white lg:py-24"
        style={{
          background: `linear-gradient(120deg, var(--color-primary) 0%, ${accent} 160%)`,
        }}
      >
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-balance">
            Besoin d&apos;un expert {data.nom} ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85">
            Orientez votre besoin vers la filière : nos consultants comprennent votre terrain avant
            de qualifier les profils.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" className="bg-accent text-primary hover:bg-white">
              Nous contacter →
            </Button>
            <Button
              href="/candidats"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Déposer une candidature →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
