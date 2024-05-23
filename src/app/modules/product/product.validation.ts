import { z } from "zod";

// Variant Schema
const variantValidationSchema = z.object({
  type: z.string().min(1, { message: "Type is required" }),
  value: z.string().min(1, { message: "Value is required" }),
});

// Inventory Schema
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative({ message: "Quantity must be a non-negative integer" }),
  inStock: z.boolean({ required_error: "InStock is required" }),
});

// Product Schema
const productValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z
    .number()
    .nonnegative({ message: "Price must be a non-negative number" }),
  category: z.string().min(1, { message: "Category is required" }),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),
  variants: z
    .array(variantValidationSchema)
    .min(1, { message: "At least one variant is required" }),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
