import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.retrieveProducts);
router.get("/:productId", ProductControllers.retrieveProductById);
export const ProductRoutes = router;
