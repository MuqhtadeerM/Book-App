// src/features/browse/components/SpeakWithAuthors/SpeakWithAuthorsSection.tsx
"use client";

import {
  AuthorCarousel,
  type AuthorBookPairing,
} from "@/shared/components/AuthorCard";

const authorPairings: AuthorBookPairing[] = [
  {
    id: "sa-1",
    authorName: "William Shakespeare",
    authorImageUrl: "/authors/shakespeare.png",
    bookTitle: "The Adventures of Tom Sawyer",
    bookAuthorLabel: "by Mark Twain",
    bookCoverImageUrl: "/covers/tom-sawyer.png",
  },
  {
    id: "sa-2",
    authorName: "Sun Tzu",
    authorImageUrl: "/authors/sun-tzu.png",
    bookTitle: "The Art of War",
    bookAuthorLabel: "by Sun Tzu",
    bookCoverImageUrl: "/covers/art-of-war.png",
  },
  {
    id: "sa-3",
    authorName: "Thiruvalluvar",
    authorImageUrl: "/authors/thiruvalluvar.png",
    bookTitle: "Thirukkural",
    bookAuthorLabel: "by Thiruvalluvar",
    bookCoverImageUrl: "/covers/thirukkural.png",
  },
  {
    id: "sa-3",
    authorName: "Thiruvalluvar",
    authorImageUrl: "/authors/thiruvalluvar.png",
    bookTitle: "Thirukkural",
    bookAuthorLabel: "by Thiruvalluvar",
    bookCoverImageUrl: "/covers/thirukkural.png",
  },
];

export default function SpeakWithAuthorsSection() {
  return (
    <AuthorCarousel
      title="Speak with Authors"
      items={authorPairings}
      onToggleFavorite={(id) => {
        // wire up your favorite API / state here
        console.log("toggle favorite", id);
      }}
      onChat={(id) => {
        // navigate to the author chat page
        console.log("chat with", id);
      }}
    />
  );
}
