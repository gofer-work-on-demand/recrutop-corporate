import type { Metadata } from "next";
import PolitiqueConfidentialite from "@/components/PolitiqueConfidentialite";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiquePage() {
  return <PolitiqueConfidentialite />;
}
