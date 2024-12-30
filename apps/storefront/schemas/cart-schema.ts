import { z } from "zod";

export const cartItemSchema = z.object({
  product: z.object({
    id: z.number(),
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().min(1),
    image: z.string().url(),
    categoryId: z.number(),
  }),
  quantity: z.number().min(1),
});

export type CartItem = z.infer<typeof cartItemSchema>;

export const cartSchema = z.array(cartItemSchema);

export type Cart = z.infer<typeof cartSchema>;
