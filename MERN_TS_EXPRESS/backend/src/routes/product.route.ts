import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controller/product.controller";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.put("/", updateProduct);
productRouter.delete("/", deleteProduct);

export default productRouter;
