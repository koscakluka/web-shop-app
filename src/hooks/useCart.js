import React from "react";

const useCart = () => {
  const [cart, setCart] = React.useState(new Set());

  const addProductToCart = (productId) => {
    setCart((cart) => new Set(cart.add(productId)));
  };

  const removeProductFromCart = (productId) => {
    setCart((cart) => {
      cart.delete(productId);
      return new Set(cart);
    });
  };

  const cartOperations = {};
  cartOperations.get = () => Array.from(cart);
  cartOperations.has = (productId) => cart.has(productId);
  cartOperations.size = () => cart.size;
  cartOperations.toggle = (productId) => {
    if (cartOperations.has(productId)) {
      removeProductFromCart(productId);
    } else {
      addProductToCart(productId);
    }
  };

  return [cartOperations];
};

export default useCart;
