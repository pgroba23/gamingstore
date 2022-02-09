import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({ greeting }) => {
  return (
    <React.Fragment>
      <h1 className="bg-lime-400 text-2xl p-2 m-2 text-center">{greeting}</h1>
      <ItemCount stock={5} initial={1} />
    </React.Fragment>
  );
};
