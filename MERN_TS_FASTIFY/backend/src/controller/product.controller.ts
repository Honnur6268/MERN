/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from "fastify";
import mongoose from "mongoose";
import productService from "../service/productService";

export const getAllProducts = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const products = await productService.getProducts();
    res.status(200).send({
      success: true,
      message: "Products Fetched Successfully",
      products,
    });
  } catch (error: any) {
    console.error("Error Fetching products:", error.message);
    res.status(500).send({ success: false, message: "Server Error" });
  }
};

// export const createProduct = async (req: Request, res: Response) => {
//   const product = req.body; // User will send this data
//   if (!product.name || !product.price || !product.image) {
//     return apiResponse(res, false, "Please provide all fields", null, 400);
//   }

//   try {
//     const newProduct = await productService.createProduct(product);
//     console.log("Product Created");
//     apiResponse(res, true, "Product created successfully", newProduct, 201);
//   } catch (error: any) {
//     console.error("Error in Create product:", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// export const updateProduct = async (req: Request, res: Response) => {
//   const id = req.get("id");

//   if (typeof id !== "string") {
//     return res
//       .status(400)
//       .json({ success: false, message: "Header is missing" });
//   }
//   const product = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return apiResponse(res, false, "Product not found", null, 404);
//   }

//   try {
//     const updatedProduct = await productService.updateProduct(id, product);

//     if (!updatedProduct) {
//       return apiResponse(res, false, "Product not found", null, 404);
//     }
//     console.log("Product Updated");
//     apiResponse(res, true, "Product updated successfully", updatedProduct);
//   } catch (error: any) {
//     console.error("Error while updating product:", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

// export const deleteProduct = async (req: Request, res: Response) => {
//   const id = req.get("id");

//   if (typeof id !== "string") {
//     return res
//       .status(400)
//       .json({ success: false, message: "Header is missing" });
//   }

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return apiResponse(res, false, "Product not found", null, 404);
//   }
//   try {
//     const deletedProduct = await productService.deleteProduct(id);

//     if (!deletedProduct) {
//       return apiResponse(res, false, "Product not found", null, 404);
//     }

//     apiResponse(res, true, "Product deleted successfully");
//   } catch (error: any) {
//     console.error("Error in deleteing Product", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };
