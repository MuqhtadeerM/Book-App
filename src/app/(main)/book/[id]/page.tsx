// src/app/(main)/browse/[bookId]/page.tsx
import { notFound } from "next/navigation";
import BookDetailView from "@/features/browse/components/BookDetail/BookDetailView";
import { getBookById } from "@/features/browse/components/BookDetail/getBookById";

interface BookDetailPageProps {
  params: Promise<{ bookId: string }>;
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { bookId } = await params;
  const book = await getBookById(bookId);

  if (!book) {
    notFound();
  }

  return <BookDetailView book={book} />;
}
