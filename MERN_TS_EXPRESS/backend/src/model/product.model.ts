import { InferSchemaType, model, Schema } from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  image: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
