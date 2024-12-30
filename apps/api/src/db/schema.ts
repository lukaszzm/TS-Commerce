import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial().primaryKey(),
  name: text().notNull(),
  description: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  image: text().default("https://placehold.co/600x400"),
  categoryId: integer().notNull(),
});

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

export const categories = pgTable("categories", {
  id: serial().primaryKey(),
  name: text().notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: text().notNull(),
  role: text().default("user"),
});

export const orders = pgTable("orders", {
  id: serial().primaryKey(),
  userId: integer().notNull(),
});

export const productsToOrders = pgTable(
  "products_to_orders",
  {
    productId: integer()
      .notNull()
      .references(() => products.id),
    orderId: integer()
      .notNull()
      .references(() => orders.id),
    quantity: integer().notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.orderId] }),
  })
);

export const productsToOrdersRelations = relations(
  productsToOrders,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToOrders.productId],
      references: [products.id],
    }),
    cart: one(orders, {
      fields: [productsToOrders.orderId],
      references: [orders.id],
    }),
  })
);
