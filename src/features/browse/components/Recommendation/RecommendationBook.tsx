"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RecommendationBookProps {
  title: string;
  image: string;
}

export default function RecommendationBook({
  title,
  image,
}: RecommendationBookProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        h-[230px]
        w-[155px]
        overflow-hidden
        rounded-[8px]
        bg-[#ECECEC]
        shrink-0
      "
    >
      <Image src={image} alt={title} fill className="object-cover" />
    </motion.div>
  );
}
