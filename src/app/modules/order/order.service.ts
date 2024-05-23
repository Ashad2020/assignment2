import Product from "../product/product.model";
import { ProductServices } from "../product/product.service";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (order: IOrder) => {
  let product = await Product.findById(order.productId);
  // console.log(product);

  if (product?.inventory.inStock) {
    if (product?.inventory.quantity < order.quantity) {
      return "insufficient_quantity";
    } else {
      product.inventory.quantity = product?.inventory.quantity - order.quantity;
      if (product.inventory.quantity === 0) {
        product.inventory.inStock = false;
      }
      ProductServices.updateProductIntoDb(order.productId, product);
      return await Order.create(order);
    }
  } else {
    return "stock_empty";
  }
};
const retrieveOrdersFromDb = async (email: string) => {
  if (email) {
    const orders = await Order.find({
      email: email,
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
