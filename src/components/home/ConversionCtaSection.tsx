"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CAREER_SITE_URL } from "@/config/site";
import { fadeUp } from "@/lib/motion";

export function ConversionCtaSection() {
  return (
    <section className="bg-bg-light py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center font-heading text-3xl font-bold text-dark sm:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Vous cherchez le bon point d&apos;entrée ?
        </motion.h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-card border border-black/10 bg-white p-8 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Building2 className="h-9 w-9 text-primary" aria-hidden />
            <h3 className="mt-4 font-heading text-xl font-bold text-dark">Entreprise</h3>
            <p className="mt-2 text-text">
              Être orienté vers la bonne filière et les bons interlocuteurs.
            </p>
            <Button href="/contact" className="mt-6">
              Nous contacter →
            </Button>
          </motion.div>
          <motion.div
            className="rounded-card border border-black/10 bg-white p-8 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <UserRound className="h-9 w-9 text-primary" aria-hidden />
            <h3 className="mt-4 font-heading text-xl font-bold text-dark">Candidat</h3>
            <p className="mt-2 text-text">Trouver des missions adaptées à votre métier.</p>
            <Button href={CAREER_SITE_URL} external className="mt-6" variant="outline">
              Accéder aux offres →
            </Button>
          </motion.div>
        </div>
        <p className="mt-8 text-center text-sm text-text">
          Structure du groupe :{" "}
          <Link href="/#domaines" className="font-semibold underline-offset-2 hover:underline">
            4 domaines
          </Link>
          ,{" "}
          <Link href="/#marques" className="font-semibold underline-offset-2 hover:underline">
            9 marques
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
