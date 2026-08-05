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
import TechBooksSection from "./components/Technology/Techbookssection";
import ClassicsSection from "./components/Classics/Classicssection";
import SpeakWithAuthorsSection from "./components/SpeakWithAuthors/SpeakWithAuthorsSection";
import FamousAuthorsSection from "./components/FamousAuthors/FamousAuthorsSection";

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
      <section id="browse">
        <HeroBanner />
      </section>

      <section id="genres">
        <GenreSection />
      </section>

      <section id="new-arrivals">
        <NewArrivalsSection />
      </section>

      <section id="recommended">
        <RecommendationSection />
      </section>

      <section id="best-sellers">
        <BestSellerSection />
      </section>

      <section id="authors">
        <SpeakWithAuthorsSection />
      </section>

      <section id="crime">
        <CrimeFictionSection />
      </section>

      <section id="non-fiction">
        <NonFictionSection />
      </section>

      <section id="famous">
        {/* famous authors */}
        <FamousAuthorsSection />
      </section>

      <section id="academics">
        <AcademicsSection />
      </section>

      <section id="business">
        <BusinessSection />
      </section>

      <section id="tech">
        <TechBooksSection />
      </section>

      <section id="classic">
        <ClassicsSection />
      </section>
    </Container>
  );
}
