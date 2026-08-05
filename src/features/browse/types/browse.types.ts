export type Genre = {
  id: string;
  label: string;
  image: string;
  href: string;
};

export type FeaturedBook = {
  id: string;
  title: string;
  coverImage: string;
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  featuredBook: FeaturedBook;
};
