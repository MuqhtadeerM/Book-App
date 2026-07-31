import { useAppSelector } from "@/store/hooks";

// The wishlist slice only stores book IDs. Once a books API/cache exists
// (react-query keyed by book id), join against it here to return full Book
// objects instead of bare IDs.
export function useWishlist() {
  const bookIds = useAppSelector((state) => state.wishlist.bookIds);

  return {
    bookIds,
    isEmpty: bookIds.length === 0,
  };
}
