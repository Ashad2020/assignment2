import mongoose from "mongoose";
import { ProductSchema } from "./product.schema";
import { IProduct } from "./product.interface";

const Product = mongoose.model<IProduct>("product", ProductSchema);

export default Product;
