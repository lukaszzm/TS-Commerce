import { CartContext, CartItem } from "@/contexts/cart-context";
import { Product } from "@/types";
import { useCallback, useMemo, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...items, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: number) => {
    setCartItems((items) =>
      items.filter((item) => item.product.id !== productId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = useMemo(
    () => ({
      items: cartItems,
      itemsCount: cartItems.reduce((count, item) => count + item.quantity, 0),
      totalAmount: cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
      addItem,
      removeItem,
      clearCart,
    }),
    [cartItems, addItem, removeItem, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
