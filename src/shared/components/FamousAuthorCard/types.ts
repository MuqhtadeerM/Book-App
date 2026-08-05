export interface FamousAuthor {
  id: string;
  name: string;
  imageUrl: string;
  href?: string;
}

export interface FamousAuthorsCarouselProps {
  title: string;
  subtitle?: string;
  authors: FamousAuthor[];
  onAuthorClick?: (id: string) => void;
  className?: string;
}
