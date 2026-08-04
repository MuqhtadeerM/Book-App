"use client";

import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";

import CarouselButton from "./CarouselButton";

import { CarouselProps } from "./Carousel.types";

export default function Carousel({
  children,

  showPrev = true,

  showNext = true,

  buttonPosition = 0,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",

    loop: false,
  });

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-[21px]">{children}</div>
      </div>

      {showPrev && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: -40,
          }}
        >
          <CarouselButton direction="prev" onClick={prev} />
        </div>
      )}

      {showNext && (
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: buttonPosition,
          }}
        >
          <CarouselButton direction="next" onClick={next} />
        </div>
      )}
    </section>
  );
}
