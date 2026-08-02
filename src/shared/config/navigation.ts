import {
  Globe2,
  Star,
  Crown,
  BadgeHelp,
  BriefcaseBusiness,
  Monitor,
  Smile,
  ScrollText,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Browse",
    href: "/browse",
    icon: Globe2,
  },
  {
    title: "New Arrivals",
    href: "/new-arrivals",
    icon: Star,
  },
  {
    title: "Best Sellers",
    href: "/best-sellers",
    icon: Crown,
  },
  {
    title: "Self help",
    href: "/self-help",
    icon: BadgeHelp,
  },
  {
    title: "Business",
    href: "/business",
    icon: BriefcaseBusiness,
  },
  {
    title: "Tech",
    href: "/tech",
    icon: Monitor,
  },
  {
    title: "Kids",
    href: "/kids",
    icon: Smile,
  },
  {
    title: "Classics",
    href: "/classics",
    icon: ScrollText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
] as const;
