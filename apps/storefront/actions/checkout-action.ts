"use server";

import { clearCart } from "@/actions/cart";
import { ApiRoute } from "@/config/routes";
import { api } from "@/lib/api";
import { Cart } from "@/schemas/cart-schema";

interface Payload {
  items: Cart;
}

export async function checkoutAction(
  payload: Payload
): Promise<{ ok: boolean; data: string }> {
  try {
    const result = await api.post<{ orderId: string }>(ApiRoute.Checkout, {
      items: payload.items,
    });

    const orderId = result.data.orderId;

    await clearCart();

    return { ok: true, data: orderId };
  } catch {
    return {
      ok: false,
      data: "An error occurred while processing the shopping cart, please try again later.",
    };
  }
}
