import Link from "next/link";

import type { Book } from "@/features/book/types/book.types";
import { BookCoverThumb } from "@/features/book/components/BookCoverThumb";
import { WishlistButton } from "@/features/book/components/WishlistButton";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`} className="group w-36 shrink-0 sm:w-40">
      <div className="relative">
        <BookCoverThumb src={book.coverImage} alt={book.title} />
        <WishlistButton bookId={book.id} className="absolute right-2 top-2" />
      </div>
      <h3 className="mt-2 truncate text-sm font-medium text-foreground">
        {book.title}
      </h3>
      <p className="truncate text-xs text-muted-foreground">{book.author}</p>
    </Link>
  );
}
