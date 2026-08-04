"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/shared/ui/button";
import { CARD } from "./BookCard.styles";

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
      style={{
        width: CARD.width,
        height: CARD.height,
      }}
      className="shrink-0 rounded-[12px] border-[0.76px] border-[#EDEDED] bg-white p-[11px]"
    >
      {/* Cover */}

      <div
        style={{
          width: CARD.imageWidth,
          height: CARD.imageHeight,
          borderRadius: CARD.imageRadius,
        }}
        className="relative overflow-hidden bg-[#EFEFEF]"
      >
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
            className={favourite ? "fill-red-500 text-red-500" : "text-red-500"}
          />
        </button>
      </div>

      {/* Info */}

      <div className="mt-3" style={{ width: CARD.imageWidth }}>
        <h3 className="line-clamp-2 text-[14px] font-semibold leading-tight text-[#232323]">
          {title}
        </h3>

        <p className="mt-1 truncate text-[13px] text-[#7A7A7A]">{author}</p>

        <Button
          onClick={onAction}
          style={{ width: CARD.imageWidth }}
          className="
            mt-3
            h-[30.57px]
            rounded-[8px]
            bg-[#1F1F1F]
            px-[18.34px]
            py-[7.64px]
            text-[13px]
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
