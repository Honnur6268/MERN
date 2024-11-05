import Product from "../model/product.model.js";

class ProductService {
  async getProducts() {
    const products = await Product.find({});
    return products;
  }

  async createProduct(productData) {
    const { name, price, image } = productData;

    const newProduct = new Product({ name, price, image });
    await newProduct.save();

    return newProduct;
  }

  async updateProduct(id, product) {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    return updatedProduct;
  }

  async deleteProduct(id) {
    const deletedProduct = await Product.findByIdAndDelete(id);

    return deletedProduct;
  }
}

export default new ProductService();
