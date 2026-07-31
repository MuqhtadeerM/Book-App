import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromCart, clearCart } from "@/store/cart/cartSlice";

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return {
    items,
    subtotal,
    remove: (id: string) => dispatch(removeFromCart(id)),
    clear: () => dispatch(clearCart()),
  };
}
