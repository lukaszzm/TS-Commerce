import categoriesController from "@/features/categories/categories.controller";
import productsController from "@/features/products/products.controller";

import { Router } from "express";

const routes: Router = Router()
  .use(categoriesController)
  .use(productsController);

const api: Router = Router().use("/api", routes);

export default api;
