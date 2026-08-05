"use client";

import { cn } from "@/shared/lib/utils";
import RecommendationBook from "./RecommendationBook";
import { RecommendationItem } from "./recommendation-data";

interface RecommendationCardProps {
  item: RecommendationItem;
  preview?: boolean;
  className?: string;
}

export default function RecommendationCard({
  item,
  preview = false,
  className,
}: RecommendationCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        h-[475px]
        w-[792px]
        shrink-0
        overflow-hidden
        rounded-[18px]
        border
        transition-all
        duration-300
      `,
        preview
          ? "border-[#D8EEF7] bg-[#EAF9FF]"
          : "border-[#F1DDC9] bg-[#FFF5EC]",
        className,
      )}
      style={{
        backgroundColor: item.background,
      }}
    >
      {/* Decorative Circle */}

      <div
        className={cn(
          "absolute right-[-70px] top-[-70px] h-[260px] w-[260px] rounded-full opacity-70",
          preview ? "bg-[#D5F2FF]" : "bg-[#FFE8D2]",
        )}
      />

      {/* Content */}

      <div className="px-8 pt-8">
        <h2 className="text-[28px] font-semibold leading-[38px] text-[#2E2E2E]">
          {item.title}
        </h2>

        <p className="mt-4 max-w-[470px] text-[18px] leading-[36px] text-[#666666]">
          {item.description}
        </p>
      </div>

      {/* Books */}

      <div className="absolute bottom-8 left-8 flex gap-4">
        {item.books.map((book) => (
          <RecommendationBook
            key={book.id}
            title={book.title}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}
