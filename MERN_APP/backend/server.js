import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRouter from "./routes/product.route.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // Middleware - allows us to accept JSON data in the req.body

app.use("/api/products", productRouter)

app.use(errorHandler);

// console.log(process.env.MONGO_URI)

app.listen(PORT, () => {
  connectDb();
  console.log(`Server started on http://localhost:${PORT}`);
});
