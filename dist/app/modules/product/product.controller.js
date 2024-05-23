"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const zodParsedData = product_validation_1.default.parse(product);
        const result = yield product_service_1.ProductServices.createProductIntoDb(zodParsedData);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err,
        });
    }
});
const retrieveProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.retrieveProductsFromDb(searchTerm);
        if (result === null || result === void 0 ? void 0 : result.length) {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "There are no products found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err,
        });
    }
});
const retrieveProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.retrieveProductByIdFromDb(productId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product Not Found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        const zodParsedData = product_validation_1.default.parse(updateProduct);
        const result = yield product_service_1.ProductServices.updateProductIntoDb(productId, zodParsedData);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "Product Not Found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductFromDb(productId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "Product Not Found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    retrieveProducts,
    retrieveProductById,
    updateProduct,
    deleteProduct,
};
