import { clsx } from "clsx";

export function BUBadge({
  marque,
  color,
  outline,
  className,
}: {
  marque: string;
  color: string;
  outline?: boolean;
  className?: string;
}) {
  if (outline) {
    return (
      <span
        className={clsx(
          "inline-flex rounded-pill border-2 px-3 py-1 text-xs font-semibold font-heading",
          className
        )}
        style={{ borderColor: color, color }}
      >
        {marque}
      </span>
    );
  }
  return (
    <span
      className={clsx(
        "inline-flex rounded-pill px-3 py-1 text-xs font-semibold text-white font-heading",
        className
      )}
      style={{ backgroundColor: color }}
    >
      {marque}
    </span>
  );
}
