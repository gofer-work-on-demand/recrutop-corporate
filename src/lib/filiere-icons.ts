import type { LucideIcon } from "lucide-react";
import {
  ChefHat,
  HardHat,
  Landmark,
  Trees,
  Wrench,
  Zap,
} from "lucide-react";

const filiereLucideBySlug: Record<string, LucideIcon> = {
  "travaux-publics": HardHat,
  patrimoine: Landmark,
  evenementiel: Zap,
  hotellerie: ChefHat,
  paysage: Trees,
  maintenance: Wrench,
};

const defaultIcon: LucideIcon = HardHat;

/** Résout l’icône Lucide côté composant (ne pas passer le composant via les props RSC). */
export function getFiliereLucideIcon(slug: string): LucideIcon {
  return filiereLucideBySlug[slug] ?? defaultIcon;
}
