import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { toCurrencyString } from "@/utils/to-currency-string";
import { Button } from "@workspace/ui/components/button";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";

interface CartListItemProps {
  product: Product;
  quantity: number;
}

export function CartListItem({ product, quantity }: CartListItemProps) {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="relative size-24 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
      <div className="flex-grow">
        <h2 className="font-semibold">
          {product.name} x {quantity}
        </h2>
        <p className="text-sm text-muted-foreground">
          {toCurrencyString(product.price)}
        </p>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => removeItem(product.id)}
      >
        <Trash2Icon />
        <span className="sr-only">Remove item from the cart</span>
      </Button>
    </div>
  );
}
