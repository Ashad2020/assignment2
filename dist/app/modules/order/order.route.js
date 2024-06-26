"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const routes = express_1.default.Router();
routes.post("/", order_controller_1.OrderControllers.CreateOrder);
routes.get("/", order_controller_1.OrderControllers.retrieveOrders);
exports.OrderRoutes = routes;
