import { saveCart } from "@/actions/cart";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { toCurrencyString } from "@/utils/to-currency-string";
import { Button } from "@workspace/ui/components/button";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { startTransition } from "react";

interface CartListItemProps {
  product: Product;
  quantity: number;
}

export function CartListItem({ product, quantity }: CartListItemProps) {
  const { removeItem } = useCart();

  const removeHandler = () => {
    startTransition(async () => {
      const newCart = removeItem(product.id);
      await saveCart(newCart);
    });
  };

  return (
    <div className="flex items-center space-x-4 py-4">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        className="w-24 max-h-auto"
        priority
      />
      <div className="flex-grow">
        <h2 className="font-semibold">
          {product.name} x {quantity}
        </h2>
        <p className="text-sm text-muted-foreground">
          {toCurrencyString(product.price)}
        </p>
      </div>
      <Button variant="outline" size="icon" onClick={removeHandler}>
        <Trash2Icon />
        <span className="sr-only">Remove item from the cart</span>
      </Button>
    </div>
  );
}
