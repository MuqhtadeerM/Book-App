"use client";

import { useRef } from "react";

import Carousel, { type CarouselHandle } from "./Carousel";
import CarouselButton from "./CarouselButton";

interface BookCarouselSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function BookCarouselSection({
  title,
  subtitle,
  children,
}: BookCarouselSectionProps) {
  const carouselRef = useRef<CarouselHandle>(null);

  return (
    <section className="w-full">
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[28px] font-semibold leading-[36px] text-[#232323]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-[16px] text-[#7A7A7A]">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-[10.87px]">
          <CarouselButton
            direction="prev"
            onClick={() => carouselRef.current?.scrollPrev()}
          />
          <CarouselButton
            direction="next"
            onClick={() => carouselRef.current?.scrollNext()}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8">
        <Carousel ref={carouselRef}>{children}</Carousel>
      </div>
    </section>
  );
}
