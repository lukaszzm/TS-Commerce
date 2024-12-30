import { Route } from "@/config/routes";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <p className="text-lg font-medium">Your cart is empty</p>
      <p className="text-muted-foreground">
        Looks like you haven&apos;t added any items to your cart yet.
      </p>
      <Button asChild className="mt-2">
        <Link href={Route.Products}>Continue Shopping</Link>
      </Button>
    </div>
  );
}
