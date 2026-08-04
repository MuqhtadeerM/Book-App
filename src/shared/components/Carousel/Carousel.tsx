"use client";

import useEmblaCarousel from "embla-carousel-react";

import { forwardRef, useImperativeHandle } from "react";

import { CarouselProps } from "./Carousel.types";

export interface CarouselHandle {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>(function Carousel(
  { children },
  ref,
) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",

    loop: false,
  });

  useImperativeHandle(ref, () => ({
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  }));

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-[21.4px]">{children}</div>
    </div>
  );
});

export default Carousel;
