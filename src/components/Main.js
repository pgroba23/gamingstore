import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './Cart';
import { ItemDetailContainer } from './ItemDetailContainer';
import { ItemListContainer } from './ItemListContainer';
import { Menu } from './Menu';
import { NoMatch } from './NoMatch';

export const Main = () => {
  return (
    <main>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/search/:find" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoMatch title={'Ups! Wrong url =('} />} />
      </Routes>
    </main>
  );
};
