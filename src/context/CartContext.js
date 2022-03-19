import React, { useState } from 'react';

export const CartContext = React.createContext([]);

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
      setCart([...cart, { item: { ...item }, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter(({ item }) => item.id !== id));

  const isInCart = (id) => {
    return cart && cart.some(({ item }) => item.id === id) ? true : false;
  };

  const clear = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, isInCart, cart, getTotalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
