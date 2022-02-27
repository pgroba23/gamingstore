import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const cartCopy = [...cart];
      const index = cartCopy.findIndex((e) => e.item.id === item.id);
      cartCopy[index] = {
        ...cartCopy[index],
        quantity: cartCopy[index].quantity + quantity,
      };
      setCart(cartCopy);
    } else {
      console.log('paso por aca');
      setCart([...cart, { item: { ...item }, quantity }]);
    }
  };

  console.log(cart);

  const removeItem = (id) => cart.filter(({ item }) => item.id !== id);

  const isInCart = (id) => {
    return cart && cart.some(({ item }) => item.id === id) ? true : false;
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
