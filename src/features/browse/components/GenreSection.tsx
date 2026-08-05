"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const genres = [
  { id: 1, title: "People", image: "/images/genres/people.jpg" },
  { id: 2, title: "History", image: "/images/genres/history.jpg" },
  { id: 3, title: "Politics", image: "/images/genres/politics.jpg" },
  { id: 4, title: "Kids", image: "/images/genres/kids.jpg" },
  { id: 5, title: "Education", image: "/images/genres/education.jpg" },
];

export default function GenreSection() {
  return (
    <section className="w-full">
      <h2 className="text-[28px] font-semibold leading-[36px] text-[#2E2E2E]">
        Dive into Different Genres
      </h2>

      <div className="mt-10 flex justify-between">
        {genres.map((genre, index) => (
          <motion.button
            key={genre.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="relative h-[60px] w-[184px] overflow-hidden rounded-full"
          >
            <Image
              src={genre.image}
              alt={genre.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute inset-0 flex items-center justify-center text-[18px] font-medium text-white">
              {genre.title}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
