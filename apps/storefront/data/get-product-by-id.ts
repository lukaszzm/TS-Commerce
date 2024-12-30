import { ApiRoute } from "@/config/routes";
import { api } from "@/lib/api";
import { Product } from "@/types";

export async function getProductById(productId: string) {
  const url = `${ApiRoute.Products}/${productId}`;

  const response = await api.get<Product | undefined>(url);
  return response.data;
}
