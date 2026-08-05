"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const businessBooks: Book[] = [
  {
    id: "bz-1",
    title: "The Second-Best Business Book Ever Written",
    author: "Tom Marks",
    coverImageUrl: "/business/business-1.png",
  },
  {
    id: "bz-2",
    title: "International Business (Text and Cases)",
    author: "P. Subba Rao",
    coverImageUrl: "/business/business-2.png",
  },
  {
    id: "bz-3",
    title: "Start Your Own Business",
    author: "The Staff of Entrepreneur Media, Inc.",
    coverImageUrl: "/business/business-3.png",
  },
  {
    id: "bz-4",
    title: "The Little Book of Indian Business",
    author: "Nithin Kamath",
    coverImageUrl: "/business/business-4.png",
  },
  {
    id: "bz-5",
    title: "International Business Strategy",
    author: "Alain Verbeke",
    coverImageUrl: "/business/business-5.png",
  },
  {
    id: "bz-6",
    title: "Zero to One",
    author: "Peter Thiel",
    coverImageUrl: "/business/business-6.png",
  },
  {
    id: "bz-7",
    title: "Good to Great",
    author: "Jim Collins",
    coverImageUrl: "/business/business-7.png",
  },
  {
    id: "bz-8",
    title: "The Lean Startup",
    author: "Eric Ries",
    coverImageUrl: "/business/business-8.png",
  },
  {
    id: "bz-9",
    title: "Shoe Dog",
    author: "Phil Knight",
    coverImageUrl: "/business/business-9.png",
  },
];

export default function BusinessSection() {
  return (
    <BookCarousel
      title="Business"
      subtitle="Trending books among readers"
      books={businessBooks}
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
