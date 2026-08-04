export interface RecommendationBook {
  id: number;
  title: string;
  image: string;
}

export interface RecommendationItem {
  id: number;
  title: string;
  description: string;
  background: string;
  books: RecommendationBook[];
}

export const recommendations: RecommendationItem[] = [
  {
    id: 1,
    title: "Recommended For You",
    description:
      "A global publishing technology pavilion designed to run alongside major international book fairs.",
    background: "#FFF5EC",
    books: [
      {
        id: 1,
        title: "Book 1",
        image: "/images/recommended/book-1.png",
      },
      {
        id: 2,
        title: "Book 2",
        image: "/images/recommended/book-2.png",
      },
      {
        id: 3,
        title: "Book 3",
        image: "/images/recommended/book-3.png",
      },
      {
        id: 4,
        title: "Book 4",
        image: "/images/recommended/book-4.png",
      },
    ],
  },
  {
    id: 2,
    title: "Recommended For You",
    description:
      "A global publishing technology pavilion designed to run alongside major international book fairs.",
    background: "#E8F9FF",
    books: [
      {
        id: 5,
        title: "Book 5",
        image: "/images/recommended/book-5.png",
      },
      {
        id: 6,
        title: "Book 6",
        image: "/images/recommended/book-6.png",
      },
      {
        id: 7,
        title: "Book 7",
        image: "/images/recommended/book-7.png",
      },
      {
        id: 8,
        title: "Book 8",
        image: "/images/recommended/book-8.png",
      },
    ],
  },
];
