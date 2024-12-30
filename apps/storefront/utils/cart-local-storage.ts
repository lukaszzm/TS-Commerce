import { Cart, cartSchema } from "@/schemas/cart-schema";

const CART_LOCAL_STORAGE_KEY = "cart";

export function getCartFromLocalStorage(): Cart | null {
  const cart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);

  if (!cart) {
    return null;
  }

  try {
    const parsedCart = JSON.parse(cart);
    const zodCart = cartSchema.parse(parsedCart);

    return zodCart;
  } catch {
    return null;
  }
}

export function saveCartToLocalStorage(cart: Cart) {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
}

export function removeCartFromLocalStorage() {
  localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
}
