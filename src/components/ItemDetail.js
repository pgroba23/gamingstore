import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ item }) => {
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
        <span className="p-1 m-1  text-md bg-green-200">{item.price}</span>
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
      <ItemCount stock={5} initial={1} />
    </article>
  );
};
