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
  role: text().default("user"),
});

export const carts = pgTable("carts", {
  id: serial().primaryKey(),
  userId: integer().notNull(),
});

export const productsToCarts = pgTable(
  "products_to_carts",
  {
    productId: integer()
      .notNull()
      .references(() => products.id),
    cartId: integer()
      .notNull()
      .references(() => carts.id),
    quantity: integer().notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.cartId] }),
  })
);

export const productsToCartsRelations = relations(
  productsToCarts,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToCarts.productId],
      references: [products.id],
    }),
    cart: one(carts, {
      fields: [productsToCarts.cartId],
      references: [carts.id],
    }),
  })
);
