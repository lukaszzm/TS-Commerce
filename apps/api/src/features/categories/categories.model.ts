import { categories } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Category = InferSelectModel<typeof categories>;
