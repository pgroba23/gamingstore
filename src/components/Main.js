import React from 'react';
import { ItemListContainer } from './ItemListContainer';
import { Menu } from './Menu';

export const Main = () => {
  return (
    <main>
      <Menu />
      <ItemListContainer greeting={'Bienvenidos!!!'} />
    </main>
  );
};
