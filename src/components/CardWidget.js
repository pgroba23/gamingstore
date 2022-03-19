import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CardWidget = () => {
  const { getTotalAmount } = useContext(CartContext);

  return (
    <>
      <Link to={'/cart'}>
        <FaShoppingCart className="m-2" />
        {!(getTotalAmount() === 0) && (
          <h1 className="text-white px-1 bg-red-600 rounded-full absolute top-0 right-2 text-base">
            {getTotalAmount()}
          </h1>
        )}
      </Link>
    </>
  );
};
