"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.ProductControllers.createProduct);
//Retrieve a List of All Products and Search a product
router.get("/", product_controller_1.ProductControllers.retrieveProducts);
router.get("/:productId", product_controller_1.ProductControllers.retrieveProductById);
// Update Product Information
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
// Delete a Product
router.delete("/:productId", product_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
