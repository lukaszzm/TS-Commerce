"use client";

import { CheckoutButton } from "@/components/checkout-button";
import { useCart } from "@/hooks/use-cart";
import { toCurrencyString } from "@/utils/to-currency-string";

export function CartSummary() {
  const { totalAmount } = useCart();

  const tax = totalAmount * 0.23;

  const totalWithTax = totalAmount + tax;

  return (
    <div className="p-6 rounded-sm bg-muted/50">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{toCurrencyString(totalAmount)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{toCurrencyString(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{toCurrencyString(totalWithTax)}</span>
        </div>
      </div>
      <CheckoutButton />
    </div>
  );
}
