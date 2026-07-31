import type { Genre, HeroContent } from "@/features/browse/types/browse.types";

// Drop matching images into /public/images/genres/ with these exact filenames.
export const genres: Genre[] = [
  {
    id: "people",
    label: "People",
    image: "/images/genres/people.jpg",
    href: "/browse?genre=people",
  },
  {
    id: "history",
    label: "History",
    image: "/images/genres/history.jpg",
    href: "/browse?genre=history",
  },
  {
    id: "politics",
    label: "Politics",
    image: "/images/genres/politics.jpg",
    href: "/browse?genre=politics",
  },
  {
    id: "kids",
    label: "Kids",
    image: "/images/genres/kids.jpg",
    href: "/browse?genre=kids",
  },
  {
    id: "education",
    label: "Education",
    image: "/images/genres/education.jpg",
    href: "/browse?genre=education",
  },
];

export const heroContent: HeroContent = {
  title: "The Echo of our",
  highlight: "Silent Pages",
  description:
    "A global publishing technology pavilion designed to run alongside major international book fairs",
  ctaLabel: "Explore More",
  ctaHref: "/browse",
  featuredBook: {
    id: "life-of-the-wild",
    title: "Life of the Wild",
    coverImage: "/images/hero-book-cover.png",
  },
};
