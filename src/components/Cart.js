import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrashAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { NoMatch } from './NoMatch';

export const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);
  let total = 0;
  const handleQuantity = (element, amount) => {
    if (
      element.quantity + amount <= element.item.stock &&
      element.quantity + amount >= 1
    ) {
      addItem(element.item, amount);
    }
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div className="flex flex-col items-center">
      {cart.length === 0 ? (
        <NoMatch title={'Carrito vacio'} />
      ) : (
        <>
          <div className="table table-fixed w-1/2">
            <div className="table-row-group">
              {cart.map((element) => {
                total += element.quantity * element.item.price;
                return (
                  <div
                    key={element.item.id}
                    className="table-row transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <div className="table-cell">
                      <img
                        alt={`juego-${element.item.title}`}
                        className="w-52 p-4"
                        src={element.item.thumbnail}
                      />
                    </div>
                    <div className="table-cell text-center  align-middle">
                      {element.item.title}
                    </div>
                    <div className="table-cell text-center align-middle">
                      <div className="flex justify-center relative">
                        <FaArrowLeft
                          className="mr-4 cursor-pointer"
                          onClick={() => handleQuantity(element, -1)}
                        />
                        <span className="mx-4 absolute bottom-0">
                          {element.quantity}
                        </span>
                        <FaArrowRight
                          className="ml-4 cursor-pointer"
                          onClick={() => handleQuantity(element, 1)}
                        />
                      </div>
                    </div>
                    <div className="table-cell text-center  align-middle">
                      ${element.item.price}
                    </div>
                    <div className="table-cell text-center  align-middle">
                      ${element.quantity * element.item.price}
                    </div>
                    <div className="table-cell text-center align-middle">
                      <FaTrashAlt
                        className="mr-2 cursor-pointer text-red-600"
                        onClick={() => handleRemove(element.item.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row mt-6">
            <button
              className="py-2 px-4 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm"
              onClick={clear}
            >
              Vaciar Carrito
            </button>
            <button className="py-2 px-4 ml-4 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm">
              Finalizar Compra
            </button>
            <h1 className="ml-4 px-4 py-2 bg-green-200 select-none">
              Total: ${total}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};
