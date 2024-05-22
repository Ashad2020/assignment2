import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDb = async (product: IProduct) => {
  return await Product.create(product);
};
const retrieveProductsFromDb = async () => {
  return await Product.find();
};
const retrieveProductByIdFromDb = async (productId: string) => {
  return await Product.findById(productId);
};

export const ProductServices = {
  createProductIntoDb,
  retrieveProductsFromDb,
  retrieveProductByIdFromDb,
};
