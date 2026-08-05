import type { BookDetail } from "@/features/browse/components/BookDetail/types";

/**
 * TODO: Replace this with a real fetch — e.g.
 *   const res = await fetch(`${process.env.API_URL}/books/${id}`);
 *   if (!res.ok) return null;
 *   return res.json();
 *
 * Kept as a mock so the detail page renders end-to-end while you wire up
 * the real backend.
 */
export async function getBookById(id: string): Promise<BookDetail | null> {
  return {
    id,
    title: "Death before Breakfast",
    coverImageUrl: "/covers/death-before-breakfast.png",
    writtenByLabel: "ZoverseVault",
    tags: [
      "Classic",
      "Books to read",
      "Historical Fiction",
      "Historical Fiction",
      "Historical Fiction",
    ],
    breadcrumbCategory: "Browse",
    description:
      "A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader's pride ignites a conflict, the greatest warrior withdraws, leaving his comrades to face devastating losses. Explore a world of mighty heroes and bitter rivalries, where courage and honor are tested by fate. Witness the brutal dance of battle, the clash of bronze, and the complexities that bind even enemies. Can prophecy alter the course of war, or is destiny set in stone?",
    product: {
      publisher: "AlKaySa",
      publicationDate: "21 December 2025",
      language: "English",
      printLength: "150 pages",
    },
    author: {
      name: "J.K Rowling",
      imageUrl: "/authors/jk-rowling.png",
      bio: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.",
      profileHref: "/authors/jk-rowling",
    },
    reviews: [
      {
        id: "rv-1",
        reviewerName: "Vimuja",
        avatarUrl: "/reviewers/vimuja.png",
        text: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter series.",
      },
      {
        id: "rv-2",
        reviewerName: "Vimuja",
        avatarUrl: "/reviewers/vimuja.png",
        text: "British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world. British author best known for creating the Harry Potter series.",
      },
    ],
    relatedBooks: [
      {
        id: "rel-1",
        title: "The Past Is Rising",
        author: "The Psychology of Money — Morgan Housel",
        coverImageUrl: "/covers/the-past-is-rising.png",
      },
      {
        id: "rel-2",
        title: "The Past Is Rising",
        author: "The Psychology of Money — Morgan Housel",
        coverImageUrl: "/covers/the-past-is-rising.png",
      },
      {
        id: "rel-3",
        title: "The Past Is Rising",
        author: "The Psychology of Money — Morgan Housel",
        coverImageUrl: "/covers/the-past-is-rising.png",
      },
      {
        id: "rel-4",
        title: "The Past Is Rising",
        author: "The Psychology of Money — Morgan Housel",
        coverImageUrl: "/covers/the-past-is-rising.png",
      },
    ],
  };
}
