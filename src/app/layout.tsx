import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_TAGLINE } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Recrutop — Groupe spécialisé · Intérim, recrutement, insertion",
    template: "%s | Recrutop",
  },
  description: SITE_TAGLINE,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body">
        <Header />
        <main className="pt-[var(--header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
