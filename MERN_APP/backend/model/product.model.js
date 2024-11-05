import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Auto assigns createdAt and updatedAt fields to your schema.
});

const Product = mongoose.model("Product", productSchema) // In DB it creates collection name as products

export default Product;