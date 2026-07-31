import { useQuery } from "@tanstack/react-query";

import { getBookById } from "@/features/book/api/book.api";

export function useBook(id: string) {
  return useQuery({
    queryKey: ["book", id],
    queryFn: () => getBookById(id),
  });
}
