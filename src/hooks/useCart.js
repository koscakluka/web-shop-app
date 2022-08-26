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

  const toggleProductInCart = (productId) => {
    if (cart.has(productId)) {
      removeProductFromCart(productId);
    } else {
      addProductToCart(productId);
    }
  };

  const getCartArray = () => {
    return Array.from(cart);
  };

  const isInCart = (productId) => {
    return cart.has(productId);
  };

  return [cart, getCartArray, toggleProductInCart, isInCart];
};

export default useCart;
