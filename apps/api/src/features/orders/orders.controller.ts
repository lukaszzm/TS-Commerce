import { checkoutSchema } from "@/features/orders/orders.schema";
import { createOrder } from "@/features/orders/orders.service";
import { NextFunction, Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router: Router = Router();

router.post(
  "/checkout",
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = checkoutSchema.safeParse(req.body);

    console.log("PAyload: ", payload);
    if (!payload.success) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: payload.error });
    }

    const data = payload.data;

    try {
      const newOrder = await createOrder(data);
      return res.status(StatusCodes.CREATED).json(newOrder);
    } catch {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json("Failed to create order");
    }
  }
);

export default router;
