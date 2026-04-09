"use client";

import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";
import type { ReactNode } from "react";

export function AnimatedSection({
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
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.section>
  );
}
