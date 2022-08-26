import productsRequest from "./productsRequest";

class ProductsService {
  static getAllProducts() {
    return productsRequest(
      {
        url: "",
        method: "GET",
      },
      (response) => {
        const {
          data: { products },
        } = response;
        return products;
      }
    );
  }

  static getProduct(id) {
    return productsRequest({
      url: `/${id}`,
      method: "GET",
    });
  }
}

export default ProductsService;
