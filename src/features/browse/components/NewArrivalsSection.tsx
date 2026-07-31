"use client";

import { useNewArrivals } from "@/features/browse/hooks/useNewArrivals";
import { CarouselPanel } from "@/features/browse/components/CarouselPanel";
import { BookCard } from "@/features/book/components/BookCard";

export function NewArrivalsSection() {
  const { data: books, isLoading } = useNewArrivals();

  if (isLoading) {
    return (
      <CarouselPanel
        title="New Arrivals"
        isEmpty
        emptyMessage="Loading new arrivals..."
      />
    );
  }

  return (
    <CarouselPanel
      title="New Arrivals"
      isEmpty={books.length === 0}
      emptyMessage="No new arrivals yet — check back soon."
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </CarouselPanel>
  );
}
