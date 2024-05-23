import mongoose from "mongoose";
import { OrderSchema } from "./order.schema";

export const Order = mongoose.model("Order", OrderSchema);
