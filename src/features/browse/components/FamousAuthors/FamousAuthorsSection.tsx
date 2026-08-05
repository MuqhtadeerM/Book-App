"use client";

import {
  FamousAuthorsCarousel,
  type FamousAuthor,
} from "@/shared/components/FamousAuthorCard";

const famousAuthors: FamousAuthor[] = [
  {
    id: "fa-1",
    name: "J.K. Rowling",
    imageUrl: "/authors/jk-rowling.png",
  },
  {
    id: "fa-2",
    name: "Chetan Bhagat",
    imageUrl: "/authors/chetan-bhagat.png",
  },
  {
    id: "fa-3",
    name: "Amish Tripathi",
    imageUrl: "/authors/amish-tripathi.png",
  },
  {
    id: "fa-4",
    name: "Arundhati Roy",
    imageUrl: "/authors/arundhati-roy.png",
  },
  {
    id: "fa-5",
    name: "Ashwin Sanghi",
    imageUrl: "/authors/ashwin-sanghi.png",
  },
  {
    id: "fa-6",
    name: "Ruskin Bond",
    imageUrl: "/authors/ruskin-bond.png",
  },
  {
    id: "fa-7",
    name: "Devdutt Pattanaik",
    imageUrl: "/authors/devdutt-pattanaik.png",
  },
  {
    id: "fa-7",
    name: "Devdutt Pattanaik",
    imageUrl: "/authors/devdutt-pattanaik.png",
  },
  {
    id: "fa-7",
    name: "Devdutt Pattanaik",
    imageUrl: "/authors/devdutt-pattanaik.png",
  },
  {
    id: "fa-7",
    name: "Devdutt Pattanaik",
    imageUrl: "/authors/devdutt-pattanaik.png",
  },
];

export default function FamousAuthorsSection() {
  return (
    <FamousAuthorsCarousel
      title="Famous Authors"
      authors={famousAuthors}
      onAuthorClick={(id) => {
        // navigate to the author's profile/chat page
        console.log("author clicked", id);
      }}
    />
  );
}
