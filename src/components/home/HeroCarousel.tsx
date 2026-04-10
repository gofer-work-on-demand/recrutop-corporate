"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { withBasePath } from "@/config/site";

/** Visuels depuis `public/assets/` */
const slides = [
  {
    src: "/assets/tpgc.jpg",
    alt: "Chantier travaux publics et génie civil",
    tagline: "Travaux Publics & Génie Civil",
    color: "#D1252A",
  },
  {
    src: "/assets/artinterim.jpg",
    alt: "Métiers du patrimoine et de la pierre",
    tagline: "Métiers du Patrimoine",
    color: "#EAAC5A",
  },
  {
    src: "/assets/audiovisuel.png",
    alt: "Technicien audiovisuel et événementiel",
    tagline: "Événementiel Technique",
    color: "#99B4C2",
  },
  {
    src: "/assets/hotellerierestauration.png",
    alt: "Service en hôtellerie et restauration",
    tagline: "Hôtellerie / Restauration",
    color: "#44769F",
  },
  {
    src: "/assets/espacesverts.png",
    alt: "Intervention espaces verts et paysage",
    tagline: "Espaces Verts & Paysage",
    color: "#1B9F46",
  },
  {
    src: "/assets/eventmecatech.png",
    alt: "Technicien maintenance et technique",
    tagline: "Maintenance & Technique",
    color: "#619DB9",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2200, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const pauseAutoplay = useCallback(() => {
    const plug = emblaApi?.plugins()?.autoplay as { stop?: () => void } | undefined;
    plug?.stop?.();
  }, [emblaApi]);

  const resumeAutoplay = useCallback(() => {
    const plug = emblaApi?.plugins()?.autoplay as { play?: () => void; reset?: () => void } | undefined;
    plug?.reset?.();
    plug?.play?.();
  }, [emblaApi]);

  return (
    <div
      className="hero__carousel relative h-[320px] overflow-hidden rounded-card shadow-hero sm:h-[400px] lg:h-[480px]"
      aria-roledescription="carousel"
      aria-label="Métiers du groupe Recrutop"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative h-full min-w-0 flex-[0_0_100%]">
              <Image
                src={withBasePath(slide.src)}
                alt={slide.alt}
                fill
                className="slide__image object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div
                className="pointer-events-none absolute inset-0 slide__overlay bg-gradient-to-t from-[#002C55]/75 via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="slide__tag inline-block rounded-pill px-3.5 py-1.5 text-[13px] font-semibold text-white font-heading"
                  style={{ backgroundColor: slide.color }}
                >
                  {slide.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__dots pointer-events-auto absolute bottom-4 right-5 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className="dot h-2 rounded-pill transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              width: i === selectedIndex ? 24 : 8,
              backgroundColor: i === selectedIndex ? "white" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Aller à la slide ${i + 1}`}
            aria-current={i === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
}
