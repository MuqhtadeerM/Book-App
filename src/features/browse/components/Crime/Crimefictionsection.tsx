"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const crimeFictionBooks: Book[] = [
  {
    id: "cf-1",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    coverImageUrl: "/fiction/fiction-1.png",
  },
  {
    id: "cf-2",
    title: "Gone Girl",
    author: "Gillian Flynn",
    coverImageUrl: "/fiction/fiction-2.png",
  },
  {
    id: "cf-3",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    coverImageUrl: "/fiction/fiction-3.png",
  },
  {
    id: "cf-4",
    title: "In the Woods",
    author: "Tana French",
    coverImageUrl: "/fiction/fiction-4.png",
  },
  {
    id: "cf-5",
    title: "The Big Sleep",
    author: "Raymond Chandler",
    coverImageUrl: "/fiction/fiction-5.png",
  },
  {
    id: "cf-6",
    title: "Sharp Objects",
    author: "Gillian Flynn",
    coverImageUrl: "/fiction/fiction-6.png",
  },
  {
    id: "cf-7",
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    coverImageUrl: "/fiction/fiction-7.png",
  },
  {
    id: "cf-8",
    title: "And Then There Were None",
    author: "Agatha Christie",
    coverImageUrl: "/fiction/fiction-8.png",
  },
  {
    id: "cf-9",
    title: "The Cuckoo's Calling",
    author: "Robert Galbraith",
    coverImageUrl: "/fiction/fiction-9.png",
  },
];

export default function CrimeFictionSection() {
  return (
    <BookCarousel
      title="Crime Fiction"
      subtitle="Trending books among readers"
      books={crimeFictionBooks}
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
