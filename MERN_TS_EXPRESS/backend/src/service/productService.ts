import Product, { IProduct } from "../model/product.model";

class ProductService {
  async getProducts(): Promise<Array<IProduct>> {
    const products = await Product.find({});
    return products;
  }

  async createProduct(productData: IProduct) {
    const { name, price, image } = productData;

    const newProduct = new Product({ name, price, image });
    await newProduct.save();

    return newProduct;
  }

  async updateProduct(id: string, product: IProduct) {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    return updatedProduct;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await Product.findByIdAndDelete(id);

    return deletedProduct;
  }
}

export default new ProductService();
