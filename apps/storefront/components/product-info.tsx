import { AddToCart } from "@/components/add-to-cart";
import { Product } from "@/types";
import { toCurrencyString } from "@/utils/to-currency-string";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex-1 space-y-6">
      <h1 className="text-4xl font-semibold">{product.name}</h1>
      <p className="text-2xl font-semibold">
        {toCurrencyString(product.price)}
      </p>
      <p className="text-lg font-muted-foreground">{product.description}</p>
      <AddToCart product={product} />
      <p className="text-green-600">In Stock</p>
    </div>
  );
}
