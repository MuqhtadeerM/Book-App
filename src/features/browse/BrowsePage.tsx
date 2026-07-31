import { HeroBanner } from "@/features/browse/components/HeroBanner";
import { GenreCarousel } from "@/features/browse/components/GenreCarousel";
import { NewArrivalsSection } from "@/features/browse/components/NewArrivalsSection";
import { RecommendedCarousel } from "@/features/browse/components/RecommendedCarousel";
import { BestSellersSection } from "@/features/browse/components/BestSellersSection";

export function BrowsePage() {
  return (
    <div>
      <HeroBanner />
      <GenreCarousel />
      <NewArrivalsSection />
      <RecommendedCarousel />
      <BestSellersSection />
    </div>
  );
}
