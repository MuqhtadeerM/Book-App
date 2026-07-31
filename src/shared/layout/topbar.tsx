"use client";

import Link from "next/link";
import { Menu, Search, Heart, ShoppingCart } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar } from "@/store/ui/uiSlice";
import { setQuery } from "@/store/search/searchSlice";

export function Topbar() {
  const dispatch = useAppDispatch();
  const wishlistCount = useAppSelector(
    (state) => state.wishlist.bookIds.length,
  );
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const searchQuery = useAppSelector((state) => state.search.query);

  return (
    <header className="sticky top-0 z-40 flex h-[var(--topbar-height)] items-center gap-3 border-b bg-background/80 px-4 backdrop-blur sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => dispatch(toggleSidebar())}
      >
        <Menu />
      </Button>

      <div className="relative max-w-xl flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search book title or author..."
          value={searchQuery}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          className="rounded-full border-none bg-muted pl-11"
        />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="relative hidden sm:inline-flex"
          aria-label="Wishlist"
        >
          <Link href="/wishlist">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {wishlistCount}
              </span>
            )}
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          size="icon"
          className="relative hidden sm:inline-flex"
          aria-label="Cart"
        >
          <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
        </Button>

        <Button asChild className="rounded-full px-5">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
