import {
  findProductById,
  findProducts,
} from "@/features/products/products.service";
import { NextFunction, Router, Request, Response } from "express";

const router: Router = Router();

router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = req.query.category;

      if (category && typeof category === "string") {
        const products = await findProducts(Number(category));
        res.json(products);
      } else {
        const products = await findProducts();
        res.json(products);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/products/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await findProductById(Number(id));
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
