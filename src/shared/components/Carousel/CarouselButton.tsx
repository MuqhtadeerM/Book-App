"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  direction: "prev" | "next";

  onClick: () => void;
}

export default function CarouselButton({ direction, onClick }: Props) {
  const Icon = direction === "next" ? ChevronRight : ChevronLeft;

  return (
    <button
      onClick={onClick}
      className="
        flex
        h-[72px]
        w-[72px]
        items-center
        justify-center
        rounded-full
        border
        border-[#E8E8E8]
        bg-white
        shadow-[0_8px_25px_rgba(0,0,0,.08)]
        transition
        hover:scale-105
      "
    >
      <Icon size={34} strokeWidth={1.7} />
    </button>
  );
}
