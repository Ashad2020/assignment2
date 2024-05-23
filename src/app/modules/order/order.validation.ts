import { z } from "zod";

// Order Schema
const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  productId: z.string().min(1, { message: "Product ID is required" }),
  price: z
    .number()
    .nonnegative({ message: "Price must be a non-negative number" }),
  quantity: z
    .number()
    .int()
    .nonnegative({ message: "Quantity must be a non-negative integer" })
    .min(1, { message: "Quantity is required" }),
});

// Export the schema for use in your application
export default orderValidationSchema;
