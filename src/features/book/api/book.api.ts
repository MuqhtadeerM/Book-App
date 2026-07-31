import type { Book } from "@/features/book/types/book.types";

export async function getBookById(id: string): Promise<Book | null> {
  // Placeholder until a real endpoint exists.
  return {
    id,
    title: "Untitled Book",
    author: "Unknown Author",
    coverImage: "/images/hero-book-cover.png",
  };
}
