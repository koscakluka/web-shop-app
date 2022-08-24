import axios from "axios";

const client = (() =>
  axios.create({ baseURL: "https://dummyjson.com/products" }))();

const productsRequest = async (options) => {
  const onSuccess = (response) => {
    const {
      data: { products },
    } = response;
    return products;
  };

  const onError = (error) => {
    return Promise.reject(error.response);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default productsRequest;
