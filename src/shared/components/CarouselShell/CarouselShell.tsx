"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselShellProps {
  /** Section heading, e.g. "Speak with Authors" */
  title: string;
  /** Section subheading, e.g. "Trending books among readers" */
  subtitle?: string;
  /** Gap between the header row and the scrollable card row (px) */
  sectionGap?: number;
  /** Gap between individual cards in the scroll row (px) */
  rowGap?: number;
  /** The cards themselves — map your items into children before passing them in */
  children: ReactNode;
  className?: string;
}

export default function CarouselShell({
  title,
  subtitle,
  sectionGap = 28,
  rowGap = 21.4,
  children,
  className = "",
}: CarouselShellProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`flex w-full flex-col py-6 ${className}`}
      style={{ gap: sectionGap }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-1 text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ gap: rowGap }}
      >
        {children}
      </div>
    </section>
  );
}
