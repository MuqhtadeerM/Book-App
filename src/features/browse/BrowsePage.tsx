import Container from "@/shared/components/Container";

import HeroBanner from "./components/HeroBanner";
import GenreSection from "./components/GenreSection";
import NewArrivalsSection from "./components/NewArrivals/NewArrivalsSection";
import RecommendationSection from "./components/Recommendation/RecommendationSection";

export default function BrowsePage() {
  return (
    <Container
      className="
        flex
        w-full
        max-w-[2097px]
        flex-col
        gap-[56px]
        pb-24
      "
    >
      <HeroBanner />

      <GenreSection />

      <NewArrivalsSection />

      <RecommendationSection />
    </Container>
  );
}
