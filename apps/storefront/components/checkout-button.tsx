import { useCart } from "@/hooks/use-cart";
import { Button } from "@workspace/ui/components/button";

export function CheckoutButton() {
  const { itemsCount } = useCart();

  return (
    <Button className="w-full mt-6" disabled={itemsCount === 0}>
      Checkout
    </Button>
  );
}
