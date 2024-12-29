import { ApiRoute } from "@/config/routes";
import { api } from "@/lib/api";

export async function getStatus() {
  const response = await api.get<{ ok: boolean }>(ApiRoute.Status);
  return response.data;
}
