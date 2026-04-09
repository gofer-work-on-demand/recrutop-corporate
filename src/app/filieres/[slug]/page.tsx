import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiliereLayout } from "@/components/filiere/FiliereLayout";
import { FILIERE_SLUGS, getFiliere } from "@/data/filieres";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return FILIERE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getFiliere(params.slug);
  if (!data) return { title: "Filière" };
  return {
    title: data.nom,
    description: data.tagline,
  };
}

export default function FilierePage({ params }: Props) {
  const data = getFiliere(params.slug);
  if (!data) notFound();
  return <FiliereLayout data={data} />;
}
