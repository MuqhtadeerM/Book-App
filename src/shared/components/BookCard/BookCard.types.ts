export interface BookCardProps {
  id: number;

  title: string;

  author: string;

  image: string;

  buttonText?: string;

  favourite?: boolean;

  onFavourite?: () => void;

  onAction?: () => void;
}
