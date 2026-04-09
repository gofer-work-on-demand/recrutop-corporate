import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";
import type { MarqueData } from "@/data/marques";

export function MarqueCtaFooter({ marque }: { marque: MarqueData }) {
  return (
    <section className="py-14 text-white lg:py-16" style={{ backgroundColor: marque.couleur }}>
      <div className="mx-auto flex max-w-content flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold">Parlons de votre besoin</h2>
          <p className="mt-2 max-w-xl text-white/90">
            Nos équipes {marque.nom} vous orientent vers les profils et le bon niveau d&apos;exigence
            terrain.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {marque.siteExterne ? (
            <Button
              href={marque.siteExterne}
              external
              variant="outline"
              className="!border-white !text-white hover:!bg-white/10 hover:!text-white"
            >
              Site, plaquette & agences ↗
            </Button>
          ) : null}
          <Button
            href="/contact"
            variant="outline"
            className="!border-white !text-white hover:!bg-white/10 hover:!text-white"
          >
            Contact entreprise →
          </Button>
          <Button
            href={CAREER_SITE_URL}
            external
            className="!bg-white !text-dark hover:!bg-bg-light"
          >
            Offres / candidats →
          </Button>
        </div>
      </div>
    </section>
  );
}
