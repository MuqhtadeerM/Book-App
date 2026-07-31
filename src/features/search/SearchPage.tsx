"use client";

import type { Book } from "@/features/book/types/book.types";
import { useSearch } from "@/features/search/hooks/useSearch";
import { SearchResultsGrid } from "@/features/search/components/SearchResultsGrid";

const placeholderResults: Book[] = [];

export function SearchPage() {
  const { query } = useSearch();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">
        {query ? `Results for "${query}"` : "Search"}
      </h1>
      <SearchResultsGrid books={placeholderResults} query={query} />
    </div>
  );
}
