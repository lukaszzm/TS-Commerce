import { CartContext } from "@/contexts/cart-context";
import { Cart } from "@/schemas/cart-schema";
import { Product } from "@/types";
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
} from "@/utils/cart-local-storage";
import { useCallback, useMemo, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>(getCartFromLocalStorage() ?? []);

  const addItem = useCallback((product: Product, quantity: number = 1) => {
    setCart((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newCart = [...items, { product, quantity }];

      saveCartToLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const removeItem = useCallback((productId: number) => {
    setCart((items) => {
      const newCart = items.filter((item) => item.product.id !== productId);

      saveCartToLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    saveCartToLocalStorage([]);
    setCart([]);
  }, []);

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
