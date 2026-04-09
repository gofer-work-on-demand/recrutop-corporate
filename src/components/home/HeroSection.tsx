import Link from "next/link";
import { HeroCarousel } from "./HeroCarousel";
import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero border-b border-black/5 bg-white pb-12 pt-10 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid max-w-content gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14 lg:px-8">
        <div className="hero__content order-2 flex flex-col justify-center lg:order-1">
          <span className="inline-flex w-fit rounded-pill border border-primary/20 bg-bg-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary font-heading">
            Ultra spécialisé · 4 domaines · 9 marques
          </span>
          <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-[2.35rem] xl:text-5xl text-balance">
            Recrutop, groupe d&apos;intérim, de recrutement et d&apos;insertion
          </h1>
          <p className="subtitle mt-5 max-w-xl text-lg text-text">
            Recrutop accompagne les entreprises et les candidats dans 4 univers : construction &
            patrimoine, hôtellerie-restauration & événementiel, technique & maintenance, insertion &
            espaces verts. Un groupe, des pôles spécialisés, une même exigence de qualité.
          </p>
          <p className="micro-text mt-4 max-w-lg text-sm text-text/85">
            Identifiez en quelques secondes vos secteurs, les marques du groupe et le bon point
            d&apos;entrée selon que vous êtes candidat ou client.
          </p>
          <div className="cta-row mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/#domaines">Découvrir nos secteurs →</Button>
            <Button href={CAREER_SITE_URL} external variant="outline">
              Voir les offres d&apos;emploi
            </Button>
          </div>
        </div>
        <div className="hero__carousel order-1 min-w-0 lg:order-2">
          <HeroCarousel />
        </div>
        <p className="order-3 text-center text-xs text-text/70 lg:col-span-2 lg:hidden">
          <Link href="/#domaines" className="font-medium text-primary underline-offset-4 hover:underline">
            En savoir plus sur nos domaines
          </Link>
        </p>
      </div>
    </section>
  );
}
