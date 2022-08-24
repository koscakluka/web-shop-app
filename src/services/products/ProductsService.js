import productsRequest from "./productsRequest";

class ProductsService {
  static getAllProducts() {
    return productsRequest({
      url: "",
      method: "GET",
    });
  }
}

export default ProductsService;
