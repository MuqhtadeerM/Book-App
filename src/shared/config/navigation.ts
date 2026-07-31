import {
  BookOpen,
  Compass,
  Heart,
  Home,
  Library,
  Search,
  ShoppingCart,
} from "lucide-react";

export const navigation = [
  { title: "Home", href: "/", icon: Home },
  { title: "Browse", href: "/browse", icon: Compass },
  { title: "Library", href: "/library", icon: Library },
  { title: "Wishlist", href: "/wishlist", icon: Heart },
  { title: "Cart", href: "/cart", icon: ShoppingCart },
];

export const secondaryNavigation = [
  { title: "Search", href: "/search", icon: Search },
  { title: "Reading", href: "/reading", icon: BookOpen },
];
