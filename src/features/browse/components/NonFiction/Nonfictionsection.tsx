"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const nonFictionBooks: Book[] = [
  {
    id: "nf-1",
    title: "Why Women Don't Talk Money",
    author: "Sharon Sim, Serena Wong",
    coverImageUrl: "/covers1/crime-1.png",
  },
  {
    id: "nf-2",
    title: "What If This Is Grief",
    author: "Katy Parker",
    coverImageUrl: "/covers1/crime-2.png",
  },
  {
    id: "nf-3",
    title: "The Universe and Dr. Einstein",
    author: "Lincoln Barnett",
    coverImageUrl: "/covers1/crime-3.png",
  },
  {
    id: "nf-4",
    title: "The Rules We Live By",
    author: "Destyn A'Dante Land",
    coverImageUrl: "/covers1/crime-4.png",
  },
  {
    id: "nf-5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverImageUrl: "/covers1/crime-5.png",
  },
  {
    id: "nf-6",
    title: "Atomic Habits",
    author: "James Clear",
    coverImageUrl: "/covers1/crime-6.png",
  },
  {
    id: "nf-7",
    title: "Educated",
    author: "Tara Westover",
    coverImageUrl: "/covers1/crime-7.png",
  },
  {
    id: "nf-8",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverImageUrl: "/covers1/crime-8.png",
  },
  {
    id: "nf-9",
    title: "The Rebirth of You",
    author: "J. Doe",
    coverImageUrl: "/covers1/crime-9.png",
  },
];

export default function NonFictionSection() {
  return (
    <BookCarousel
      title="Non Fiction Books"
      subtitle="Trending books among readers"
      books={nonFictionBooks}
      onToggleFavorite={(id) => {
        // wire up your favorite API / state here
        console.log("toggle favorite", id);
      }}
      onReadChat={(id) => {
        // navigate to the reader/chat page
        console.log("read & chat", id);
      }}
    />
  );
}
