import express from "express";
import { OrderControllers } from "./order.controller";

const routes = express.Router();
routes.post("/", OrderControllers.CreateOrder);
routes.get("/", OrderControllers.retrieveOrders);
export const OrderRoutes = routes;
