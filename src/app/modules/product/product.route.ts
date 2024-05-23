import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
//Retrieve a List of All Products and Search a product
router.get("/", ProductControllers.retrieveProducts);
router.get("/:productId", ProductControllers.retrieveProductById);
// Update Product Information
router.put("/:productId", ProductControllers.updateProduct);
// Delete a Product
router.delete("/:productId", ProductControllers.deleteProduct);
export const ProductRoutes = router;
