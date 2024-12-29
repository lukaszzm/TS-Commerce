import { db } from "@/db";
import { products } from "@/db/schema";
import { Product } from "@/features/products/products.model";
import { eq } from "drizzle-orm";

export function findProductById(id: number): Promise<Product | undefined> {
  return db.query.products.findFirst({
    where: eq(products.id, id),
  });
}

export function findProducts(categoryId?: number): Promise<Product[]> {
  if (categoryId) {
    return db.query.products.findMany({
      where: eq(products.categoryId, categoryId),
    });
  }

  return db.query.products.findMany();
}
