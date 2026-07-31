export type CarouselBook = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
};

// Placeholder data until the backend endpoint exists.
const placeholderBooks: CarouselBook[] = [];

export function useNewArrivals() {
  return {
    data: placeholderBooks,
    isLoading: false,
    error: null as Error | null,
  };
}
