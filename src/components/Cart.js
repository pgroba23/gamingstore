import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Cart!</h1>
      <ul className="flex flex-col text-center sm:flex-col sm:gap-6 sm:justify-center cursor-pointer">
        {cart.map((element) => {
          return (
            <li key={element.item.id} className=" border-b-2 hover:bg-red-300">
              {element.item.title} X {element.quantity}
            </li>
          );
        })}
      </ul>
    </>
  );
};
