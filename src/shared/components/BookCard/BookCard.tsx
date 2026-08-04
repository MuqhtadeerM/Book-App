"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Book } from "./types";

interface BookCardProps {
  book: Book;
  onToggleFavorite?: (bookId: string) => void;
  onReadChat?: (bookId: string) => void;
}

// Exact measurements pulled from Figma
const CARD_WIDTH = 191.0792999267578;
const CARD_HEIGHT = 359.87884521484375;

const IMAGE_WIDTH = 168.1497802734375;
const IMAGE_HEIGHT = 249.1674041748047;
const IMAGE_TOP_OFFSET = 8.41;
const IMAGE_RADIUS = 6.11;

export default function BookCard({
  book,
  onToggleFavorite,
  onReadChat,
}: BookCardProps) {
  return (
    <div
      className="flex shrink-0 flex-col items-center snap-start  bg-[#EAEAE6] "
      style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden bg-gray-100 shadow-sm"
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          marginTop: IMAGE_TOP_OFFSET,
          borderRadius: IMAGE_RADIUS,
        }}
      >
        <Image
          src={book.coverImageUrl}
          alt={book.title}
          fill
          sizes="168px"
          className="object-cover"
        />

        <button
          type="button"
          aria-label={
            book.isFavorited ? "Remove from favorites" : "Add to favorites"
          }
          onClick={() => onToggleFavorite?.(book.id)}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
        >
          <Heart
            className="h-4 w-4"
            fill={book.isFavorited ? "#ef4444" : "none"}
            stroke={book.isFavorited ? "#ef4444" : "#111827"}
          />
        </button>
      </div>

      {/* Meta */}
      <div className="mt-3 flex flex-col gap-1" style={{ width: CARD_WIDTH }}>
        <p className="line-clamp-2 text-sm font-medium text-gray-900">
          {book.title}
        </p>
        {book.authorHref ? (
          <Link
            href={book.authorHref}
            className="text-sm text-blue-600 hover:underline"
          >
            {book.author}
          </Link>
        ) : (
          <span className="text-sm text-blue-600">{book.author}</span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onReadChat?.(book.id)}
        style={{ width: CARD_WIDTH }}
        className="mt-2 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Read &amp; Chat
      </button>
    </div>
  );
}
