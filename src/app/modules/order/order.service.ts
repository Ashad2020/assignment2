import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (order: IOrder) => {
  return await Order.create(order);
};
const retrieveOrdersFromDb = async (email: string) => {
  if (email) {
    const orders = await Order.find({
      email: { $regex: email, $options: "i" },
    });
    return orders;
  } else {
    return await Order.find();
  }
};
export const OrderServices = {
  createOrderIntoDb,
  retrieveOrdersFromDb,
};
