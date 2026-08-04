"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, User } from "lucide-react";
import type { AuthorBookPairing } from "./types";

interface AuthorCardProps {
  item: AuthorBookPairing;
  onToggleFavorite?: (id: string) => void;
  onChat?: (id: string) => void;
}

// Exact measurements pulled from Figma
const CARD_WIDTH = 351.4024963378906;
const CARD_HEIGHT = 343.2475891113281;
const CARD_BORDER_WIDTH = 0.74;
const CARD_BORDER_COLOR = "#EAEAE6";

const AUTHOR_IMAGE_WIDTH = 164.58091735839844;
const AUTHOR_IMAGE_HEIGHT = 244.64730834960938;
const AUTHOR_IMAGE_TOP = 8.16;
const AUTHOR_IMAGE_LEFT = 11.12;
const AUTHOR_IMAGE_RADIUS = 8.9;

const BOOK_IMAGE_WIDTH = 163.09820556640625;
const BOOK_IMAGE_HEIGHT = 244.64730834960938;
const BOOK_IMAGE_TOP = 8;
const BOOK_IMAGE_RADIUS = 8.9;

export default function AuthorCard({
  item,
  onToggleFavorite,
  onChat,
}: AuthorCardProps) {
  const [authorImageFailed, setAuthorImageFailed] = useState(false);
  const [bookImageFailed, setBookImageFailed] = useState(false);

  return (
    <div
      className="relative shrink-0 snap-start rounded-xl bg-white"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        border: `${CARD_BORDER_WIDTH}px solid ${CARD_BORDER_COLOR}`,
      }}
    >
      {/* Author portrait (left) */}
      <div
        className="absolute overflow-hidden bg-gray-100"
        style={{
          width: AUTHOR_IMAGE_WIDTH,
          height: AUTHOR_IMAGE_HEIGHT,
          top: AUTHOR_IMAGE_TOP,
          left: AUTHOR_IMAGE_LEFT,
          borderTopLeftRadius: AUTHOR_IMAGE_RADIUS,
          borderBottomLeftRadius: AUTHOR_IMAGE_RADIUS,
        }}
      >
        {authorImageFailed || !item.authorImageUrl ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <User className="h-8 w-8 text-gray-400" />
          </div>
        ) : (
          <Image
            src={item.authorImageUrl}
            alt={item.authorName}
            fill
            sizes="165px"
            className="object-cover"
            onError={() => setAuthorImageFailed(true)}
          />
        )}
      </div>

      {/* Book cover (right) */}
      <div
        className="absolute overflow-hidden bg-gray-100"
        style={{
          width: BOOK_IMAGE_WIDTH,
          height: BOOK_IMAGE_HEIGHT,
          top: BOOK_IMAGE_TOP,
          left: AUTHOR_IMAGE_LEFT + AUTHOR_IMAGE_WIDTH,
          borderTopRightRadius: BOOK_IMAGE_RADIUS,
          borderBottomRightRadius: BOOK_IMAGE_RADIUS,
        }}
      >
        {bookImageFailed || !item.bookCoverImageUrl ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 px-2 text-center">
            <span className="line-clamp-3 text-xs text-gray-500">
              {item.bookTitle}
            </span>
          </div>
        ) : (
          <Image
            src={item.bookCoverImageUrl}
            alt={item.bookTitle}
            fill
            sizes="164px"
            className="object-cover"
            onError={() => setBookImageFailed(true)}
          />
        )}
      </div>

      {/* Favorite heart */}
      <button
        type="button"
        aria-label={
          item.isFavorited ? "Remove from favorites" : "Add to favorites"
        }
        onClick={() => onToggleFavorite?.(item.id)}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white"
      >
        <Heart
          className="h-4 w-4"
          fill={item.isFavorited ? "#ef4444" : "none"}
          stroke={item.isFavorited ? "#ef4444" : "#111827"}
        />
      </button>

      {/* Text + CTA */}
      <div
        className="absolute bottom-0 left-0 flex flex-col gap-2 px-3 pb-3"
        style={{ top: AUTHOR_IMAGE_TOP + AUTHOR_IMAGE_HEIGHT + 8, right: 0 }}
      >
        <div>
          <p className="text-base font-semibold text-gray-900">
            {item.bookTitle}
          </p>
          <p className="text-sm text-gray-500">{item.bookAuthorLabel}</p>
        </div>

        <button
          type="button"
          onClick={() => onChat?.(item.id)}
          className="mt-auto w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Chat with Me
        </button>
      </div>
    </div>
  );
}
