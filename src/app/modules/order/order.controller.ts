import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParsedOrder = orderValidationSchema.parse(order);
    const result = await OrderServices.createOrderIntoDb(zodParsedOrder);
    if (result === "stock_empty") {
      res.status(200).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    } else if (result === "insufficient_quantity") {
      res.status(200).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

const retrieveOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await OrderServices.retrieveOrdersFromDb(email as string);

    if (result?.length) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

export const OrderControllers = { CreateOrder, retrieveOrders };
