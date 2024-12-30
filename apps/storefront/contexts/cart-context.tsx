import { Product } from "@/types";
import { createContext } from "react";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  itemsCount: number;
  totalAmount: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
