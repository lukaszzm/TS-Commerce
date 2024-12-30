import { db } from "@/db";
import { orders, productsToOrders } from "@/db/schema";
import { CheckoutPayload } from "@/features/orders/orders.model";

const USER_ID = process.env.USER_ID!;

export async function createOrder(payload: CheckoutPayload) {
  const [newOrder] = await db
    .insert(orders)
    .values({
      userId: Number(USER_ID),
    })
    .returning({ orderId: orders.id });

  if (!newOrder) {
    throw new Error("Failed to create order");
  }

  for (const item of payload.items) {
    await db.insert(productsToOrders).values({
      productId: item.product.id,
      orderId: newOrder.orderId,
      quantity: item.quantity,
    });
  }

  return newOrder;
}
