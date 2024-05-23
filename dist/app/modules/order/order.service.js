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
exports.OrderServices = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const product_service_1 = require("../product/product.service");
const order_model_1 = require("./order.model");
const createOrderIntoDb = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(order.productId);
    // console.log(product);
    if (product === null || product === void 0 ? void 0 : product.inventory.inStock) {
        if ((product === null || product === void 0 ? void 0 : product.inventory.quantity) < order.quantity) {
            return "insufficient_quantity";
        }
        else {
            product.inventory.quantity = (product === null || product === void 0 ? void 0 : product.inventory.quantity) - order.quantity;
            if (product.inventory.quantity === 0) {
                product.inventory.inStock = false;
            }
            product_service_1.ProductServices.updateProductIntoDb(order.productId, product);
            return yield order_model_1.Order.create(order);
        }
    }
    else {
        return "stock_empty";
    }
});
const retrieveOrdersFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const orders = yield order_model_1.Order.find({
            email: email,
        });
        return orders;
    }
    else {
        return yield order_model_1.Order.find();
    }
});
exports.OrderServices = {
    createOrderIntoDb,
    retrieveOrdersFromDb,
};
