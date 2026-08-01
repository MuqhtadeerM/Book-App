"use client";

import { useCart } from "@/features/cart/hooks/useCart";
import { CartItemRow } from "@/features/cart/components/CartItemRow";
import { Button } from "@/shared/ui/button";

export function CartPage() {
  const { items, subtotal, remove } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Browse the catalog and add a book to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-foreground">Cart</h1>

      <div className="mt-6 rounded-[var(--radius)] border bg-card p-4">
        {items.map((item) => (
          <CartItemRow key={item.id} {...item} onRemove={remove} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Subtotal</span>
        <span className="text-lg font-semibold text-foreground">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      <Button className="mt-4 w-full">Checkout</Button>
    </div>
  );
}
