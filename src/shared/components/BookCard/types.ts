export interface Book {
  id: string;
  title: string;
  author: string;
  authorHref?: string;
  coverImageUrl: string;
  isFavorited?: boolean;
}

export interface BookCarouselProps {
  /** Section heading, e.g. "Our Best Sellers" */
  title: string;
  /** Section subheading, e.g. "Trending books among readers" */
  subtitle?: string;
  books: Book[];
  /** Called when the heart icon is clicked */
  onToggleFavorite?: (bookId: string) => void;
  /** Called when "Read & Chat" is clicked */
  onReadChat?: (bookId: string) => void;
  /** Optional className to extend/override the section wrapper */
  className?: string;
}
