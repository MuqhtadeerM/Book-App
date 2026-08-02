"use client";

import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQuery } from "@/store/search/searchSlice";

export function Header() {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.search.query);

  const wishlistCount = useAppSelector(
    (state) => state.wishlist.bookIds.length,
  );

  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <header className="flex w-full items-center justify-between">
      {/* Search */}
      <div className="relative h-[47px] w-full max-w-[718px]">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9B9B9B]"
        />

        <Input
          value={search}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search book title or author..."
          className="h-full rounded-full border-[#E7E4D7] bg-white pl-12 shadow-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]"
        />
      </div>

      {/* Actions */}
      <div className="ml-[34px] flex items-center gap-[22px]">
        <Link href="/wishlist" className="relative transition hover:scale-110">
          <Heart size={20} strokeWidth={1.8} className="text-[#5A5A5A]" />

          {wishlistCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#2F80ED] text-[10px] text-white">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link href="/cart" className="relative transition hover:scale-110">
          <ShoppingCart
            size={20}
            strokeWidth={1.8}
            className="text-[#5A5A5A]"
          />

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#2F80ED] text-[10px] text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <Button
          asChild
          variant="outline"
          className="h-[37px] rounded-full border-[#444] px-7"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
