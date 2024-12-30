"use client";

import { CartEmpty } from "@/components/cart-empty";
import { CartListItem } from "@/components/cart-list-item";
import { useCart } from "@/hooks/use-cart";

export function CartList() {
  const { cart } = useCart();

  return (
    <div className="md:col-span-2">
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <CartListItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
