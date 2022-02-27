import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Cart!</h1>
      <ul>
        {cart.map((element) => {
          return (
            <li key={element.item.id}>
              {element.item.title} X {element.quantity}
            </li>
          );
        })}
      </ul>
    </>
  );
};
