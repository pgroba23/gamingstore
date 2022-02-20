import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import { DualRing } from 'react-awesome-spinners';
import { useParams } from 'react-router-dom';
import { array } from '../common/getArray';

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      });
    }, 1000);
    return () => {
      setItems([]);
      setLoading(true);
    };
  }, [categoryId]);

  return (
    <>
      {items.length === 0 ? (
        loading && (
          <div className="text-center m-4 p-2">
            <DualRing />
          </div>
        )
      ) : (
        <section className="flex flex-col items-center my-3 gap-y-3 sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center sm:mt-8">
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.short_description}
                url={item.thumbnail}
                price={item.price}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
