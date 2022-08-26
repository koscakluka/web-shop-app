import axios from "axios";

const client = (() =>
  axios.create({ baseURL: "https://dummyjson.com/products" }))();

const productsRequest = async (options, onSuccess = null, onError = null) => {
  const onSuccessDefault = (response) => {
    return response.data;
  };

  const onErrorDefault = (error) => {
    return Promise.reject(error.response);
  };

  return client(options)
    .then(onSuccess ? onSuccess : onSuccessDefault)
    .catch(onError ? onError : onErrorDefault);
};

export default productsRequest;
