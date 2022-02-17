import React from 'react';

export const ItemCount = ({ stock, initial = 1 }) => {
  const [count, setCount] = React.useState(initial);

  const handleAdd = () => {
    count < stock && setCount(count + 1);
  };

  const handleRemove = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <>
      <div className="mx-2 mt-8 mb-4  text-center">
        <button
          className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm"
          onClick={handleRemove}
        >
          -
        </button>
        <span className="p-2 m-1 bg-zinc-200 text-lg rounded-sm">{count}</span>
        <button
          className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className="m-2 text-center">
        <button className="py-2 px-10 bg-slate-300 hover:bg-slate-700 text-white font-bold rounded-sm">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
