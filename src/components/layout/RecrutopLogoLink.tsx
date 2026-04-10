import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/config/site";

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
        src={withBasePath("/assets/recrutop-logo.png")}
        alt="Recrutop"
        width={300}
        height={56}
        className={
          isFooter
            ? "h-9 w-auto sm:h-10 brightness-0 invert-[.92] contrast-[1.05]"
            : "h-10 w-auto object-contain object-left sm:h-11 md:h-12"
        }
        priority={!isFooter}
      />
    </Link>
  );
}
