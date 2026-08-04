"use client";

import Carousel from "@/shared/components/Carousel";
import BookCard from "@/shared/components/BookCard";

import { bestSellers } from "./best-sellers-data";

export default function BestSellerSlider() {
  return (
    <Carousel showPrev showNext buttonPosition={1185}>
      {bestSellers.map((book) => (
        <BookCard key={book.id} {...book} buttonText="Read & Chat" />
      ))}
    </Carousel>
  );
}
