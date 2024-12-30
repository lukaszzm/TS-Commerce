import { ProductImage } from "@/components/product-image";
import { ProductInfo } from "@/components/product-info";
import { Route } from "@/config/routes";
import { getProductById } from "@/data/get-product-by-id";
import { Button } from "@workspace/ui/components/button";
import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Button asChild className="max-w-44" variant="ghost">
        <Link href={Route.Products}>
          <MoveLeftIcon />
          Back to products
        </Link>
      </Button>
      <div className="grid md:grid-cols-2 gap-8">
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo product={product} />
      </div>
    </>
  );
}
