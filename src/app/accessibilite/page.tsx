import type { Metadata } from "next";
import Accessibilite from "@/components/Accessibilite";

export const metadata: Metadata = {
  title: "Déclaration d'accessibilité",
};

export default function AccessibilitePage() {
  return <Accessibilite />;
}
