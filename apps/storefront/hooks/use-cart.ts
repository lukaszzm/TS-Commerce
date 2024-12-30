import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return cartContext;
}
