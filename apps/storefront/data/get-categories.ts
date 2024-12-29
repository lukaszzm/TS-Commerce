import { ApiRoute } from "@/config/routes";
import { api } from "@/lib/api";
import { Category } from "@/types";

export async function getCategories() {
  const response = await api.get<Category[]>(ApiRoute.Categories);
  return response.data;
}
