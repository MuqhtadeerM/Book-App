"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const techBooks: Book[] = [
  {
    id: "tb-1",
    title: "Clean Code",
    author: "Robert C. Martin",
    coverImageUrl: "/Technology/tech-1.png",
  },
  {
    id: "tb-2",
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    coverImageUrl: "/Technology/tech-2.png",
  },
  {
    id: "tb-3",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    coverImageUrl: "/Technology/tech-3.png",
  },
  {
    id: "tb-4",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    coverImageUrl: "/Technology/tech-4.png",
  },
  {
    id: "tb-5",
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    coverImageUrl: "/Technology/tech-5.png",
  },
  {
    id: "tb-6",
    title: "System Design Interview",
    author: "Alex Xu",
    coverImageUrl: "/Technology/tech-6.png",
  },
  {
    id: "tb-7",
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    coverImageUrl: "/Technology/tech-7.png",
  },
  {
    id: "tb-8",
    title: "The Phoenix Project",
    author: "Gene Kim",
    coverImageUrl: "/Technology/tech-8.png",
  },
  {
    id: "tb-9",
    title: "Refactoring",
    author: "Martin Fowler",
    coverImageUrl: "/Technology/tech-9.png",
  },
];

export default function TechBooksSection() {
  return (
    <BookCarousel
      title="Tech Books"
      subtitle="Trending books among readers"
      books={techBooks}
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
