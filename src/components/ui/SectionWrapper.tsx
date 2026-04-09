"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";
import { clsx } from "clsx";

export function SectionWrapper({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={clsx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}
