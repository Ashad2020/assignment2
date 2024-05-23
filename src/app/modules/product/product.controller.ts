import { Request, Response } from "express";
import { ProductServices } from "./product.service";

import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const zodParsedData = productValidationSchema.parse(product);

    const result = await ProductServices.createProductIntoDb(zodParsedData);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product created successfully!",
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
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
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
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const updateProduct = req.body;
    const zodParsedData = productValidationSchema.parse(updateProduct);

    const result = await ProductServices.updateProductIntoDb(
      productId,
      zodParsedData
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
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
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
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err,
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
