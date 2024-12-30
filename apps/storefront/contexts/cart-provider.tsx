"use client";

import { CartContext } from "@/contexts/cart-context";
import { Cart } from "@/schemas/cart-schema";
import { Product } from "@/types";
import { useCallback, useMemo, useOptimistic } from "react";

interface CartProviderProps {
  children: React.ReactNode;
  initCart: Cart | null;
}

export function CartProvider({ children, initCart }: CartProviderProps) {
  const [cart, setCart] = useOptimistic<Cart>(initCart ?? []);

  const addItem = useCallback(
    (product: Product, quantity: number = 1) => {
      const existingItem = cart.find((item) => item.product.id === product.id);

      if (existingItem) {
        return cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newCart = [...cart, { product, quantity }];

      setCart(newCart);
      return newCart;
    },
    [cart, setCart]
  );

  const removeItem = useCallback(
    (productId: number) => {
      const newCart = cart.filter((item) => item.product.id !== productId);

      setCart(newCart);
      return newCart;
    },
    [cart, setCart]
  );

  const clearCart = useCallback(() => setCart([]), [setCart]);

  const value = useMemo(
    () => ({
      cart,
      itemsCount: cart.reduce((count, item) => count + item.quantity, 0),
      totalAmount: cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
      addItem,
      removeItem,
      clearCart,
    }),
    [cart, addItem, removeItem, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
