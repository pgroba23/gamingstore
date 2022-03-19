import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { Toast } from '../common/swal';

export const ItemDetail = ({ item }) => {
  const [, setItemCountState] = useState(0);
  const navigate = useNavigate();

  const { addItem, cart } = useContext(CartContext);
  const stock = cart.find((e) => e.item.id === item.id)
    ? item.stock - cart.find((e) => e.item.id === item.id).quantity
    : item.stock;

  const onAdd = (quantityToAdd) => {
    if (stock !== 0) {
      setItemCountState(quantityToAdd);
      addItem(item, quantityToAdd);
      Toast.fire({
        icon: 'success',
        title: 'Item added',
      });
    }
  };

  return (
    <article className="w-fit rounded overflow-hidden shadow-lg p-4">
      <img
        className="w-full"
        alt={`juego-${item.title}`}
        src={item.thumbnail}
      />
      <h3 className="p-1 my-4 text-center text-xl uppercase font-bold bg-black text-white">
        {item.title}
      </h3>
      <h5 className="p-1 my-4 text-center text-sm italic">
        {item.short_description}
      </h5>
      <div className="text-center mb-2">
        <span className="p-1 m-1  text-md bg-green-200">${item.price}</span>
      </div>
      <div className="text-center mb-2">
        <span className="p-1 m-1  text-sm">Genere: {item.genre}</span>
        <span className="p-1 m-1  text-sm">Plataform: {item.platform}</span>
      </div>
      <div className="text-center mb-2">
        <span className="p-1 m-1  text-sm">{item.publisher}</span>
        <span className="p-1 m-1  text-sm">{item.developer}</span>
      </div>
      <div className="text-center mb-2">
        <span className="p-1 m-1  text-sm">
          Release Date: {item.release_date}
        </span>
      </div>

      <div className="flex flex-col justify-center align-middle">
        {stock !== 0 ? (
          <ItemCount
            stock={stock}
            initial={stock === 0 ? stock : 1}
            onAdd={onAdd}
          />
        ) : (
          <h1 className="text-center uppercase bg-black text-white">
            Without stock
          </h1>
        )}
      </div>
      <div className="m-2 flex flex-col justify-center sm:flex-row">
        <button
          className="py-2 px-10 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm"
          onClick={() => navigate('/cart')}
        >
          Cart
        </button>
        <button
          className="py-2 px-10 mt-2 sm:ml-2 sm:mt-0 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    </article>
  );
};
