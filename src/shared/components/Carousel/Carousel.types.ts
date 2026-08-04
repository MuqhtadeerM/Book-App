import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;

  showPrev?: boolean;

  showNext?: boolean;

  buttonPosition?: number;

  cardWidth?: number;
}
