import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarqueBySlug, marques } from "@/data/marques";
import { MarqueHero } from "@/components/marque/MarqueHero";
import { MarqueSecteurIntro } from "@/components/marque/MarqueSecteurIntro";
import { ChiffresSection } from "@/components/marque/ChiffresSection";
import { EnjeuxSection } from "@/components/marque/EnjeuxSection";
import { MetiersTabs } from "@/components/marque/MetiersTabs";
import { HabilitationsBadges } from "@/components/marque/HabilitationsBadges";
import { MethodeStepper } from "@/components/marque/MethodeStepper";
import { ValeurAjouteeSection } from "@/components/marque/ValeurAjouteeSection";
import { OffresLiees } from "@/components/marque/OffresLiees";
import { MarqueCtaFooter } from "@/components/marque/MarqueCtaFooter";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return marques.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const m = getMarqueBySlug(params.slug);
  if (!m) return { title: "Marque" };
  return {
    title: m.nom,
    description: m.description,
  };
}

export default function MarquePage({ params }: Props) {
  const { slug } = params;
  const marque = getMarqueBySlug(slug);
  if (!marque) notFound();

  return (
    <>
      <MarqueHero marque={marque} />
      <MarqueSecteurIntro marque={marque} />
      <ChiffresSection marque={marque} />
      <EnjeuxSection marque={marque} />
      <MetiersTabs marque={marque} />
      <HabilitationsBadges marque={marque} />
      <MethodeStepper marque={marque} />
      <ValeurAjouteeSection marque={marque} />
      <OffresLiees marque={marque} />
      <MarqueCtaFooter marque={marque} />
    </>
  );
}
