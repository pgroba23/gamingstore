import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, title, desc, price, url }) => {
  return (
    <article className="max-w-xs rounded overflow-hidden shadow-lg hover:max-w-sm ease-in duration-300 cursor-pointer">
      <img className="w-full" alt={`juego-${title}`} src={url} />
      <h3 className="p-1 m-1 text-center text-xl uppercase">{title}</h3>
      <h5 className="p-1 m-1 text-center text-sm italic">{desc}</h5>
      <div className="text-center mb-2">
        <span className="p-1 m-1  text-sm">{price}</span>
        <Link to={`/item/${id}`}>
          <div className="px-2 py-1 m-1 bg-teal-300 rounded text-sm hover:bg-teal-500 cursor-pointer">
            Info
          </div>
        </Link>
      </div>
    </article>
  );
};
