import z from "zod";

export const checkoutItemSchema = z.object({
  product: z.object({
    id: z.number(),
    name: z.string().min(1),
  }),
  quantity: z.number().min(1),
});

export const checkoutSchema = z.object({
  items: z.array(checkoutItemSchema),
});
