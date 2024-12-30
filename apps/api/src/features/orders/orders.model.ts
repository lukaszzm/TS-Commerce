import { orders } from "@/db/schema";
import { checkoutSchema } from "@/features/orders/orders.schema";
import { InferSelectModel } from "drizzle-orm";
import z from "zod";

export type Order = InferSelectModel<typeof orders>;

export type CheckoutPayload = z.infer<typeof checkoutSchema>;
