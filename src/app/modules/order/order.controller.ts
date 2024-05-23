import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.createOrderIntoDb(order);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const retrieveOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    console.log({ email });

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
    console.log(err);
  }
};

export const OrderControllers = { CreateOrder, retrieveOrders };
