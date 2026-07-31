"use client";

import { useBook } from "@/features/book/hooks/useBook";
import { BookCoverThumb } from "@/features/book/components/BookCoverThumb";
import { WishlistButton } from "@/features/book/components/WishlistButton";
import { Skeleton } from "@/shared/ui/skeleton";

interface BookDetailPageProps {
  bookId: string;
}

export function BookDetailPage({ bookId }: BookDetailPageProps) {
  const { data: book, isLoading, error } = useBook(bookId);

  if (isLoading) {
    return (
      <div className="flex gap-6">
        <Skeleton className="h-72 w-52 rounded-xl" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-7 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Book not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We couldn't find that book. It may have been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div className="relative w-52 shrink-0">
        <BookCoverThumb src={book.coverImage} alt={book.title} />
        <WishlistButton bookId={book.id} className="absolute right-2 top-2" />
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-foreground">{book.title}</h1>
        <p className="mt-1 text-muted-foreground">{book.author}</p>
      </div>
    </div>
  );
}
