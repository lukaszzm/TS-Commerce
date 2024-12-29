import {
  findCategories,
  findCategoryById,
} from "@/features/categories/categories.service";
import { NextFunction, Router, Request, Response } from "express";

const router: Router = Router();

router.get(
  "/categories",
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await findCategories();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/categories/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const category = await findCategoryById(Number(id));
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
