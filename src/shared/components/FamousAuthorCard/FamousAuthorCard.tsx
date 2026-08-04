"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import type { FamousAuthor } from "./types";

interface FamousAuthorCardProps {
  author: FamousAuthor;
  onClick?: (id: string) => void;
}

// Exact measurement pulled from Figma
const CARD_SIZE = 141.73045349121094;
const CARD_RADIUS = 12.22;

export default function FamousAuthorCard({
  author,
  onClick,
}: FamousAuthorCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onClick?.(author.id)}
      className="relative shrink-0 snap-start overflow-hidden bg-gray-100 text-left"
      style={{
        width: CARD_SIZE,
        height: CARD_SIZE,
        borderRadius: CARD_RADIUS,
      }}
    >
      {imageFailed || !author.imageUrl ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-200">
          <User className="h-8 w-8 text-gray-400" />
        </div>
      ) : (
        <Image
          src={author.imageUrl}
          alt={author.name}
          fill
          sizes="142px"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      )}

      {/* Name overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 pb-2 pt-6">
        <p className="truncate text-sm font-medium text-white">{author.name}</p>
      </div>
    </button>
  );
}
