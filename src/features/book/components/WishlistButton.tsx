"use client";

import { Heart } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleWishlist } from "@/store/wishlist/wishlistSlice";

interface WishlistButtonProps {
  bookId: string;
  className?: string;
}

export function WishlistButton({ bookId, className }: WishlistButtonProps) {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector((state) =>
    state.wishlist.bookIds.includes(bookId),
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-pressed={isWishlisted}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleWishlist(bookId));
      }}
      className={cn("rounded-full bg-background/80 backdrop-blur", className)}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-colors",
          isWishlisted ? "fill-primary text-primary" : "text-muted-foreground",
        )}
      />
    </Button>
  );
}
