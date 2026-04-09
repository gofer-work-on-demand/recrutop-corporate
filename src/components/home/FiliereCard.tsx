"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { FiliereHomeCard } from "@/data/filieres";
import { getFiliereLucideIcon } from "@/lib/filiere-icons";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function FiliereCard({ filiere }: { filiere: FiliereHomeCard }) {
  const Icon = getFiliereLucideIcon(filiere.slug);
  const color = `var(${filiere.couleurVar})`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link href={`/filieres/${filiere.slug}`} className="group block h-full">
        <Card
          className="relative h-full overflow-hidden border-l-4 p-6 transition-shadow group-hover:shadow-card-hover"
          style={{ borderLeftColor: color }}
        >
          <div className="flex items-start justify-between gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-md border bg-bg"
              style={{ borderColor: color, color }}
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <Badge
              className="border-transparent text-[10px] text-white"
              style={{ backgroundColor: color }}
            >
              Filière
            </Badge>
          </div>
          <h3 className="mt-5 font-display text-xl text-primary group-hover:text-accent-dark">
            {filiere.nom}
          </h3>
          <p className="mt-2 text-sm text-text-muted">{filiere.promesse}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-text">
            {filiere.exemplesMetiers.map((m) => (
              <li key={m} className="flex gap-2">
                <span style={{ color }} aria-hidden>
                  ·
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Accéder à la filière
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Card>
      </Link>
    </motion.div>
  );
}
