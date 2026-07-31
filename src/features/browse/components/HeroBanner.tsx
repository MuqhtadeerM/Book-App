import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { heroContent } from "@/features/browse/api/browse.api";

export function HeroBanner() {
  const { title, highlight, description, ctaLabel, ctaHref, featuredBook } =
    heroContent;

  return (
    <section className="relative overflow-hidden rounded-[var(--radius)] bg-secondary px-6 py-10 shadow-[var(--shadow-sm)] sm:px-10 sm:py-14 md:py-16">
      <div
        aria-hidden
        className="absolute right-0 top-1/2 hidden h-72 w-72 -translate-y-1/2 translate-x-10 rounded-full bg-primary/10 sm:block md:h-80 md:w-80"
      />

      <div className="relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {title} <span className="text-primary">{highlight}</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>

          <Button
            asChild
            variant="link"
            className="group mt-6 h-auto gap-2 px-0 text-sm font-semibold text-foreground hover:text-primary hover:no-underline"
          >
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="relative mx-auto h-56 w-40 shrink-0 sm:h-64 sm:w-48 md:mx-0">
          <div className="absolute inset-0 rotate-[8deg] rounded-2xl shadow-[var(--shadow-lg)] transition-transform duration-[var(--duration-normal)] hover:rotate-[4deg]">
            <Image
              src={featuredBook.coverImage}
              alt={`Featured book: ${featuredBook.title}`}
              fill
              sizes="(min-width: 640px) 192px, 160px"
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
