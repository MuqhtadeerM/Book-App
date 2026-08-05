"use client";

import { CarouselShell } from "../CarouselShell";
import AuthorCard from "./AuthorCard";
import type { AuthorCarouselProps } from "./types";

// Exact measurement pulled from Figma (outer section gap: header -> card row)
const SECTION_GAP = 34;
const ROW_GAP = 21.4; // spacing between cards (matches BookCarousel's row rhythm)

export default function AuthorCarousel({
  title,
  subtitle,
  items,
  onToggleFavorite,
  onChat,
  className = "",
}: AuthorCarouselProps) {
  if (!items?.length) return null;

  return (
    <CarouselShell
      title={title}
      subtitle={subtitle}
      sectionGap={SECTION_GAP}
      rowGap={ROW_GAP}
      className={className}
    >
      {items.map((item) => (
        <AuthorCard
          key={item.id}
          item={item}
          onToggleFavorite={onToggleFavorite}
          onChat={onChat}
        />
      ))}
    </CarouselShell>
  );
}
