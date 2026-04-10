import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RecrutementCddCdiBand() {
  return (
    <section
      id="recrutement-cdd-cdi"
      className="scroll-mt-24 border-b border-black/5 bg-gradient-to-br from-[#EAAC5A]/20 via-white to-white py-12 lg:py-16"
    >
      <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-base font-bold uppercase tracking-[0.08em] text-dark sm:text-lg">
          Recrutement en CDD/CDI pour tous ces secteurs d&apos;activité via{" "}
          <Link
            href="/marques/recrutop-carriere"
            className="text-primary underline-offset-4 hover:underline"
          >
            Recrutop CARRIERE
          </Link>
        </p>
        <Link
          href="/marques/recrutop-carriere"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary font-heading hover:underline"
        >
          Découvrir Recrutop Carrière
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
