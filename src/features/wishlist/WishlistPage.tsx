"use client";

import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { WishlistGrid } from "@/features/wishlist/components/WishlistGrid";

export function WishlistPage() {
  const { bookIds, isEmpty } = useWishlist();

  if (isEmpty) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Your wishlist is empty
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tap the heart on any book to save it here.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Wishlist</h1>
      <div className="mt-6">
        <WishlistGrid bookIds={bookIds} />
      </div>
    </div>
  );
}
