export interface AuthorBookPairing {
  id: string;
  authorName: string;
  authorImageUrl: string;
  bookTitle: string;
  bookAuthorLabel: string; // e.g. "by Morgan Housel"
  bookCoverImageUrl: string;
  isFavorited?: boolean;
  chatHref?: string;
}

export interface AuthorCarouselProps {
  title: string;
  subtitle?: string;
  items: AuthorBookPairing[];
  onToggleFavorite?: (id: string) => void;
  onChat?: (id: string) => void;
  className?: string;
}
