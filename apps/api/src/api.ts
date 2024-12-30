import categoriesController from "@/features/categories/categories.controller";
import productsController from "@/features/products/products.controller";
import ordersController from "@/features/orders/orders.controller";

import { Router } from "express";

const routes: Router = Router()
  .use(categoriesController)
  .use(productsController)
  .use(ordersController);

const api: Router = Router().use("/api", routes);

export default api;
