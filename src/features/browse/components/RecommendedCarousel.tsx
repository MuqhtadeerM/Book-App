"use client";

import { useRecommended } from "@/features/browse/hooks/useRecommended";
import { CarouselPanel } from "@/features/browse/components/CarouselPanel";
import { BookCard } from "@/features/book/components/BookCard";

export function RecommendedCarousel() {
  const { data: books, isLoading } = useRecommended();

  if (isLoading) {
    return (
      <CarouselPanel
        title="Recommended for You"
        isEmpty
        emptyMessage="Loading recommendations..."
      />
    );
  }

  return (
    <CarouselPanel
      title="Recommended for You"
      isEmpty={books.length === 0}
      emptyMessage="Browse a few books and we'll start recommending picks here."
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </CarouselPanel>
  );
}
