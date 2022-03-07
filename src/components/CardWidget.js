import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CardWidget = () => {
  const { cart } = useContext(CartContext);
  let amount = 0;
  cart.forEach((element) => {
    amount += element.quantity;
  });
  return (
    <>
      <Link to={'/cart'}>
        <FaShoppingCart className="m-2" />
        {!(amount === 0) && (
          <h1 className="text-white px-1 bg-red-600 rounded-full absolute top-0 right-2 text-base">
            {amount}
          </h1>
        )}
      </Link>
    </>
  );
};
