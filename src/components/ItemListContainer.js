import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { array } from '../common/getArray';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ urldata }) => {
  const [items, setItems] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      res(
        array.filter((element) =>
          categoryId ? element.platform === categoryId : element === element
        )
      );
    });
    setTimeout(() => {
      promesa.then((res) => {
        setItems(res);
      });
    }, 1000);
    return () => {
      setItems([]);
    };
  }, [categoryId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
