import type { Metadata } from "next";
import MentionsLegales from "@/components/MentionsLegales";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return <MentionsLegales />;
}
