import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-bg px-4 py-24 text-center">
      <h1 className="font-display text-3xl text-primary">Page introuvable</h1>
      <p className="mt-3 text-text-muted">La ressource demandée n&apos;existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold text-accent hover:text-accent-dark"
      >
        Retour à l&apos;accueil →
      </Link>
    </div>
  );
}
