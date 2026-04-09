import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { FilierePageData } from "@/data/filieres";
import { getFiliereLucideIcon } from "@/lib/filiere-icons";
import { ChevronRight } from "lucide-react";

export function FiliereHero({ data }: { data: FilierePageData }) {
  const Icon = getFiliereLucideIcon(data.slug);
  const color = data.couleurHex;

  return (
    <section className="border-b border-border bg-bg">
      <div className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-8">
        <nav className="text-xs text-text-muted" aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
            <li>
              <Link href="/filieres" className="hover:text-primary">
                Nos filières
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
            <li className="font-medium text-text">{data.nom}</li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Badge
              className="border-transparent text-white"
              style={{ backgroundColor: color }}
            >
              Filière {data.nom.split("&")[0]?.trim()}
            </Badge>
            <div className="mt-4 flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-md border bg-surface"
                style={{ borderColor: color, color }}
              >
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-normal leading-tight text-primary sm:text-5xl text-balance">
              {data.nom}
            </h1>
            <p className="mt-4 text-lg text-text-muted text-balance">{data.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Je recrute dans ce secteur →</Button>
              <Button href="/candidats" variant="outline">
                Je suis candidat dans ce secteur →
              </Button>
            </div>
          </div>
          <div
            className="relative min-h-[220px] overflow-hidden rounded-[var(--radius-card)] border border-border lg:min-h-[320px]"
            role="img"
            aria-label={`Visuel métier ${data.nom} — à personnaliser`}
          >
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background: `linear-gradient(135deg, ${color}cc 0%, var(--color-primary) 55%, var(--color-primary) 100%)`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,151,58,0.25),transparent_45%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-sm text-white/90">
              Expertise terrain, geste métier, technicité — image à confier à votre direction
              artistique.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
