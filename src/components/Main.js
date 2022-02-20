import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
};
