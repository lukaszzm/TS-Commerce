import * as dotenv from "dotenv";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { categories } from "./schema";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
  });

  const db = drizzle({ client: pool, schema });

  const seedCategories = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic devices and accessories",
    },
    {
      id: 2,
      name: "Clothing",
      description: "Clothing and apparel",
    },
    {
      id: 3,
      name: "Books",
      description: "Books and literature",
    },
  ];

  console.log("Seeding categories...");
  const result = await db.insert(categories).values(seedCategories).execute();
  console.log("Categories seeded");

  const seedProducts = [
    {
      id: 1,
      name: "Laptop",
      description: "A laptop computer",
      price: 3100 * 100,
      categoryId: 1,
    },
    {
      id: 2,
      name: "PC",
      description: "A desktop computer",
      price: 2700 * 100,
      categoryId: 1,
    },
    {
      id: 3,
      name: "Mouse",
      description: "A wireless computer mouse",
      price: 78 * 100,
      categoryId: 1,
    },
    {
      id: 4,
      name: "Keyboard",
      description: "A mechanical keyboard",
      price: 229 * 100,
      categoryId: 1,
    },
    {
      id: 5,
      name: "Headphones",
      description: "Noise-cancelling headphones",
      price: 350 * 100,
      categoryId: 1,
    },
    {
      id: 6,
      name: "T-shirt",
      description: "A plain white t-shirt",
      price: 29 * 100,
      categoryId: 2,
    },
    {
      id: 7,
      name: "Cap",
      description: "A baseball cap",
      price: 15 * 100,
      categoryId: 2,
    },
    {
      id: 8,
      name: "Jeans",
      description: "A pair of blue jeans",
      price: 59 * 100,
      categoryId: 2,
    },
    {
      id: 9,
      name: "Sweater",
      description: "A wool sweater",
      price: 89 * 100,
      categoryId: 2,
    },
    {
      id: 10,
      name: "Hoodie",
      description: "A hoodie",
      price: 49 * 100,
      categoryId: 2,
    },
    {
      id: 11,
      name: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald",
      price: 39 * 100,
      categoryId: 3,
    },
    {
      id: 12,
      name: "Poverty and Famines",
      description: "An essay by Amartya Sen",
      price: 49 * 100,
      categoryId: 3,
    },
    {
      id: 13,
      name: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger",
      price: 39 * 100,
      categoryId: 3,
    },
  ];

  console.log("Seeding products...");
  await db.insert(schema.products).values(seedProducts).execute();
  console.log("Products seeded");

  await pool.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
