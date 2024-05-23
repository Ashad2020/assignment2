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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const zodParsedOrder = order_validation_1.default.parse(order);
        const result = yield order_service_1.OrderServices.createOrderIntoDb(zodParsedOrder);
        if (result === "stock_empty") {
            res.status(200).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        else if (result === "insufficient_quantity") {
            res.status(200).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Order created successfully!",
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
const retrieveOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.OrderServices.retrieveOrdersFromDb(email);
        if (result === null || result === void 0 ? void 0 : result.length) {
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Order not found",
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
exports.OrderControllers = { CreateOrder, retrieveOrders };
