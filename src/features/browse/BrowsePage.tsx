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

// import Container from "@/shared/components/Container";
// import HeroBanner from "./components/HeroBanner";
// import GenreSection from "./components/GenreSection";
// import NewArrivalsSection from "./components/NewArrivalsSection";

// export default function BrowsePage() {
//   return (
//     <>
//       {/* Top Section */}
//       <section
//         className="
//           w-full
//           bg-[#FFFDF3]
//         "
//       >
//         <Container className="flex flex-col gap-14 pt-[10px] pb-[50px]">
//           <HeroBanner />

//           <GenreSection />
//         </Container>
//       </section>

//       {/* Remaining Page */}
//       <Container className="pt-[56px] pb-24">
//         <NewArrivalsSection />
//       </Container>
//     </>
//   );
// }
