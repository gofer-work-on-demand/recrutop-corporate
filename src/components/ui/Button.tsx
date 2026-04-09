import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "outline" | "ghost" | "bu";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-body";

const variants: Record<Exclude<Variant, "bu">, string> = {
  primary:
    "bg-primary text-white hover:bg-dark border border-transparent shadow-sm",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
  ghost:
    "text-primary bg-transparent border border-transparent hover:underline underline-offset-4",
};

export function Button({
  href,
  children,
  variant = "primary",
  buColor,
  className,
  external,
  onClick,
  type = "button",
  disabled,
  "aria-label": ariaLabel,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  buColor?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  "aria-label"?: string;
}) {
  const isBu = variant === "bu";
  const classes = clsx(
    baseClasses,
    isBu ? "text-white border border-transparent shadow-sm hover:opacity-95" : variants[variant],
    className
  );

  const style: CSSProperties | undefined = isBu
    ? { backgroundColor: buColor ?? "var(--color-primary)" }
    : undefined;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={style} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx(classes, disabled && "pointer-events-none opacity-50")}
      style={style}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
