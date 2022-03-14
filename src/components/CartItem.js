import { FaTrashAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const CartItem = ({ element, addItem, removeItem }) => {
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
    <>
      <div>
        <img
          alt={`juego-${element.item.title}`}
          className="w-52 p-4"
          src={element.item.thumbnail}
        />
      </div>
      <div className="align-bottom">{element.item.title}</div>
      <div className="text-center align-middle">
        <div className="flex justify-center relative">
          <FaArrowLeft
            className="mr-4 cursor-pointer"
            onClick={() => handleQuantity(element, -1)}
          />
          <span className="mx-4 absolute bottom-0">{element.quantity}</span>
          <FaArrowRight
            className="ml-4 cursor-pointer"
            onClick={() => handleQuantity(element, 1)}
          />
        </div>
      </div>
      <div className="text-center  align-middle">${element.item.price}</div>
      <div className="text-center  align-middle">
        ${element.quantity * element.item.price}
      </div>
      <div className="text-center align-middle">
        <FaTrashAlt
          className="mr-2 cursor-pointer text-red-600"
          onClick={() => handleRemove(element.item.id)}
        />
      </div>
    </>
  );
};
