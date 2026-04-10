/** Site carrière externe (Magnet) — remplacer par l’URL production */
export const CAREER_SITE_URL =
  process.env.NEXT_PUBLIC_CAREER_URL ?? "https://recrutement.recrutop.fr/";

export const PASSERELLE_SITE_URL = "https://www.passerelle-insertion.fr/";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const SITE_TAGLINE =
  "Recrutop, groupe d'intérim, de recrutement et d'insertion : 5 secteurs d'activité, 8 marques spécialisées.";
