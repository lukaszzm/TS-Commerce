import { ApiRoute } from "@/config/routes";
import { api } from "@/lib/api";
import { Product } from "@/types";

export async function getProducts(categoryId?: string) {
  const url = categoryId
    ? `${ApiRoute.Products}?category=${categoryId}`
    : ApiRoute.Products;

  const response = await api.get<Product[]>(url);
  return response.data;
}
