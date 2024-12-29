import { db } from "@/db";
import { categories } from "@/db/schema";
import { Category } from "@/features/categories/categories.model";
import { eq } from "drizzle-orm";

export function findCategoryById(id: number): Promise<Category | undefined> {
  return db.query.categories.findFirst({
    where: eq(categories.id, id),
  });
}

export function findCategories(): Promise<Category[]> {
  return db.query.categories.findMany();
}
