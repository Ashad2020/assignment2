"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Order Schema
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
    productId: zod_1.z.string().min(1, { message: "Product ID is required" }),
    price: zod_1.z
        .number()
        .nonnegative({ message: "Price must be a non-negative number" }),
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative({ message: "Quantity must be a non-negative integer" })
        .min(1, { message: "Quantity is required" }),
});
// Export the schema for use in your application
exports.default = orderValidationSchema;
