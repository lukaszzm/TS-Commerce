import { checkoutAction } from "@/actions/checkout-action";
import { Route } from "@/config/routes";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function CheckoutButton() {
  const { itemsCount, cart } = useCart();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleCheckout() {
    setError(null);

    startTransition(async () => {
      const result = await checkoutAction({ items: cart });

      if (!result.ok) {
        setError(error);
        return;
      }

      router.push(Route.OrderConfirmation + `?orderId=${result.data}`);
    });
  }

  return (
    <div className="flex flex-col gap-2 pt-8">
      {error && <p className="text-destructive">{error}</p>}
      <Button
        className="w-full"
        onClick={handleCheckout}
        disabled={itemsCount === 0 || isPending}
      >
        {isPending ? "Processing..." : "Checkout"}
      </Button>
    </div>
  );
}
