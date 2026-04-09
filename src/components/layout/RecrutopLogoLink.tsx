import Image from "next/image";
import Link from "next/link";

type Props = {
  /** Header : fond clair. Footer : fond #002C55 — logo lisible via léger éclaircissement */
  placement: "header" | "footer";
};

export function RecrutopLogoLink({ placement }: Props) {
  const isFooter = placement === "footer";
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Recrutop — accueil"
    >
      <Image
        src="/assets/recrutop-logo.png"
        alt="Recrutop"
        width={220}
        height={48}
        className={
          isFooter
            ? "h-9 w-auto sm:h-10 brightness-0 invert-[.92] contrast-[1.05]"
            : "h-7 w-auto max-w-[min(200px,54vw)] object-contain object-left sm:h-8 sm:max-w-[220px] md:h-9 md:max-w-none"
        }
        priority={!isFooter}
      />
    </Link>
  );
}
