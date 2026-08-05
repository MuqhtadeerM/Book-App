"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronDown, Heart, User } from "lucide-react";
import { BookCarousel } from "@/shared/components/BookCard";
import type { BookDetail } from "./types";

interface BookDetailViewProps {
  book: BookDetail;
}

export default function BookDetailView({ book }: BookDetailViewProps) {
  const router = useRouter();
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-gray-500">
        <Link href="/browse" className="hover:text-gray-700">
          {book.breadcrumbCategory}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-gray-700">{book.title}</span>
      </nav>

      {/* Cover + main info */}
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Cover with Read / Chat Now CTA */}
        <div className="mx-auto w-full max-w-[220px] shrink-0 md:mx-0">
          <div className="relative aspect-[3/4.4] w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm">
            <Image
              src={book.coverImageUrl}
              alt={book.title}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => router.push(`/reader/${book.id}`)}
              className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              Read
            </button>
            <button
              type="button"
              onClick={() => router.push(`/chat/${book.id}`)}
              className="flex-1 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Chat Now
            </button>
          </div>
        </div>

        {/* Title, tags, description */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {book.title}
            </h1>
            <button
              type="button"
              aria-label={
                isFavorited ? "Remove from favorites" : "Add to favorites"
              }
              onClick={() => setIsFavorited((v) => !v)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50"
            >
              <Heart
                className="h-4 w-4"
                fill={isFavorited ? "#ef4444" : "none"}
                stroke={isFavorited ? "#ef4444" : "#111827"}
              />
            </button>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Written by :{" "}
            <span className="text-gray-700">{book.writtenByLabel}</span>
          </p>

          {book.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {book.tags.map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              About the Book
            </h2>
            <p
              className={`mt-2 text-sm leading-relaxed text-gray-600 ${
                isDescExpanded ? "" : "line-clamp-3"
              }`}
            >
              {book.description}
            </p>
            <button
              type="button"
              onClick={() => setIsDescExpanded((v) => !v)}
              className="mt-1 flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
            >
              {isDescExpanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  isDescExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-base font-semibold text-gray-900">
              Product Details
            </h2>
            <dl className="mt-3 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="text-gray-500">Publisher :</dt>
                <dd className="text-gray-800">{book.product.publisher}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gray-500">Publication date :</dt>
                <dd className="text-gray-800">
                  {book.product.publicationDate}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gray-500">Language :</dt>
                <dd className="text-gray-800">{book.product.language}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gray-500">Print length :</dt>
                <dd className="text-gray-800">{book.product.printLength}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* About the Author */}
      <div className="mt-10">
        <h2 className="text-base font-semibold text-gray-900">
          About the Author
        </h2>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
            {book.author.imageUrl ? (
              <Image
                src={book.author.imageUrl}
                alt={book.author.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <User className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            {book.author.profileHref ? (
              <Link
                href={book.author.profileHref}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                {book.author.name}
              </Link>
            ) : (
              <p className="text-sm font-semibold text-gray-900">
                {book.author.name}
              </p>
            )}
            <p
              className={`mt-1 text-sm leading-relaxed text-gray-600 ${
                isBioExpanded ? "" : "line-clamp-2"
              }`}
            >
              {book.author.bio}
            </p>
            <button
              type="button"
              onClick={() => setIsBioExpanded((v) => !v)}
              className="mt-1 flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
            >
              {isBioExpanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  isBioExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {book.reviews.length > 0 && (
        <div className="mt-10">
          <h2 className="text-base font-semibold text-gray-900">Reviews</h2>
          <div className="mt-3 flex flex-col gap-4">
            {book.reviews.map((review) => (
              <div key={review.id} className="flex gap-3">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  {review.avatarUrl ? (
                    <Image
                      src={review.avatarUrl}
                      alt={review.reviewerName}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {review.reviewerName}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* You might also like */}
      {book.relatedBooks.length > 0 && (
        <div className="mt-4">
          <BookCarousel title="You might also like" books={book.relatedBooks} />
        </div>
      )}
    </div>
  );
}
