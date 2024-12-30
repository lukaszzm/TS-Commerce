import { Product } from "@/types";
import { toCurrencyString } from "@/utils/to-currency-string";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="hover:bg-muted/40 duration-75 p-4 rounded-md space-y-2 max-w-56"
    >
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-muted-foreground truncate">{product.description}</p>
      <p className="font-semibold">{toCurrencyString(product.price)}</p>
    </Link>
  );
}
