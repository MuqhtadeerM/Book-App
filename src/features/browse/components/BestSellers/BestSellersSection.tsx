// src/features/browse/components/BestSellers/BestSellersSection.tsx
"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const bestSellerBooks: Book[] = [
  {
    id: "1",
    title: "A Million to One",
    author: "Tony Faggioli",
    coverImageUrl: "/covers/a-million-to-one.jpg",
  },
  {
    id: "2",
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    coverImageUrl: "/covers/richest-man-babylon.jpg",
  },
  {
    id: "3",
    title: "I Know How This Story Ends",
    author: "Nate Robb",
    coverImageUrl: "/covers/i-know-how-this-story-ends.jpg",
  },
  {
    id: "4",
    title: "The Imperfections",
    author: "Angelina Aludo",
    coverImageUrl: "/covers/the-imperfections.jpg",
  },
  {
    id: "5",
    title: "A Girl Named Harper",
    author: "Kara Jefferies",
    coverImageUrl: "/covers/a-girl-named-harper.jpg",
  },
  {
    id: "6",
    title: "Why Women Don't Talk Money",
    author: "Sharon Sim, Serena Wong",
    coverImageUrl: "/covers/why-women-dont-talk-money.jpg",
  },
  {
    id: "7",
    title: "What If This Is Grief",
    author: "Katy Parker",
    coverImageUrl: "/covers/what-if-this-is-grief.jpg",
  },
  {
    id: "8",
    title: "The Universe and Dr. Einstein",
    author: "Lincoln Barnett",
    coverImageUrl: "/covers/universe-dr-einstein.jpg",
  },
  {
    id: "9",
    title: "The Rules We Live By",
    author: "Destyn A'Dante Land",
    coverImageUrl: "/covers/rules-we-live-by.jpg",
  },
];

export default function BestSellersSection() {
  return (
    <BookCarousel
      title="Our Best Sellers"
      subtitle="Trending books among readers"
      books={bestSellerBooks}
    />
  );
}
