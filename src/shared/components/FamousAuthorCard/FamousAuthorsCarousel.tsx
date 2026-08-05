"use client";

import { CarouselShell } from "../CarouselShell";
import FamousAuthorCard from "./FamousAuthorCard";
import type { FamousAuthorsCarouselProps } from "./types";

// Exact measurements pulled from Figma
const SECTION_GAP = 24; // header -> card row
const ROW_GAP = 18; // spacing between profile cards

export default function FamousAuthorsCarousel({
  title,
  subtitle,
  authors,
  onAuthorClick,
  className = "",
}: FamousAuthorsCarouselProps) {
  if (!authors?.length) return null;

  return (
    <CarouselShell
      title={title}
      subtitle={subtitle}
      sectionGap={SECTION_GAP}
      rowGap={ROW_GAP}
      className={className}
    >
      {authors.map((author) => (
        <FamousAuthorCard
          key={author.id}
          author={author}
          onClick={onAuthorClick}
        />
      ))}
    </CarouselShell>
  );
}
