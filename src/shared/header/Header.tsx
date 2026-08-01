"use client";

import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQuery } from "@/store/search/searchSlice";

export default function Header() {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state) => state.search.query);
  const wishlistCount = useAppSelector(
    (state) => state.wishlist.bookIds.length,
  );
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <header className="flex w-full items-center justify-between pt-[33px]">
      {/* Search */}
      <div className="relative h-[47px] w-[818px]">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9B9B9B]"
        />

        <Input
          value={search}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search book title or author..."
          className="
            h-full
            rounded-full
            border-[#E7E4D7]
            bg-white
            pl-12
            text-[14px]
            shadow-none
            focus-visible:ring-2
            focus-visible:ring-[#2F80ED]
          "
        />
      </div>

      {/* Actions */}
      <div className="flex h-[37px] items-center gap-[25px]">
        <Link
          href="/wishlist"
          className="group relative transition-transform duration-200 hover:scale-110"
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            className="text-[#595959] transition-colors group-hover:text-[#2F80ED]"
          />

          {wishlistCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#2F80ED] text-[10px] text-white">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link
          href="/cart"
          className="group relative transition-transform duration-200 hover:scale-110"
        >
          <ShoppingCart
            size={18}
            strokeWidth={1.8}
            className="text-[#595959] transition-colors group-hover:text-[#2F80ED]"
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
          className="
            h-[37px]
            rounded-full
            border-[#434343]
            px-6
            text-[14px]
            font-medium
            hover:bg-[#2F80ED]
            hover:text-white
          "
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
