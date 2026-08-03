"use client";

import BookCoverCard from "./BookCoverCard";
import { newArrivals } from "./new-arrivals";

export default function NewArrivalsSection() {
  return (
    <section className="w-full max-w-[2000px]">
      <div>
        <h2 className="text-[28px] font-semibold leading-[36px] text-[#2F2F2F]">
          New Arrivals
        </h2>

        <p className="mt-1 text-[16px] text-[#777]">
          Trending books among readers
        </p>
      </div>

      <div className="mt-8 flex gap-[27px]">
        {newArrivals.map((book) => (
          <BookCoverCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
