"use client";

import { useNewArrivals } from "@/features/browse/hooks/useNewArrivals";
import { CarouselPanel } from "@/features/browse/components/CarouselPanel";
import { BookCard } from "@/features/book/components/BookCard";

// Reuses the same placeholder data shape as useNewArrivals until a dedicated
// useBestSellers hook + endpoint exists.
export function BestSellersSection() {
  const { data: books, isLoading } = useNewArrivals();

  if (isLoading) {
    return (
      <CarouselPanel
        title="Best Sellers"
        isEmpty
        emptyMessage="Loading best sellers..."
      />
    );
  }

  return (
    <CarouselPanel
      title="Best Sellers"
      isEmpty={books.length === 0}
      emptyMessage="No best sellers to show yet."
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </CarouselPanel>
  );
}
