import mongoose from "mongoose";
import productService from "../service/productService.js";
import { apiResponse } from "../utils/apiResponse.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getProducts();

    apiResponse(res, true, "Products fetched successfully", { products });
  } catch (error) {
    console.error("Error Fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // User will send this data
  if (!product.name || !product.price || !product.image) {
    return apiResponse(res, false, "Please provide all fields", null, 400);
  }

  try {
    const newProduct = await productService.createProduct(product);

    apiResponse(res, true, "Product created successfully", newProduct, 201);
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return apiResponse(res, false, "Product not found", null, 404);
  }

  try {
    const updatedProduct = await productService.updateProduct(id, product);

    if (!updatedProduct) {
      return apiResponse(res, false, "Product not found", null, 404);
    }
    apiResponse(res, true, "Product updated successfully", updatedProduct);
  } catch (error) {
    console.error("Error while updating product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return apiResponse(res, false, "Product not found", null, 404);
  }
  try {
    const deletedProduct = await productService.deleteProduct(id);

    if (!deletedProduct) {
      return apiResponse(res, false, "Product not found", null, 404);
    }

    apiResponse(res, true, "Product deleted successfully");
  } catch (error) {
    console.error("Error in deleteing Product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
