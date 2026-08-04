"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  author: string;
}

export default function BookCoverCard({ image, title, author }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="w-[139px]"
    >
      <div className="relative h-[208px] overflow-hidden rounded-[8px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h3 className="mt-3 line-clamp-1 text-[16px] font-medium">{title}</h3>

      <p className="mt-1 text-[14px] text-[#777]">by {author}</p>
    </motion.div>
  );
}
