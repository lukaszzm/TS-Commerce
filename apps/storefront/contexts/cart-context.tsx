import { Cart } from "@/schemas/cart-schema";
import { Product } from "@/types";
import { createContext } from "react";

export type CartContextType = {
  cart: Cart;
  itemsCount: number;
  totalAmount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
