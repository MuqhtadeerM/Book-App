import type { CarouselBook } from "@/features/browse/hooks/useNewArrivals";

const placeholderBooks: CarouselBook[] = [];

export function useRecommended() {
  return {
    data: placeholderBooks,
    isLoading: false,
    error: null as Error | null,
  };
}
