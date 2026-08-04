export interface BestSeller {
  id: number;
  title: string;
  author: string;
  image: string;
}

export const bestSellers: BestSeller[] = [
  {
    id: 1,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "/images/best-sellers/book-1.png",
  },
  {
    id: 2,
    title: "The Richest Man In Babylon",
    author: "George S. Clason",
    image: "/images/best-sellers/book-2.png",
  },
  {
    id: 3,
    title: "I Know How This Story Ends",
    author: "Nate Robins",
    image: "/images/best-sellers/book-3.png",
  },
  {
    id: 4,
    title: "Memory",
    author: "Morgan Housel",
    image: "/images/best-sellers/book-4.png",
  },
  {
    id: 5,
    title: "Again Named Harper",
    author: "Kara Jefferies",
    image: "/images/best-sellers/book-5.png",
  },
  {
    id: 6,
    title: "Million To One",
    author: "Tony Faggioli",
    image: "/images/best-sellers/book-6.png",
  },
];
