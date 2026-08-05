"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "./BookCard";
import type { BookCarouselProps } from "./types";

// Exact measurements pulled from Figma
const SECTION_GAP = 28; // gap between header row and the card row
const CARD_ROW_GAP = 21.4; // gap between individual cards

export default function BookCarousel({
  title,
  subtitle,
  books,
  onToggleFavorite,
  onReadChat,
  className = "",
}: BookCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!books?.length) return null;

  return (
    <section
      className={`flex w-full flex-col py-6 ${className}`}
      style={{ gap: SECTION_GAP }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-1 text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ gap: CARD_ROW_GAP }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onToggleFavorite={onToggleFavorite}
            onReadChat={onReadChat}
          />
        ))}
      </div>
    </section>
  );
}
