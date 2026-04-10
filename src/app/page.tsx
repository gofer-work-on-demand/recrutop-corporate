import { HeroSection } from "@/components/home/HeroSection";
import { DomainesGrid } from "@/components/home/DomainesGrid";
import { MarquesCarousel } from "@/components/home/MarquesCarousel";
import { ParcoursSection } from "@/components/home/ParcoursSection";
import { PasserelleSection } from "@/components/home/PasserelleSection";
import { PourquoiSection } from "@/components/home/PourquoiSection";
import { ConversionCtaSection } from "@/components/home/ConversionCtaSection";
import { RecrutementCddCdiBand } from "@/components/home/RecrutementCddCdiBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DomainesGrid />
      <MarquesCarousel />
      <ParcoursSection />
      <PasserelleSection />
      <PourquoiSection />
      <RecrutementCddCdiBand />
      <ConversionCtaSection />
    </>
  );
}
