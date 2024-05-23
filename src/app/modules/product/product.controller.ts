import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await ProductServices.createProductIntoDb(product);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.errmsg}`,
      data: null,
    });
  }
};

const retrieveProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductServices.retrieveProductsFromDb(
      searchTerm as string
    );

    if (result?.length) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "There are no products found!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.errmsg}`,
      data: null,
    });
  }
};
const retrieveProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.retrieveProductByIdFromDb(productId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product Not Found!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.errmsg}`,
      data: null,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const updateProduct = req.body;

    const result = await ProductServices.updateProductIntoDb(
      productId,
      updateProduct
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Product Not Found!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: `${err.errmsg}`,
      data: null,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductFromDb(productId);

  if (result) {
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } else {
    res.status(200).json({
      success: false,
      message: "Product Not Found!",
      data: result,
    });
  }
};
export const ProductControllers = {
  createProduct,
  retrieveProducts,
  retrieveProductById,
  updateProduct,
  deleteProduct,
};
