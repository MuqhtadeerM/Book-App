"use client";

import Image from "next/image";

import { Heart } from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/shared/ui/button";

import { BookCardProps } from "./BookCard.types";

export default function BookCard({
  title,
  author,
  image,
  favourite = false,
  buttonText = "Read & Chat",
  onFavourite,
  onAction,
}: BookCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        w-[191px]
        shrink-0
      "
    >
      {/* Cover */}

      <div
        className="
          relative
          h-[236px]
          overflow-hidden
          rounded-[10px]
          bg-[#ECECEC]
        "
      >
        <Image src={image} alt={title} fill className="object-cover" />

        {/* Favourite */}

        <button
          onClick={onFavourite}
          className="
            absolute
            right-2
            top-2

            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            bg-white

            shadow-md
          "
        >
          <Heart
            size={16}
            className={favourite ? "fill-red-500 text-red-500" : "text-red-500"}
          />
        </button>
      </div>

      {/* Title */}

      <h3
        className="
          mt-3
          line-clamp-2
          text-[15px]
          font-medium
          text-[#262626]
        "
      >
        {title}
      </h3>

      {/* Author */}

      <p
        className="
          mt-1
          text-[13px]
          text-[#2F80ED]
        "
      >
        {author}
      </p>

      {/* Action */}

      <Button
        onClick={onAction}
        className="
          mt-3
          h-[34px]
          w-full
          rounded-[6px]
          bg-[#1D1D1D]
          text-[13px]
          font-medium
          hover:bg-black
        "
      >
        {buttonText}
      </Button>
    </motion.article>
  );
}
