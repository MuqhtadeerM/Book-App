"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const classicsBooks: Book[] = [
  {
    id: "cl-1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImageUrl: "/Classic/classics-1.png",
  },
  {
    id: "cl-2",
    title: "1984",
    author: "George Orwell",
    coverImageUrl: "/Classic/classics-2.png",
  },
  {
    id: "cl-3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImageUrl: "/Classic/classics-3.png",
  },
  {
    id: "cl-4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImageUrl: "/Classic/classics-4.png",
  },
  {
    id: "cl-5",
    title: "Moby-Dick",
    author: "Herman Melville",
    coverImageUrl: "/Classic/classics-5.png",
  },
  {
    id: "cl-6",
    title: "War and Peace",
    author: "Leo Tolstoy",
    coverImageUrl: "/Classic/classics-6.png",
  },
  {
    id: "cl-7",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    coverImageUrl: "/Classic/classics-7.png",
  },
  {
    id: "cl-8",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    coverImageUrl: "/Classic/classics-8.png",
  },
  {
    id: "cl-9",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImageUrl: "/Classic/classics-9.png",
  },
];

export default function ClassicsSection() {
  return (
    <BookCarousel
      title="Classics"
      subtitle="Trending books among readers"
      books={classicsBooks}
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
