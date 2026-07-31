"use client";

import { useGenres } from "@/features/browse/hooks/useGenres";
import { GenrePillCard } from "@/features/browse/components/GenrePillCard";
import { Skeleton } from "@/shared/ui/skeleton";

export function GenreCarousel() {
  const { data: genres, isLoading, error } = useGenres();

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-foreground sm:text-xl">
        Dive into Different Genres
      </h2>

      {isLoading && (
        <div className="mt-4 flex gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-16 w-28 shrink-0 rounded-full sm:h-20 sm:w-36"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="mt-4 text-sm text-destructive">
          Couldn't load genres right now. Try refreshing the page.
        </p>
      )}

      {!isLoading && !error && genres.length === 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          No genres to show yet.
        </p>
      )}

      {!isLoading && !error && genres.length > 0 && (
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {genres.map((genre) => (
            <GenrePillCard key={genre.id} genre={genre} />
          ))}
        </div>
      )}
    </section>
  );
}
