# Book App

A Next.js (App Router) + TypeScript book discovery app with browsable
categories (Best Sellers, Crime Fiction, Non Fiction, Academics, Business,
Tech Books, Classics), author spotlights, and a book detail/reader page.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** [lucide-react](https://lucide.dev/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Next.js version note:** dynamic route `params` are typed as a `Promise`
> in this project (Next.js 15+ convention — `const { bookId } = await params`).
> If you're on Next.js 14 or earlier, `params` is a plain object instead and
> the `await` will need to be removed in `src/app/(main)/browse/[bookId]/page.tsx`.

## Project Structure

```
src/
  app/
    (main)/
      browse/
        page.tsx              # category listing page (sidebar layout)
        [bookId]/
          page.tsx             # book detail page (dynamic route)
  shared/
    components/
      BookCard/                # reusable book cover card + horizontal carousel
        BookCard.tsx
        BookCarousel.tsx
        types.ts
        index.ts
      AuthorCard/               # "Speak with Authors" — author + book pairing card
        AuthorCard.tsx
        AuthorCarousel.tsx
        types.ts
        index.ts
      FamousAuthorCard/         # "Famous Authors" — square photo + name overlay
        FamousAuthorCard.tsx
        FamousAuthorsCarousel.tsx
        types.ts
        index.ts
      CarouselShell/            # shared header + arrow-scroll shell used by
        CarouselShell.tsx       # BookCarousel, AuthorCarousel, FamousAuthorsCarousel
        index.ts
  features/
    browse/
      components/
        BestSellers/BestSellersSection.tsx
        CrimeFiction/CrimeFictionSection.tsx
        NonFiction/NonFictionSection.tsx
        Academics/AcademicsSection.tsx
        Business/BusinessSection.tsx
        TechBooks/TechBooksSection.tsx
        Classics/ClassicsSection.tsx
        SpeakWithAuthors/SpeakWithAuthorsSection.tsx
        FamousAuthors/FamousAuthorsSection.tsx
        BookDetail/
          BookDetailView.tsx     # detail page content (About, Reviews, etc.)
          getBookById.ts         # mock data fetch — replace with real API/DB call
          types.ts
```

## Shared Components

### `BookCard` / `BookCarousel`
The core reusable unit for every category row (Best Sellers, Crime Fiction,
Non Fiction, Academics, Business, Tech Books, Classics). A `BookCarousel`
takes a `title`, optional `subtitle`, and a `books` array, and renders a
horizontally scrollable row of `BookCard`s with left/right arrow controls.

```tsx
import { BookCarousel, type Book } from "@/shared/components/BookCard";

const books: Book[] = [
  { id: "1", title: "...", author: "...", coverImageUrl: "/covers/1.png" },
];

<BookCarousel title="Best Sellers" subtitle="Trending books" books={books} />
```

Clicking a card's cover/title navigates to `/browse/{book.id}` (the book
detail page). The heart icon toggles favorite via `onToggleFavorite`, and
"Read & Chat" calls `onReadChat` if provided, otherwise it also navigates to
the detail page.

If a `coverImageUrl` 404s or is missing, the card falls back to a placeholder
icon + title instead of a broken image.

### `AuthorCard` / `AuthorCarousel`
Used for "Speak with Authors" — pairs an author portrait with a book cover
side by side, plus a "Chat with Me" CTA.

### `FamousAuthorCard` / `FamousAuthorsCarousel`
Used for "Famous Authors" — a simple square photo grid with the author's name
overlaid at the bottom.

### `CarouselShell`
Internal shell (title + subtitle + left/right scroll arrows + scrollable row)
shared by all three carousel components above, so new card types only need to
build the card itself, not the scrolling/header behavior.

## Adding a New Category Section

1. Create `src/features/browse/components/<Category>/<Category>Section.tsx`.
2. Import `BookCarousel` and a `books: Book[]` array (hardcoded for now, or
   fetched from an API).
3. Render `<BookCarousel title="..." subtitle="..." books={books} />`.
4. Add `<CategorySection />` to `BrowsePage.tsx`.

> Once there are many categories, consider replacing per-category files with
> a single data-driven `CategorySection` that fetches books by category slug
> from an API — happy to build that refactor when ready.

## Book Detail Page

Route: `src/app/(main)/browse/[bookId]/page.tsx`

Renders inside the existing `(main)` layout (sidebar included automatically).
Fetches data via `getBookById(bookId)` — currently a **mock** that always
returns sample data; replace its implementation with a real API/DB call.
Includes: breadcrumb, cover with Read/Chat Now actions, tags, About the Book
(expandable), Product Details, About the Author (expandable bio), Reviews,
and a "You might also like" row (reuses `BookCarousel`).

## Images

Static covers/author photos go in `public/` (e.g. `public/covers/`,
`public/authors/`) and are referenced as `/covers/filename.png`. For
externally hosted images, whitelist the domain in `next.config.ts`:

```ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "your-image-host.com" }],
  },
};
```

Missing/broken images degrade gracefully to a placeholder instead of
breaking the layout.

## Known Follow-ups

- [ ] Replace hardcoded `books` arrays in each `*Section.tsx` with real API data.
- [ ] Replace `getBookById` mock with a real API/DB lookup.
- [ ] Add real cover/author image assets to `public/`.
- [ ] Confirm `params` handling matches your installed Next.js version.
