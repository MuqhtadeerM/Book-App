import Image from "next/image";
import Link from "next/link";

import type { Genre } from "@/features/browse/types/browse.types";

interface GenrePillCardProps {
  genre: Genre;
}

export function GenrePillCard({ genre }: GenrePillCardProps) {
  return (
    <Link
      href={genre.href}
      className="group relative h-16 w-28 shrink-0 overflow-hidden rounded-full transition-transform duration-[var(--duration-fast)] hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-20 sm:w-36"
    >
      <Image
        src={genre.image}
        alt=""
        fill
        sizes="144px"
        className="object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
      <span className="relative z-10 flex h-full w-full items-center justify-center text-sm font-medium text-white">
        {genre.label}
      </span>
    </Link>
  );
}
