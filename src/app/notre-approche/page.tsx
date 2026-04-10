import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Shield, Target } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Notre approche & valeurs",
  description:
    "Un groupe structuré par domaines et marques spécialisées : exigence métier, qualité et engagement sociétal.",
};

export default function NotreApprochePage() {
  return (
    <>
      <section className="border-b border-black/5 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Notre approche
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold text-dark sm:text-4xl text-balance">
            Des expertises distinctes, une exigence commune
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text">
            Recrutop est un groupe d&apos;intérim, de recrutement et d&apos;insertion structuré en{" "}
            <strong>4 domaines</strong> et <strong>8 marques</strong>. Chaque marque incarne un univers
            métier : pas de discours généraliste, mais des équipes qui comprennent votre terrain.
          </p>
          <p className="mt-4 max-w-2xl text-text">
            Dès les premières secondes sur ce site, vous identifiez votre domaine, la marque pertinente
            et le bon point d&apos;entrée —{" "}
            <Link href="/entreprises" className="font-semibold text-primary hover:underline">
              entreprise
            </Link>
            {" ou "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              candidat
            </Link>
            .
          </p>
        </div>
      </section>

      <AnimatedSection id="valeurs" className="scroll-mt-24 border-b border-black/5 bg-bg-light py-14 lg:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-dark sm:text-3xl">Valeurs</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            <li className="rounded-card border border-black/5 bg-white p-6 shadow-card">
              <Target className="h-9 w-9 text-primary" aria-hidden />
              <h3 className="mt-4 font-heading font-semibold text-dark">Spécialisation</h3>
              <p className="mt-2 text-sm text-text">
                Nous recrutons et accompagnons par filière : les exigences de votre métier priment sur
                les intitulés génériques.
              </p>
            </li>
            <li className="rounded-card border border-black/5 bg-white p-6 shadow-card">
              <Shield className="h-9 w-9 text-primary" aria-hidden />
              <h3 className="mt-4 font-heading font-semibold text-dark">Sécurité & conformité</h3>
              <p className="mt-2 text-sm text-text">
                Habilitations, process et suivi opérationnel : une culture sécurité intégrée aux équipes
                terrain.
              </p>
            </li>
            <li className="rounded-card border border-black/5 bg-white p-6 shadow-card">
              <Handshake className="h-9 w-9 text-passerelle" aria-hidden />
              <h3 className="mt-4 font-heading font-semibold text-dark">Engagement sociétal</h3>
              <p className="mt-2 text-sm text-text">
                Avec Passerelle, l&apos;insertion par l&apos;activité économique irrigue l&apos;ensemble du
                groupe et renforce nos territoires.
              </p>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex rounded-pill bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark font-heading"
          >
            Échanger avec nos équipes →
          </Link>
        </div>
      </section>
    </>
  );
}
