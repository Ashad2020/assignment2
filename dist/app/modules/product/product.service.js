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
exports.ProductServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductIntoDb = (product) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.create(product);
});
const retrieveProductsFromDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const products = yield product_model_1.default.find({
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } },
            ],
        });
        return products;
    }
    else {
        return yield product_model_1.default.find();
    }
});
const retrieveProductByIdFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findById(productId);
});
const updateProductIntoDb = (productId, updateProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.default.findByIdAndUpdate(productId, updateProduct, { new: true, runValidators: true });
    return updatedProduct;
});
const deleteProductFromDb = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findByIdAndDelete(productId);
});
exports.ProductServices = {
    createProductIntoDb,
    retrieveProductsFromDb,
    retrieveProductByIdFromDb,
    updateProductIntoDb,
    deleteProductFromDb,
};
