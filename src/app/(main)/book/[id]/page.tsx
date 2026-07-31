import { BookDetailPage } from "@/features/book/BookDetailPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <BookDetailPage bookId={id} />;
}
