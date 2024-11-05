import { InferSchemaType, model, ObjectId, Schema } from "mongoose";

export interface IProduct{
  _id: ObjectId,
  name: string;
  price: number;
  image: string;
}

const productSchema: Schema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, r89equired: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

// type Product = InferSchemaType<typeof productSchema>;

export default model<IProduct>("Product", productSchema);
