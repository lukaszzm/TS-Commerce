"use server";

import { cookies } from "next/headers";
import { Cart, cartSchema } from "@/schemas/cart-schema";

const CART_COOKIE_NAME = "ts-commerce-cart";

export const saveCart = async (cart: Cart) => {
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE_NAME, JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
};

export const clearCart = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(CART_COOKIE_NAME);
};

export const getCart = async (): Promise<Cart | null> => {
  const cookieStore = await cookies();
  const cart = cookieStore.get(CART_COOKIE_NAME);

  if (!cart) {
    return null;
  }

  try {
    const parsedCart = JSON.parse(cart.value);
    const zodCart = cartSchema.parse(parsedCart);

    return zodCart;
  } catch {
    return null;
  }
};
