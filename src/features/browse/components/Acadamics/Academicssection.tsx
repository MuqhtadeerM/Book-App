"use client";

import { BookCarousel, type Book } from "@/shared/components/BookCard";

const academicsBooks: Book[] = [
  {
    id: "ac-1",
    title: "Indian Polity",
    author: "M Laxmikanth",
    coverImageUrl: "/academic/academics-1.png",
  },
  {
    id: "ac-2",
    title: "UPSC Civil Services Courseware",
    author: "GKP",
    coverImageUrl: "/academic/academics-2.png",
  },
  {
    id: "ac-3",
    title: "Physics Textbook for Class XII",
    author: "NCERT",
    coverImageUrl: "/academic/academics-3.png",
  },
  {
    id: "ac-4",
    title: "Konar Tamil Urai",
    author: "Konar Publications",
    coverImageUrl: "/academic/academics-4.png",
  },
  {
    id: "ac-5",
    title: "Learn English in 30 Days",
    author: "Martin Manser",
    coverImageUrl: "/academic/academics-5.png",
  },
  {
    id: "ac-6",
    title: "General Knowledge 2026",
    author: "Arihant Experts",
    coverImageUrl: "/academic/academics-6.png",
  },
  {
    id: "ac-7",
    title: "Objective Mathematics",
    author: "R.D. Sharma",
    coverImageUrl: "/academic/academics-7.png",
  },
  {
    id: "ac-8",
    title: "Modern Indian History",
    author: "Bipan Chandra",
    coverImageUrl: "/academic/academics-8.png",
  },
  {
    id: "ac-9",
    title: "Quantitative Aptitude",
    author: "R.S. Aggarwal",
    coverImageUrl: "/academic/academics-9.png",
  },
];

export default function AcademicsSection() {
  return (
    <BookCarousel
      title="Academics"
      subtitle="Trending books among readers"
      books={academicsBooks}
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
