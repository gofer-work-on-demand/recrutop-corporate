import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-card border border-black/5 bg-white shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
