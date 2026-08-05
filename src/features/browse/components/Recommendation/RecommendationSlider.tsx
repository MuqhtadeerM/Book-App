"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import RecommendationCard from "./RecommendationCard";
import { recommendations } from "./recommendation-data";

export default function RecommendationSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {recommendations.map((item, index) => (
            <div key={item.id} className="min-w-0 flex-[0_0_792px]">
              <RecommendationCard item={item} preview={index === 1} />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}

      {/* <button
        onClick={scrollPrev}
        aria-label="Previous Recommendations"
        className="
          absolute
          left-[-36px]
          top-1/2
          z-30
          flex
          h-[72.58px]
          w-[72.58px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#E5E5E5]
          bg-white
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <ChevronLeft size={34} strokeWidth={1.8} className="text-[#7A7A7A]" />
      </button> */}

      {/* Next Button */}
      <button
        onClick={scrollNext}
        aria-label="Next Recommendations"
        className="absolute
        left-[756px]
        top-1/2
        z-30
        flex
        h-[72.58px]
        w-[72.58px]
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#E5E5E5]
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
      >
        <ChevronRight size={34} strokeWidth={1.8} className="text-[#7A7A7A]" />
      </button>
    </section>
  );
}
