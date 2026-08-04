"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { CAROUSEL } from "./Carousel.styles";

interface Props {
  direction: "prev" | "next";

  onClick: () => void;
}

export default function CarouselButton({ direction, onClick }: Props) {
  const Icon = direction === "next" ? ChevronRight : ChevronLeft;

  return (
    <button
      onClick={onClick}
      style={{
        width: CAROUSEL.buttonSize,
        height: CAROUSEL.buttonSize,
      }}
      className="
        flex
        items-center
        justify-center
        rounded-full
        border-[0.85px]
        border-[#E8E8E8]
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,.08)]
        transition
        hover:scale-105
      "
    >
      <Icon size={18} strokeWidth={1.7} />
    </button>
  );
}
