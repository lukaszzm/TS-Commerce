import { z } from "zod";

export const addToCartSchema = z.object({
  quantity: z.coerce.number().min(1).max(999),
});

export type AddToCartPayload = z.infer<typeof addToCartSchema>;
