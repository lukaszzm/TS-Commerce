import { CartList } from "@/components/cart-list";
import { CartSummary } from "@/components/cart-summary";

export default function CartPage() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <CartList />
      <CartSummary />
    </div>
  );
}
