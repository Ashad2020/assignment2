import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDb = async (product: IProduct) => {
  return await Product.create(product);
};
const retrieveProductsFromDb = async (searchTerm: string) => {
  if (searchTerm) {
    const products = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
    return products;
  } else {
    return await Product.find();
  }
};
const retrieveProductByIdFromDb = async (productId: string) => {
  return await Product.findById(productId);
};
const updateProductIntoDb = async (
  productId: string,
  updateProduct: IProduct
) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateProduct,
    { new: true, runValidators: true }
  );
  return updatedProduct;
};

const deleteProductFromDb = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};

export const ProductServices = {
  createProductIntoDb,
  retrieveProductsFromDb,
  retrieveProductByIdFromDb,
  updateProductIntoDb,
  deleteProductFromDb,
};
