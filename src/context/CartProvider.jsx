import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //agregar al carrito
  const addToCart = (product, count) => {
    if (isIncart(product.id)) {
      const indexItem = cart.findIndex((ele) => ele.item.id === product.id);
      cart[indexItem].count = cart[indexItem].count + count;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: product, count: count }]);
    }
  };

  //funtion eliminar
  const deleteItem = (id) => {
    //nuevo array sin el producto selecionado
    const updadCart = cart.filter((element) => element.item.id !== id);
    setCart(updadCart);
  };

  //funtion vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  //funtion precio total carrito
  const precioTotal = () => {
    return cart
      .map((item) => item.item.precio * item.count)
      .reduce((a, b) => a + b)
      .toFixed(2);
  };

  //funtion suma de productos en carrito
  const totalUnidades = () => {
    return cart.reduce((acum, producto) => {
      return acum + producto.count;
    }, 0);
  };

  //console.log(cart.reduce((a,b) => a.count + b.count))

  //función que devueva si producto existe en carrito
  const isIncart = (id) => {
    return cart.some((element) => element.item.id === id);
  };

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          deleteItem,
          clearCart,
          precioTotal,
          totalUnidades,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};

export default CartProvider;
