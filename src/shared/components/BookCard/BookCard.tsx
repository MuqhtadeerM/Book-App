"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/shared/ui/button";

export interface BookCardProps {
  id: number;
  title: string;
  author: string;
  image: string;

  buttonText?: string;

  favourite?: boolean;

  onFavourite?: () => void;

  onAction?: () => void;
}

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
        transition: {
          duration: 0.25,
        },
      }}
      className="w-[191px] shrink-0"
    >
      {/* Cover */}

      <div className="relative overflow-hidden rounded-[12px] bg-[#EFEFEF]">
        <div className="relative h-[260px] w-full">
          <Image src={image} alt={title} fill className="object-cover" />

          {/* Wishlist */}

          <button
            onClick={onFavourite}
            className="
              absolute
              right-3
              top-3

              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full
              bg-white
              shadow-md
              transition

              hover:scale-105
            "
          >
            <Heart
              size={18}
              className={
                favourite ? "fill-red-500 text-red-500" : "text-red-500"
              }
            />
          </button>
        </div>
      </div>

      {/* Info */}

      <div className="mt-4">
        <h3 className="line-clamp-2 text-[16px] font-semibold text-[#232323]">
          {title}
        </h3>

        <p className="mt-1 text-[14px] text-[#7A7A7A]">{author}</p>

        <Button
          onClick={onAction}
          className="
            mt-4
            h-[42px]
            w-full
            rounded-[8px]
            bg-[#1F1F1F]
            text-[14px]
            font-medium

            hover:bg-black
          "
        >
          {buttonText}
        </Button>
      </div>
    </motion.article>
  );
}
