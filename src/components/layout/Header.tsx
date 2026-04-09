"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { RecrutopLogoLink } from "./RecrutopLogoLink";
import { MegaMenuSecteurs } from "./MegaMenuSecteurs";
import { MegaMenuMarques } from "./MegaMenuMarques";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";
import { domaines } from "@/data/domaines";
import { marques } from "@/data/marques";
import { CAREER_SITE_URL } from "@/config/site";

type MegaKind = "secteurs" | "marques" | null;

const nav = [
  { href: "/notre-approche", label: "Notre approche" },
  { href: "/notre-approche#valeurs", label: "Valeurs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<MegaKind>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDomain, setOpenDomain] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mega) return;
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMega(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [mega]);

  const closeMega = () => setMega(null);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] bg-white transition-all duration-300",
        scrolled
          ? "border-b border-black/5 shadow-sm backdrop-blur-md"
          : "border-b border-transparent backdrop-blur-sm"
      )}
    >
      {/* Bloc unique : barre + dropdowns centrés sous la zone contenu (évite le décalage Framer Motion / translateX) */}
      <div
        className="relative mx-auto w-full max-w-content px-3 sm:px-5 lg:px-8"
        ref={megaRef}
      >
        <div className="flex min-h-[var(--header-height)] items-center justify-between gap-2 sm:gap-4">
          <div className="min-w-0 flex-1 lg:flex-initial lg:shrink-0">
            <RecrutopLogoLink placement="header" />
          </div>

          <nav
            className="hidden min-h-[var(--header-height)] flex-none items-center gap-0.5 lg:flex"
            aria-label="Navigation principale"
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-pill px-3 py-2 text-sm font-medium text-text hover:bg-bg-light"
              aria-expanded={mega === "secteurs"}
              aria-haspopup="true"
              onClick={() => setMega((m) => (m === "secteurs" ? null : "secteurs"))}
            >
              Secteurs
              <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 rounded-pill px-3 py-2 text-sm font-medium text-text hover:bg-bg-light"
              aria-expanded={mega === "marques"}
              aria-haspopup="true"
              onClick={() => setMega((m) => (m === "marques" ? null : "marques"))}
            >
              Marques
              <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
            </button>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-pill px-3 py-2 text-sm font-medium text-text hover:bg-bg-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button
              href={CAREER_SITE_URL}
              external
              variant="primary"
              className="!px-4 !py-2.5 text-xs xl:!px-6 xl:!py-3 xl:text-sm"
              aria-label="Accéder au site carrière"
            >
              <span className="hidden xl:inline">Accéder au site carrière →</span>
              <span className="xl:hidden">Carrière →</span>
            </Button>
          </div>

          <button
            type="button"
            className="-mr-1 shrink-0 rounded-pill p-2 text-primary lg:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {mega === "secteurs" ? (
            <div
              key="secteurs"
              className="absolute left-0 right-0 top-full z-[120] mt-1 flex justify-center px-1 sm:px-2"
            >
              <MegaMenuSecteurs onNavigate={closeMega} />
            </div>
          ) : mega === "marques" ? (
            <div
              key="marques"
              className="absolute left-0 right-0 top-full z-[120] mt-1 flex justify-center px-1 sm:px-2"
            >
              <MegaMenuMarques onNavigate={closeMega} />
            </div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-[90] bg-dark/40 backdrop-blur-sm lg:hidden"
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed right-0 top-0 z-[110] flex h-[100dvh] w-[min(22rem,calc(100vw-1.25rem))] max-w-[100vw] flex-col border-l border-black/10 bg-white shadow-hero lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 sm:py-4">
                <span className="font-heading text-base font-semibold text-dark">Menu</span>
                <button
                  type="button"
                  className="rounded-pill p-2"
                  aria-label="Fermer"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-text/80">
                  Par domaine
                </p>
                <ul className="space-y-2 border-b border-black/10 pb-4">
                  {domaines.map((d) => (
                    <li key={d.slug} className="rounded-card-sm border border-black/5">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-2 px-3 py-2.5 text-left font-heading text-sm font-semibold text-dark"
                        onClick={() => setOpenDomain((s) => (s === d.slug ? null : d.slug))}
                        aria-expanded={openDomain === d.slug}
                      >
                        <span className="min-w-0 leading-snug">{d.nom}</span>
                        <ChevronDown
                          className={clsx(
                            "mt-0.5 h-4 w-4 shrink-0 transition-transform",
                            openDomain === d.slug && "rotate-180"
                          )}
                          aria-hidden
                        />
                      </button>
                      {openDomain === d.slug ? (
                        <ul className="border-t border-black/5 bg-bg-light/50 px-3 py-2">
                          <li>
                            <Link
                              href={`/domaines/${d.slug}`}
                              className="block py-2 text-sm font-medium text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              Vue domaine →
                            </Link>
                          </li>
                          {d.marques.map((slug) => {
                            const m = marques.find((x) => x.slug === slug);
                            if (!m) return null;
                            return (
                              <li key={slug}>
                                <Link
                                  href={`/marques/${slug}`}
                                  className="block py-2 text-sm text-text active:bg-black/5"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {m.nom}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-1">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-pill py-2.5 text-sm font-medium text-text hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-black/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
                <Button
                  href={CAREER_SITE_URL}
                  external
                  className="w-full justify-center text-sm"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Accéder au site carrière"
                >
                  Accéder au site carrière →
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
