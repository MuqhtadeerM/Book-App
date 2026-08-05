import type { Book } from "@/shared/components/BookCard";

export interface BookDetailProductInfo {
  publisher: string;
  publicationDate: string;
  language: string;
  printLength: string;
}

export interface BookDetailAuthor {
  name: string;
  imageUrl: string;
  bio: string;
  profileHref?: string;
}

export interface BookDetailReview {
  id: string;
  reviewerName: string;
  avatarUrl?: string;
  text: string;
}

export interface BookDetail {
  id: string;
  title: string;
  coverImageUrl: string;
  writtenByLabel: string; // e.g. "ZoverseVault"
  tags: string[];
  description: string;
  breadcrumbCategory: string; // e.g. "Browse"
  product: BookDetailProductInfo;
  author: BookDetailAuthor;
  reviews: BookDetailReview[];
  relatedBooks: Book[];
}
