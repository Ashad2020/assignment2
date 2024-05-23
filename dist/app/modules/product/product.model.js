"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const product_schema_1 = require("./product.schema");
const Product = mongoose_1.default.model("product", product_schema_1.ProductSchema);
exports.default = Product;
