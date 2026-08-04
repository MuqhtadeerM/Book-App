import Container from "@/shared/components/Container";

import HeroBanner from "./components/HeroBanner";
import GenreSection from "./components/GenreSection";
import NewArrivalsSection from "./components/NewArrivals/NewArrivalsSection";
import RecommendationSection from "./components/Recommendation/RecommendationSection";
import BestSellerSection from "./components/BestSellers/BestSellersSection";
import CrimeFictionSection from "./components/Crime/Crimefictionsection";
import NonFictionSection from "./components/NonFiction/Nonfictionsection";
import AcademicsSection from "./components/Acadamics/Academicssection";
import BusinessSection from "./components/Business/Businesssection";

export default function BrowsePage() {
  return (
    <Container
      className="
        flex
        w-full
        max-w-[2097px]
        flex-col
        gap-[36px]
        pb-24
      "
    >
      <HeroBanner />

      <GenreSection />

      <NewArrivalsSection />

      <RecommendationSection />

      <BestSellerSection />

      {/* Speak with author */}
      <CrimeFictionSection />

      <NonFictionSection />

      {/* famous authors */}

      <AcademicsSection />

      <BusinessSection />
    </Container>
  );
}
