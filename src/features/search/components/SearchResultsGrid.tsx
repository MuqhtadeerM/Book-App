import type { Book } from "@/features/book/types/book.types";
import { BookCard } from "@/features/book/components/BookCard";

interface SearchResultsGridProps {
  books: Book[];
  query: string;
}

export function SearchResultsGrid({ books, query }: SearchResultsGridProps) {
  if (books.length === 0) {
    return (
      <p className="mt-6 text-sm text-muted-foreground">
        No results for "{query}". Try a different title or author.
      </p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
