import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/data/get-products";

type SearchParams = Promise<{ categoryId?: string }>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { categoryId } = await searchParams;
  const products = await getProducts(categoryId);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
