import Link from "next/link";
import { RecrutopLogoLink } from "./RecrutopLogoLink";
import { domaines } from "@/data/domaines";
import { marques, marquesOrdreAffichage } from "@/data/marques";
import { SITE_TAGLINE } from "@/config/site";

/** Titres colonnes : orange Passerelle légèrement plus foncé pour le contraste sur fond #002C55 */
const TITLE_PASSERELLE = "#C75E06";

export function Footer() {
  const orderedMarques = marquesOrdreAffichage
    .map((slug) => marques.find((m) => m.slug === slug))
    .filter(Boolean) as typeof marques;

  const linkClass = "text-white transition-opacity hover:opacity-90 hover:underline underline-offset-2";
  const titleClass = "text-xs font-semibold uppercase tracking-[0.15em] font-heading";

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <RecrutopLogoLink placement="footer" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white">{SITE_TAGLINE}</p>
          </div>
          <div className="lg:col-span-2">
            <p className={titleClass} style={{ color: TITLE_PASSERELLE }}>
              Domaines
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {domaines.map((d) => (
                <li key={d.slug}>
                  <Link href={`/domaines/${d.slug}`} className={linkClass}>
                    {d.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className={titleClass} style={{ color: TITLE_PASSERELLE }}>
              Marques
            </p>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {orderedMarques.map((m) => (
                <li key={m.slug}>
                  <Link href={`/marques/${m.slug}`} className={linkClass}>
                    {m.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className={titleClass} style={{ color: TITLE_PASSERELLE }}>
              Solutions
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/entreprises" className={linkClass}>
                  Intérim & renforts
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className={linkClass}>
                  Recrutement CDI / CDD
                </Link>
              </li>
              <li>
                <Link href="/marques/passerelle" className={linkClass}>
                  Insertion (IAE)
                </Link>
              </li>
            </ul>
            <p className={`mt-6 ${titleClass}`} style={{ color: TITLE_PASSERELLE }}>
              Légal & RGPD
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className={linkClass}>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className={linkClass}>
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className={titleClass} style={{ color: TITLE_PASSERELLE }}>
              Coordonnées
            </p>
            <p className="mt-4 text-sm text-white">
              141 avenue de Clichy
              <br />
              75017 Paris
            </p>
            <p className="mt-3 text-sm text-white">
              <a href="tel:+33140242040" className={linkClass}>
                01 40 24 20 40
              </a>
            </p>
            <p className="mt-3 text-sm text-white">
              <a href="mailto:contact@recrutop.fr" className={linkClass}>
                contact@recrutop.fr
              </a>
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-white">Réseaux</p>
            <p className="mt-1 text-sm text-white">
              <a
                href="https://fr.linkedin.com/company/recrutop"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 pt-8 text-center text-xs text-white">
          © {new Date().getFullYear()} Recrutop. Tous droits réservés.{" "}
          <Link href="/mentions-legales" className="underline hover:opacity-90">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
