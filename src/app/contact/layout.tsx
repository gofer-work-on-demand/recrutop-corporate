import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Recrutop pour être orienté vers la filière et l'expert adaptés à votre besoin.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
