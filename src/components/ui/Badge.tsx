import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
}
