import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db";
import env from "./utils/validateEnv";
import productRouter from "./routes/product.route";

// dotenv.config()

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);
const PORT = env.PORT;

app.listen(PORT, () => {
  connectDb();
  console.log(`server started on http://localhost:${PORT}`);
});
