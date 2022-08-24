import React from "react";

const useCart = () => {
  const [cart, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "add":
        state.add(action.productId);
        break;
      case "remove":
        state.delete(action.productId);
        break;
      default:
    }
    return state;
  }, new Set());

  const addProductToCart = (productId) => {
    dispatch({ type: "add", productId });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: "remove", productId });
  };

  const toggleProductInCart = (productId) => {
    if (cart.has(productId)) {
      removeProductFromCart(productId);
    } else {
      addProductToCart(productId);
    }
  };

  const getCart = () => {
    return Array.from(cart);
  };

  const isInCart = (productId) => {
    return cart.has(productId);
  };

  return [getCart, toggleProductInCart, isInCart];
};

export default useCart;
